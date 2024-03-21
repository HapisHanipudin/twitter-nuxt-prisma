<template>
  <div>
    <div v-if="isEmptyArray">
      <p class="text-center p-5">No Posts 😢</p>
    </div>
    <div v-else v-for="post in props.posts" :class="[twitterBorder, defaultTransition]" class="pb-4 border-b cursor-pointer dark:hover:bg-dim-300 hover:bg-gray-100">
      <TweetPost :post="post" :key="post.id" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
const { twitterBorder, defaultTransition } = useTailwindConfig();
const isEmptyArray = computed(() => props.posts.length === 0);
</script>
