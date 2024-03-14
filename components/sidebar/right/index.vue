<template>
  <div class="hidden md:block xl:col-span-4 md:col-span-3">
    <SidebarCard title="What's New">
      <SidebarCardItem :data="whathappen" v-for="whathappen in whatHappens"></SidebarCardItem>
    </SidebarCard>
    <SidebarCard title="Who to follow">
      <SidebarCardFollow v-for="follow in whoToFollow" :data="follow"></SidebarCardFollow>
    </SidebarCard>
  </div>
</template>
<script setup>
const whatHappens = ref([
  { title: "SpaceX", count: "1.4k" },
  { title: "Artqtion", count: "123.4k" },
  { title: "#sekolahimpian", count: "3.4k" },
]);
const whoToFollow = ref([
  {
    name: "Hapis Hanipudin",
    username: "hapishanipudin",
    Image: "https://picsum.photos/200/200",
  },
  {
    name: "Hapis Hanipudin",
    username: "hapishanipudin",
    Image: "https://picsum.photos/200/200",
  },
]);
</script>
