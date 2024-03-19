import { getPosts } from "~/server/db/posts";

export default defineEventHandler(async (event) => {
  const posts = await getPosts({
    include: {
      author: true,
      mediaFiles: true,
    },
  });
  return {
    posts: posts,
  };
});
