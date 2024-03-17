<template>
  <div :class="{ dark: darkMode }" class="bg-white dark:bg-dim-900 text-gray-950 dark:text-gray-50">
    <div class="min-h-full bg-white dark:bg-dim-900">
      <div v-if="isAuthLoading">Loading</div>
      <!-- App -->
      <div v-else-if="user" class="grid grid-cols-12 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl lg:gap-5">
        <!-- Sidebar -->
        <SidebarLeft />

        <!-- Main -->
        <main class="col-span-12 xs:col-span-11 md:col-span-8 xl:col-span-6">
          <NuxtPage />
        </main>

        <!-- Right Sidebar -->
        <SidebarRight />
      </div>

      <AuthPage v-else />
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);

const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
onBeforeMount(async () => {
  await initAuth();
});
</script>
