<template>
  <Head>
    <Title>Home / Twitter</Title>
  </Head>
  <MainSection title="Home" :loading="loading">
    <!-- {{ user }} -->

    <div :class="twitterBorder" class="border-b">
      <TweetForm :user="user" />
    </div>
    <TweetListFeed @onLoading="loading = $event" :posts="homePosts" />
  </MainSection>
</template>

<script setup>
const loading = ref(false);
const homePosts = ref([]);
const { getPosts } = useTweets();

const { useAuthUser } = useAuth();
const { twitterBorder } = useTailwindConfig();
const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { posts } = await getPosts();
    homePosts.value = posts;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>
