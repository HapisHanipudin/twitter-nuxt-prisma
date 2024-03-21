<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center py-6">
      <IconLoading class="mx-auto my-5" />
    </div>
    <div v-else>
      <TweetFormInput :placeholder="props.placeholder" @onSubmit="emits('onSubmit', $event)" :user="props.user" />
    </div>
  </div>
</template>
<script setup>
const loading = ref(false);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: "What's happening?",
  },
});
const emits = defineEmits(["onSubmit"]);
</script>
