<template>
  <div :class="wrappedClasses" class="p-3 hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-dim-400 border-b">
    <div class="flex flex-row p-1 justify-between">
      <div class="flex flex-row">
        <img :src="props.data.Image" :alt="props.data.name" class="w-10 h-10 rounded-full" />
        <div class="flex flex-col ml-2">
          <h1 class="font-semibold text-sm text-gray-900 dark:text-white">{{ props.data.name }}</h1>
          <p class="text-xs text-gray-400">@{{ props.data.username }}</p>
        </div>
      </div>
      <div class="flex items-center h-full">
        <button class="px-4 py-2 font-bold text-xs text-white bg-blue-400 dark:bg-slate-50 dark:text-gray-900 rounded-full bg-">Follow</button>
      </div>
    </div>
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
