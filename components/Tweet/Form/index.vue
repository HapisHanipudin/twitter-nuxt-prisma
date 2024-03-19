<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center py-6">
      <IconLoading class="mx-auto my-5" />
    </div>
    <div v-else>
      <TweetFormInput @onSubmit="handleFormSubmit" :user="props.user" />
    </div>
  </div>
</template>
<script setup>
const loading = ref(false);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const { postTweet } = useTweets();

const handleFormSubmit = async (event) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: event.text,
      mediaFiles: event.mediaFiles,
    });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
