<template>
  <div class="flex items-center justify-around w-full">
    <TweetPostActionsIcon :size="size" @on-click="emits('onCommentClick')" color="blue">
      <template #icon="{ classes }">
        <ChatBubbleOvalLeftEllipsisIcon :class="classes" />
      </template>
      <template #count v-if="showStat"> {{ props.post.repliesCount }} </template>
    </TweetPostActionsIcon>
    <TweetPostActionsIcon :size="size" color="green">
      <template #icon="{ classes }">
        <ArrowPathRoundedSquareIcon :class="classes" />
      </template>
      <template #count v-if="showStat"> {{ randomNunmber() }} </template>
    </TweetPostActionsIcon>
    <TweetPostActionsIcon :size="size" color="red">
      <template #icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>
      <template #count v-if="showStat"> {{ randomNunmber() }} </template>
    </TweetPostActionsIcon>
    <TweetPostActionsIcon :size="size" color="blue">
      <template #icon="{ classes }">
        <ArrowUpTrayIcon :class="classes" />
      </template>
      <template #count v-if="showStat"> {{ randomNunmber() }} </template>
    </TweetPostActionsIcon>
  </div>
</template>
<script setup>
const emits = defineEmits(["onCommentClick"]);
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
import { ChatBubbleOvalLeftEllipsisIcon, ArrowPathRoundedSquareIcon, HeartIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/outline";
const randomNunmber = () => {
  return Math.floor(Math.random() * 1000);
};

const size = computed(() => (props.compact ? 8 : 5));

const showStat = computed(() => (props.compact ? false : true));
</script>
