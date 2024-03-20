<template>
  <div>
    <TweetPostHeader :post="props.post" />
    <div class="ml-16">
      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white">
        {{ props.post.caption }}
      </p>
      <div :class="twitterBorder" class="flex my-3 mr-2 border-2 rounded-2xl" v-for="image in props.post.mediaFiles" :key="image.id">
        <img class="w-full rounded-2xl" :src="image.url" alt="" />
      </div>
      <div class="mt-2">
        <TweetPostActions :post="props.post" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { twitterBorder } = useTailwindConfig();
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
