<template>
  <div class="flex items-center justify-around w-full">
    <TweetPostActionsIcon color="blue">
      <template #icon="{ classes }">
        <ChatBubbleOvalLeftEllipsisIcon :class="classes" />
      </template>
      <template #count> {{ props.post.repliesCount }} </template>
    </TweetPostActionsIcon>
    <TweetPostActionsIcon color="green">
      <template #icon="{ classes }">
        <ArrowPathRoundedSquareIcon :class="classes" />
      </template>
      <template #count> {{ randomNunmber() }} </template>
    </TweetPostActionsIcon>
    <TweetPostActionsIcon color="red">
      <template #icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>
      <template #count> {{ randomNunmber() }} </template>
    </TweetPostActionsIcon>
    <TweetPostActionsIcon color="blue">
      <template #icon="{ classes }">
        <ArrowUpTrayIcon :class="classes" />
      </template>
      <template #count> {{ randomNunmber() }} </template>
    </TweetPostActionsIcon>
  </div>
</template>
<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
import { ChatBubbleOvalLeftEllipsisIcon, ArrowPathRoundedSquareIcon, HeartIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/outline";
const randomNunmber = () => {
  return Math.floor(Math.random() * 1000);
};
</script>
