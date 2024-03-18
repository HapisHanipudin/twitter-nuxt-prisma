import { v2 as _cloudinary } from "cloudinary";

const cloudinary = () => {
  const config = useRuntimeConfig();
  _cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
  });

  return _cloudinary;
};

export const cloudinaryUpload = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary().uploader.upload(file, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};
