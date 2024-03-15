<template>
  <div>
    <label class="block pl-3 ml-px text-sm font-medium text-gray-700 dark:text-gray-50" v-if="$props.label" for="">{{ $props.label }}</label>
    <div class="mt-1">
      <input
        @input="(event) => emits('update:modelValue', event.target.value)"
        :type="$props.type"
        :placeholder="$props.placeholder"
        class="bg-inherit block w-full px-4 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        :class="twitterBorder"
        :value="$props.modelValue"
      />
    </div>
  </div>
</template>

<script setup>
const { twitterBorder } = useTailwindConfig();
const emits = defineEmits(["update:modelValue"]);

const $props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>
