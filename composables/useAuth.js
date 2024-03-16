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
  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/refresh");
        setToken(data.accessToken);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await refreshToken();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  return {
    login,
    useAuthUser,
    initAuth,
  };
};
