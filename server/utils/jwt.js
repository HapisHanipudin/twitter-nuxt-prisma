import jwt from "jsonwebtoken";
import { setCookie } from "h3";

const generateAccessToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "10m",
  });
};

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
export const decodeRefreshToken = (token) => {
  try {
    return jwt.verify(token, useRuntimeConfig().jwtRefreshSecret);
  } catch (error) {
    return null;
  }
};
export const decodeAccessToken = (token) => {
  try {
    return jwt.verify(token, useRuntimeConfig().jwtAccessSecret);
  } catch (error) {
    return null;
  }
};
export const sendRefreshToken = (event, refreshToken) => {
  setCookie(event, "refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: true,
  });
};
