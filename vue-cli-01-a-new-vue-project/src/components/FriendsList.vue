<template>
  <div>
    <li>
      <h2>{{ name }}</h2>
      <button @click="toggleDisplay">{{ display ? 'Hide' : 'Show' }} Info</button>
      <ul v-if="display">
        <li><strong>Phone No:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong> {{ emailId }}</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'phoneNumber',
    'emailId'
  ],
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
