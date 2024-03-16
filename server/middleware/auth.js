import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../db/users";
import { userTransformer } from "../transformers/user";

export default defineEventHandler(async (event) => {
  const endpoints = ["api/auth/user"];
  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    return pattern.match(event.node.req.url);
  });
  if (!isHandledByThisMiddleware) {
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
    const userId = decoded.userId;
    const user = await getUserById(decoded.userId);

    event.context.auth = userTransformer(user);
  } catch (error) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Something went wrong",
      })
    );
  }
});
