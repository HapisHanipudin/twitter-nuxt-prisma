import { getPosts } from "~/server/db/posts";
import { postTransformers } from "~/server/transformers/post";

export default defineEventHandler(async (event) => {
  const posts = await getPosts({
    include: {
      author: true,
      mediaFiles: true,
      replies: {
        include: {
          author: true,
          mediaFiles: true,
        },
      },
      replyTo: {
        include: {
          author: true,
          mediaFiles: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
  return {
    posts: posts.map(postTransformers),
  };
});
