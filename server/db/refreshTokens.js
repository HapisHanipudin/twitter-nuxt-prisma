import { prisma } from ".";

export const createRefreshToken = (token) => {
  return prisma.refreshToken.create({
    data: token,
  });
};

export const getRefreshTokenByToken = (token) => {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
};
