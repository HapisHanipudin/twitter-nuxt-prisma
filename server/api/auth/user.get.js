export default defineEventHandler(async (event) => {
  return {
    user: event.context.auth,
  };
});
