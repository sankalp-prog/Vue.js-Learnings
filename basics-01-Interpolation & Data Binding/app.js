const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/guide/",
      option1: "Learn Vue",
      option2: "Master Vue",
      option3: `<h2>This is an HTML Input</h2>`
    };
  },
  methods: {
    goalChange() {
        const randomNumber = Math.random()
        if (randomNumber < 0.5) {
            return this.option1
        }
        else {
            return this.option2
        }
    }
  }
});

app.mount("#user-goal");
