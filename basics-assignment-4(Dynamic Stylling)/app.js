const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      bgInput: "",
      visibility: true,
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.visibility,
        hidden: !this.visibility,
      };
    },
  },
  methods: {
    setVisibility() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
