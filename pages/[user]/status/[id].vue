<template>
  <Head>
    <Title>{{ post?.author.name }} on Twitter</Title>
  </Head>
  <MainSection title="Tweet" :loading="loading">
    <TweetDetails @onSubmit="handleFormSubmit" :user="user" :post="post" />
  </MainSection>
</template>
<script setup>
const route = useRoute();
const postId = computed(() => {
  return route.params.id;
});
const post = ref(null);
const loading = ref(false);
const { getPostById } = useTweets();
const { useAuthUser } = useAuth();
const user = useAuthUser();

const getPost = async () => {
  loading.value = true;
  try {
    const postData = await getPostById(postId.value);
    post.value = postData;
    console.log(postData);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onBeforeMount(async () => {
  await getPost();
});
const { postTweet } = useTweets();
const handleFormSubmit = async (event) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: event.text,
      mediaFiles: event.mediaFiles,
      replyTo: postId.value,
    });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
