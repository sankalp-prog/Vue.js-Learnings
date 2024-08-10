// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//     };
//   },
// });

// app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },

    decrement(num) {
      this.counter = this.counter - num;
    },

    // setName(event) { 
    setName(event, lastName) {
      // this.name = event.target.value;
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
