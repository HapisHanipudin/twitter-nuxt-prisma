export default () => {
  const postTweet = (formTweet) => {
    const form = new FormData();

    form.append("text", formTweet.text);

    formTweet.mediaFiles.forEach((mediaFile, index) => {
      form.append("mediaFiles" + index, mediaFile);
    });

    return useFetchApi("/api/user/post", {
      method: "POST",
      body: form,
    });
  };
  return {
    postTweet,
  };
};
