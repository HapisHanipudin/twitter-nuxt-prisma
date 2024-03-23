<template>
  <div :class="{ dark: darkMode }" class="bg-white dark:bg-dim-900 text-gray-950 dark:text-gray-50">
    <div class="min-h-full bg-white dark:bg-dim-900">
      <div class="flex w-full h-screen justify-center items-center flex-col" v-if="isAuthLoading">
        <span class="text-xl font-bold"> Loading </span>
        <IconLoading class="mx-auto my-5" />
      </div>
      <!-- App -->
      <div v-else-if="user" class="grid grid-cols-12 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl lg:gap-5">
        <!-- Sidebar -->
        <SidebarLeft @onLogout="handleLogout" :user="user" @onTweet="handleModalOpen(null)" />

        <!-- Main -->
        <main class="col-span-12 xs:col-span-11 md:col-span-8 xl:col-span-6">
          <NuxtPage />
        </main>

        <!-- Right Sidebar -->
        <SidebarRight />
      </div>

      <AuthPage v-else />
      <UIModal @onClose="handleModalClose" :isOpen="postModal">
        <TweetForm :replyTo="replyPost" showReply @onSuccess="handleSuccess" :user="user" />
      </UIModal>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
const emitter = useEmitter();

emitter.$on("replyTweet", (value) => {
  openPostModal(value);
});

emitter.$on("toggleDarkMode", () => {
  darkMode.value = !darkMode.value;
});

const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
onBeforeMount(async () => {
  await initAuth();
});
const { closePostModal, usePostModal, openPostModal, useReplyPost } = useTweets();
const postModal = usePostModal();
const replyPost = useReplyPost();
const handleModalClose = () => {
  closePostModal();
};
const handleModalOpen = (event) => {
  openPostModal(event);
};
const handleSuccess = (event) => {
  handleModalClose();

  navigateTo(`/status/${event.id}`);
};
const handleLogout = () => {
  logout();
};
</script>
