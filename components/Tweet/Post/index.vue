<template>
  <NuxtLink :class="twitterBorder" class="cursor-default border-b" :to="`/status/${props.post.id}`">
    <TweetPostHeader :post="props.post" />
    <div :class="wrapperClass">
      <p :class="textSize" class="flex-shrink text-gray-800 w-auto dark:text-white">
        {{ props.post.caption }}
      </p>
      <div :class="twitterBorder" class="flex my-3 mr-2 border-2 rounded-2xl" v-for="image in props.post.mediaFiles" :key="image.id">
        <img class="w-full rounded-2xl" :src="image.url" alt="" />
      </div>
      <div class="mt-2" v-if="!props.hideActions">
        <TweetPostActions @on-comment-click="handleCommentClick" :compact="props.compact" :post="props.post" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { twitterBorder } = useTailwindConfig();
const emitter = useEmitter();
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  hideActions: {
    type: Boolean,
    default: false,
  },
});

const handleCommentClick = () => {
  emitter.$emit("replyTweet", props.post);
};

const textSize = computed(() => {
  if (!props.compact) {
    return "text-medium";
  } else {
    return "text-2xl";
  }
});

const wrapperClass = computed(() => {
  if (!props.compact) {
    return "ml-16";
  } else {
    return "ml-2";
  }
});
</script>
