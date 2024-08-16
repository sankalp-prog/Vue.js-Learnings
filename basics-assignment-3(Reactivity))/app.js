const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    // We can also watch for computed properties and not just data
    checkValue() {
        // if you don't use arrow functions and just a no name function for callback in setTimeout then use -
        // that = this
        setTimeout(() => {
            // that.number = 0
            this.number = 0
            console.log("timer reset")
        }, 5000)

    }
  },
  computed: {
    checkValue() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    increment(num) {
      this.number = this.number + num;
    },
  },
});

app.mount("#assignment");
