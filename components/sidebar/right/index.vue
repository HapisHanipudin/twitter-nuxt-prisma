<template>
  <div class="hidden md:block xl:col-span-4 md:col-span-3">
    <div class="relative m-2">
      <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
        <div class="w-6 h-6" @click="handleSearch">
          <SearchIcon class="w-6 h-6" />
        </div>
      </div>
      <input
        type="text"
        v-model="search"
        placeholder="Search Twitter"
        class="flex items-center w-full pl-12 text-sm font-normal text-black dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
      />
    </div>
    <SidebarCard title="What's New">
      <SidebarCardItem :data="whathappen" v-for="whathappen in whatHappens"></SidebarCardItem>
    </SidebarCard>
    <SidebarCard title="Who to follow">
      <SidebarCardFollow v-for="follow in whoToFollow" :data="follow"></SidebarCardFollow>
    </SidebarCard>
    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a href="# " class="hover:underline" @click.prevent="handleToggleDarkMode">Dark Mode</a>
        </li>
        <li class="inline-block mx-2">
          <a href="# " class="hover:underline">Cookie</a>
        </li>
        <li class="inline-block mx-2">
          <a href="# " class="hover:underline">Privacy Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="# " class="hover:underline">Accessibility</a>
        </li>
        <li class="inline-block mx-2">
          <a href="# " class="hover:underline">Ads info</a>
        </li>
        <li class="inline-block mx-2">
          <a href="# " class="hover:underline">More</a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script setup>
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/vue/24/outline";
const search = ref("");
const emitter = useEmitter();
const handleSearch = () => {
  useRouter().push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
};
const handleToggleDarkMode = () => {
  emitter.$emit("toggleDarkMode");
};
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
