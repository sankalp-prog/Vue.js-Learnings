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
      verifiedName: ""
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
    confirmName() {
      this.verifiedName = this.name
    },
    testAlert() {
      alert("Test Alert")
    }
  },
});

app.mount("#events");
