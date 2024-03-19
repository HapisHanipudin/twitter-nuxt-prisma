<template>
  <div class="flex items-center flex-shrink-0 p-4 pb-0">
    <div class="flex w-12 items-start">
      <img class="inline-block h-10 w-10 rounded-full" :src="props.user?.profileImage" alt="" />
    </div>
    <div class="w-full p-2">
      <textarea v-model="text" class="w-full h-10 text-lg text-gray-900 placeholder-gray-400 dark:text-white dark:placeholder-gray-400 focus:ring-0 bg-inherit rounded-lg border-0" placeholder="What's happening?" rows="1"></textarea>
    </div>
    <div><button @click="handleFormSubmit">Tweet</button></div>
  </div>
</template>
<script setup>
const emits = defineEmits(["onSubmit"]);
const text = ref("");
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const handleFormSubmit = () => {
  emits("onSubmit", { text: text.value });
};
</script>
