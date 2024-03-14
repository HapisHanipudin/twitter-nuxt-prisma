import { sendError } from "h3";
import { createUser } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, name, email, password, confirmpassword } = body;
  if (!username || !name || !email || !password || !confirmpassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Params",
      })
    );
  }

  if (password != confirmpassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Password does not match",
      })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: `https://avatar.oxro.io/avatar.svg?name=${username}&caps=3&bold=true`,
  };

  const user = await createUser(userData);
  return { body: userTransformer(user) };
});
