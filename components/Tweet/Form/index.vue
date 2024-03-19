<template>
  <div>
    <TweetFormInput @onSubmit="handleFormSubmit" :user="props.user" />
  </div>
</template>
<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const { postTweet } = useTweets();

const handleFormSubmit = async (event) => {
  try {
    const response = await postTweet(event);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>
