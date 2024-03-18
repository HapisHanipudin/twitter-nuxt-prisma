export const postTransformers = (post) => {
  return {
    id: post.id,
    caption: post.caption,
  };
};
