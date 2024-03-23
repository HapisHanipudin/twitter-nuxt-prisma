import { getPosts } from "~/server/db/posts";
import { postTransformers } from "~/server/transformers/post";

export default defineEventHandler(async (event) => {
  const { query } = getQuery(event);
  let prismaQuery = {
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
  };
  if (!!query) {
    prismaQuery = {
      ...prismaQuery,
      where: {
        OR: [
          {
            caption: {
              search: query,
            },
          },
          {
            author: {
              name: {
                search: query,
              },
            },
          },
        ],
      },
    };
  }
  const posts = await getPosts(prismaQuery);
  return {
    posts: posts.map(postTransformers),
    // query: query,
  };
});
