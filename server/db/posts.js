import { prisma } from ".";

export const createPost = (post) => {
  return prisma.post.create({ data: post });
};
