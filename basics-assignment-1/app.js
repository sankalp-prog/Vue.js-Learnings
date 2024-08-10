// ES6 Syntax of writing options api

// const app = Vue.createApp({
//   data() {
//     return {
//       name: "Sankalp Srivastava",
//       age: 23,
//       image: "https://i.pinimg.com/736x/df/67/f3/df67f33b922cbbb63fae756038ec6ade.jpg"
//     };
//   },
//   methods: {
//     random() {
//         return Math.random()
//     }
//   }
// });
// NOTE: You typically use an id, if you use a class, the app will take only the first instance of that class you selected
// app.mount("#assignment");

// Non ES6 syntax of writing options api
const app = Vue.createApp({
  data: function () {
    return {
      name: "Sankalp",
      age: 23,
      image:
        "https://i.pinimg.com/736x/df/67/f3/df67f33b922cbbb63fae756038ec6ade.jpg",
    };
  },
  methods: {
    random: function () {
      return Math.random();
    },
  },
});

app.mount("#assignment");
