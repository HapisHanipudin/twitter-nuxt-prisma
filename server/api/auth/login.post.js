import { getUserByUsername } from "~/server/db/users";
import { sendError, setCookie } from "h3";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Params",
      })
    );
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 404,
        statusMessage: "User Not Found",
      })
    );
  }

  const PasswordsMatch = await bcrypt.compare(password, user.password);
  if (!PasswordsMatch) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Invalid Password",
      })
    );
  }
  const { accessToken, refreshToken } = generateTokens(user);

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
