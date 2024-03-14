import { prisma } from ".";

export const createRefreshToken = (token) => {
  return prisma.refreshToken.create({
    data: token,
  });
};
