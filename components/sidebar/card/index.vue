<template>
  <div class="m-2 border rounded-2xl bg-slate-50 dark:bg-dim-700 overflow-hidden dark:border-dim-400" :class="twitterBorder">
    <h3 class="text-xl p-3 font-bold text-gray-900 dark:text-white border-b">
      {{ props.title }}
    </h3>
    <slot></slot>
    <div :class="defaultTransition" class="text-sm p-3 text-blue-400 cursor-pointer dark:hover:bg-dim-400 hover:bg-gray-100 border-t">See more</div>
  </div>
</template>
<script setup>
const { defaultTransition, twitterBorder } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
