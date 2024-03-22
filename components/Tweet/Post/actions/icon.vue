<template>
  <div @click.stop.prevent="emits('onClick')" class="flex items-center cursor-pointer text-gray-400 group">
    <div :class="[`p-2 group-hover:bg-${props.color}-100 rounded-full dark:group-hover:bg-opacity-20 group-hover:text-${props.color}-400`, defaultTransition]">
      <slot name="icon" :classes="`w-${props.size} h-${props.size}`" />
    </div>
    <span :class="[defaultTransition, `group-hover:text-${props.color}-400`]" class="ml-1"><slot name="count" /></span>
  </div>
</template>
<script setup>
const emits = defineEmits(["onClick"]);
const { twitterBorder, defaultTransition } = useTailwindConfig();
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 5,
  },
});
</script>
