export default () => {
  const postTweet = (formTweet) => {
    const form = new FormData();

    form.append("text", formTweet.text);

    return useFetchApi("/api/user/post", {
      method: "POST",
      body: form,
    });
  };
  return {
    postTweet,
  };
};
