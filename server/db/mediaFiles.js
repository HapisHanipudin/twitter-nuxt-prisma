import { prisma } from ".";

export const createMediaFile = (mediaFile) => {
  return prisma.mediaFiles.create({ data: mediaFile });
};
