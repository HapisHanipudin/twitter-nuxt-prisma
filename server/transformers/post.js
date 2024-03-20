import { mediaFIlesTransformer } from "./mediaFiles";
import { userTransformer } from "./user";
import human from "human-time";

export const postTransformers = (post) => {
  return {
    id: post.id,
    caption: post.caption,
    mediaFiles: !!post.mediaFiles ? post.mediaFiles.map(mediaFIlesTransformer) : [],
    author: !!post.author ? userTransformer(post.author) : {},
    replies: !!post.replies ? post.replies.map(postTransformers) : [],
    replyTo: !!post.replyTo ? postTransformers(post.replyTo) : null,
    repliesCount: !!post.replies ? post.replies.length : 0,
    postedAtHuman: human(post.createdAt),
  };
};
