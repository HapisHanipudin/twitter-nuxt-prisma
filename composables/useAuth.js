export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  const setToken = (token) => {
    const authToken = useAuthToken();
    authToken.value = token;
  };
  const setUser = (user) => {
    const authUser = useAuthUser();
    authUser.value = user;
  };
  const login = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/login", {
          method: "POST",
          body: {
            username,
            password,
          },
        });
        setToken(data.accessToken);
        setUser(data.user);
        resolve(true);
      } catch (err) {
        reject(err);
      }
    });
  };
  return {
    login,
    useAuthUser,
  };
};
