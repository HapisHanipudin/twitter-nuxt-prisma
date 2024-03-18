import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { sendError } from "h3";
import { getUserById } from "../db/users";
import { userTransformer } from "../transformers/user";

export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user", "/api/user/post"];
  const isHandled = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);

    return pattern.match(event.node.req.url);
  });

  if (!isHandled) {
    return;
  }

  const token = event.node.req.headers["authorization"]?.split(" ")[1];

  const decoded = decodeAccessToken(token);

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }
  try {
    const user = await getUserById(decoded.userId);
    event.context.auth = userTransformer(user);
  } catch (error) {
    return;
  }
});
