<template>
  <Head>
    <Title>{{ post?.author.name }} on Twitter</Title>
  </Head>
  <MainSection title="Tweet" :loading="loading">
    <TweetDetails :user="user" :post="post" />
  </MainSection>
</template>
<script setup>
import { watch } from "vue";

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
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

watch(() => route.params.id, getPost);

onBeforeMount(async () => {
  await getPost();
});
</script>
