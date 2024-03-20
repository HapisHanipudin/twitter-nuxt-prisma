<template>
  <div><h1>list feed</h1></div>
  <ul>
    <li v-for="post in props.posts">{{ post }}</li>
  </ul>
</template>
<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
