<template>
  <div>
    <div class="border-b pb-4" :class="twitterBorder">
      <TweetPost compact :post="props.post" />
    </div>
    <div class="border-b pb-4" :class="twitterBorder">
      <TweetForm placeholder="Tweet your reply" :user="props.user" @onSubmit="emit('onSubmit', $event)" />
    </div>
    <TweetListFeed @onLoading="loading = $event" :posts="props.post.replies" />
  </div>
</template>

<script setup>
const emit = defineEmits(["onSubmit"]);
const { twitterBorder } = useTailwindConfig();
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
});
</script>
