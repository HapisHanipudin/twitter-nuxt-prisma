<template>
  <Head>
    <Title>Search</Title>
  </Head>
  <MainSection title="Search" :loading="loading">
    <TweetListFeed @onLoading="loading = $event" :posts="searchPosts" />
  </MainSection>
</template>

<script setup>
const loading = ref(false);
const searchPosts = ref([]);
const { getPosts } = useTweets();
const searchQuery = useRoute().query.q;

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { posts } = await getPosts({
      query: searchQuery,
    });
    searchPosts.value = posts;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>
