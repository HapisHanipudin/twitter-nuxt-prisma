<template>
  <button :class="classes" class="flex justify-center text-white bg-blue-400 rounded-full hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed" :disabled="$props.disabled">
    <span :class="textFontSize">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
const $props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
  liquid: {
    type: Boolean,
    default: false,
  },
});
const classes = computed(() => `${paddingClasses.value} ${$props.liquid ? "w-full" : "w-min"}`);
const paddingClasses = computed(() => {
  switch ($props.size) {
    case "sm":
      return "py-2 px-3";
    case "lg":
      return "px-4 py-3";
    default:
      return "px-3 py-3";
  }
});
const textFontSize = computed(() => {
  switch ($props.size) {
    case "lg":
      return "text-md";
    default:
      return "text-sm";
  }
});
</script>
