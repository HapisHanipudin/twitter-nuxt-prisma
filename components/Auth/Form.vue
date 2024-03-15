<template>
  <div>
    <div class="space-y-6 pt-5">
      <UIInput label="Username" placeholder="@username" v-model="data.username" />
      <UIInput label="Password" type="password" placeholder="*********" v-model="data.password" />
      <div><button @click="handleLogin">Login</button></div>
    </div>
  </div>
</template>

<script setup>
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
