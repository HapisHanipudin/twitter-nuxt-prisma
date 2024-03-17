export default (url, options = {}) => {
  const { useAuthToken } = useAuth();
  return $fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      authorization: `Bearer ${useAuthToken().value}`,
    },
  });
};
