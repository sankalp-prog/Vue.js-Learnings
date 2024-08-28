<template>
  <div>
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDisplay">{{ display ? 'Hide' : 'Show' }} Info</button>
      <ul v-if="display">
        <li><strong>Phone No:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.phone }}</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDisplay() {
      this.display = !this.display;
    },
  },
};
</script>
