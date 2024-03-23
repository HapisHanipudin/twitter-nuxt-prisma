export default () => {
  const postTweet = (formTweet) => {
    const form = new FormData();

    form.append("text", formTweet.text);

    formTweet.mediaFiles.forEach((mediaFile, index) => {
      form.append("mediaFiles" + index, mediaFile);
    });

    if (formTweet.replyTo) {
      form.append("replyTo", formTweet.replyTo);
    }

    return useFetchApi("/api/user/post", {
      method: "POST",
      body: form,
    });
  };
  const getPosts = (params = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi("/api/post", {
          method: "GET",
          params,
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };
  const getPostById = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi("/api/post/" + id, {
          method: "GET",
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };
  const usePostModal = () => useState("postModal", () => false);
  const useReplyPost = () => useState("replyPost", () => null);
  const setReplyTo = (post) => {
    const replyPost = useReplyPost();
    replyPost.value = post;
  };
  const closePostModal = () => {
    const postModal = usePostModal();
    postModal.value = false;
  };
  const openPostModal = (post = null) => {
    const postModal = usePostModal();
    postModal.value = true;
    setReplyTo(post);
  };
  return {
    postTweet,
    getPosts,
    getPostById,
    closePostModal,
    usePostModal,
    openPostModal,
    useReplyPost,
  };
};
