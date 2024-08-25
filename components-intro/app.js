const app = Vue.createApp({
  data() {
    return {
      details: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
  },
});

app.component("friend-card", {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <!-- issue: the same method and data is being reused for each friend which means both the cards toggle when you press any one button -->
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="details">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
  data() {
    return {
      details: false,
      friend: {
        id: "julie",
        name: "Julie Jones",
        phone: "09876 543 221",
        email: "julie@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
  },
});

app.mount("#app");
