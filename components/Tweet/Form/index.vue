<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center py-6">
      <IconLoading class="mx-auto my-5" />
    </div>
    <div v-else>
      <TweetPost :post="props.replyTo" v-if="props.showReply && props.replyTo" hideActions compact />
      <TweetFormInput :placeholder="props.placeholder" @onSubmit="handleFormSubmit" :user="props.user" />
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["onSuccess"]);
const loading = ref(false);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: "What's happening?",
  },
  replyTo: {
    type: Object,
    default: null,
  },
  showReply: {
    type: Boolean,
    default: false,
  },
});
const { postTweet } = useTweets();
const handleFormSubmit = async (event) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: event.text,
      mediaFiles: event.mediaFiles,
      replyTo: props.replyTo?.id,
    });
    emits("onSuccess", response.post);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
