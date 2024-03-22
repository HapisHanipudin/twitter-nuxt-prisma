<template>
  <div>
    <div class="border-b pb-4" :class="twitterBorder">
      <TweetPost compact :post="props.post" />
    </div>
    <div class="border-b pb-4" :class="twitterBorder">
      <TweetForm @on-success="handleFormSuccess" placeholder="Tweet your reply" :user="props.user" :reply-to="props.post" />
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

const handleFormSuccess = (event) => {
  navigateTo(`/status/${event.id}`);
};
</script>
