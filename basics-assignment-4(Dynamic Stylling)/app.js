const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      bgInput: "",
      visibility: true,
    };
  },
  computed: {
    setUser1() {
      if (this.userInput == "user1") {
        return true;
      }
    },
    setUser2() {
      if (this.userInput == "user2") {
        return true;
      }
    },
  },
  methods: {
    setVisibility() {
      this.visibility = !this.visibility;
    },
  }, 
});

app.mount("#assignment");
