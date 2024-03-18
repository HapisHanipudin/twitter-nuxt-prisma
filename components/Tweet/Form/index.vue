<template>
  <TweetFormInput :user="props.user" />
</template>
<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
