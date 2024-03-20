import { prisma } from ".";

export const createPost = (post) => {
  return prisma.post.create({ data: post });
};

export const getPosts = (params) => {
  return prisma.post.findMany({ ...params });
};
