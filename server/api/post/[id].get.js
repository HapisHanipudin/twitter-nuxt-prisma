import { getPostById } from "~/server/db/posts";
import { postTransformers } from "~/server/transformers/post";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const post = await getPostById(id, {
    include: {
      author: true,
      mediaFiles: true,
      replies: { include: { author: true, mediaFiles: true, replyTo: { include: { author: true, mediaFiles: true } } } },
      replyTo: { include: { author: true, mediaFiles: true } },
    },
  });

  return postTransformers(post);
});
