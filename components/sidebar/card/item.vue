<template>
  <div :class="wrappedClasses" class="p-3 hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-dim-400 border-b">
    <h4 class="font-semibold text-gray-800 text-md dark:text-white">{{ props.data.title }}</h4>
    <p class="text-sm text-gray-400">{{ props.data.count }} Tweets</p>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { defaultTransition, twitterBorder } = useTailwindConfig();
const wrappedClasses = computed(() => {
  return `${twitterBorder} ${defaultTransition}`;
});
</script>
