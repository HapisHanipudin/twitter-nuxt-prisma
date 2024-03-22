<template>
  <div class="p-4 flex items-center">
    <div>
      <img class="w-10 h-10 rounded-full" :src="author.profileImage" alt="" />
    </div>
    <div class="ml-3">
      <span class="font-medium text-gray-800 dark:text-white">{{ author.name }}</span>
      <span class="ml-3 text-sm font-medium text-gray-400">
        <NuxtLink :to="`/@${author.username}`" class="text-gray-500 dark:text-gray-400">@{{ author.username }}</NuxtLink>
        · {{ props.post.postedAtHuman }}
      </span>
      <p v-if="props.post.replyTo" class="text-sm">
        <span class="text-gray-500"> Replying To </span>
        <NuxtLink :to="replyToPostUrl" class="text-blue-500">{{ props.post.replyTo.author.handle }}</NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const author = props.post.author;
const replyToPostUrl = computed(() => `/status/${props.post.replyTo.id}`);
</script>
