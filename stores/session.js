import { defineStore } from "pinia";

export default useSessionStore = defineStore("session", {
  state: () => ({
    session: null,
    modal: "",
  }),
  actions: {
    setSession(session) {
      this.session = session;
    },
  },
});
