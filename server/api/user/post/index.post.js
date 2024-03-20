import formidable from "formidable";
import { createMediaFile } from "~/server/db/mediaFiles";
import { createPost } from "~/server/db/posts";
import { postTransformers } from "~/server/transformers/post";
import { cloudinaryUpload } from "~/server/utils/cloudinary";

export default defineEventHandler(async (event) => {
  const form = formidable({});
  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });

  const { fields, files } = response;

  const userId = event.context.auth.id;

  const postData = {
    caption: fields.text[0],
    authorId: userId,
  };

  const replyTo = fields.replyTo[0];

  if (replyTo && replyTo.length > 0) {
    postData.replyToId = replyTo;
  }

  const post = await createPost(postData);

  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key][0];
    const response = await cloudinaryUpload(file.filepath);
    // console.log(response);
    return await createMediaFile({
      url: response.secure_url,
      providerPublicId: response.public_id,
      userId: userId,
      postId: post.id,
    });
  });

  await Promise.all(filePromises);

  return {
    post: postTransformers(post),
    // files,
  };
});
