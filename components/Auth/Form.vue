<template>
  <div>
    <div class="w-full flex justify-center">
      <div class="w-10 h-10">
        <IconLogo />
      </div>
    </div>
    <div class="space-y-6 pt-5">
      <UIInput label="Username" placeholder="@username" v-model="data.username" />
      <UIInput label="Password" type="password" placeholder="*********" v-model="data.password" />
      <UIButton liquid :disabled="isDisabled"><button @click="handleLogin">Login</button></UIButton>
    </div>
  </div>
</template>

<script setup>
const isDisabled = computed(() => {
  return !data.username || !data.password || data.loading;
});
const data = reactive({
  username: "",
  password: "",
  loading: false,
});

const { login } = useAuth();

const handleLogin = async () => {
  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
};
</script>
