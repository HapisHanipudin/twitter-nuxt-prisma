<template>
  <div class="flex items-center cursor-pointer text-gray-400 group">
    <div :class="defaultTransition" class="p-2 group-hover:bg-blue-100 rounded-full dark:group-hover:bg-opacity-20 group-hover:text-blue-500">
      <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6" />
    </div>
    <span :class="[defaultTransition, `group-hover:text-${props.color}-500`]" class="ml-1">5</span>
  </div>
</template>
<script setup>
const { twitterBorder, defaultTransition } = useTailwindConfig();
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});
</script>
