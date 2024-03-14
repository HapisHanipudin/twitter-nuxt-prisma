<template>
  <div class="border-x text-gray-900 dark:text-gray-50" :class="twitterBorder">
    <div class="sticky px-3 py-3 top-0 bg-white/80 backdrop:blur-md dark:bg-dim-900/80">
      <h2 class="text-xl font-bold">{{ props.title }}</h2>
    </div>
    <div class="flex justify-center items-centers" v-if="props.loading" :class="twitterBorder">
      <IconLoading class="mx-auto my-5" />
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { twitterBorder } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Content",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
