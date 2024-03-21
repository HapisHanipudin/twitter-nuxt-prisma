<template>
  <NuxtLink :to="props.link">
    <div class="flex p-3 px-5 gap-4 w-min rounded-full dark:hover:bg-dim-200 dark:text-white hover:bg-blue-50 dark:hover:bg-slate-50/20 items-center" :class="defaultTransition">
      <div class="text-dark w-6">
        <slot name="icon"></slot>
      </div>
      <div class="max-xl:hidden text-xl" :class="textClasses">
        <slot name="nama"></slot>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  link: String,
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() => {
  if (props.active) {
    return "font-semibold";
  }
  return "font-normal";
});
</script>
