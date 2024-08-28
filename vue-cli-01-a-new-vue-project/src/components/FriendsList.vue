<template>
  <div>
    <li>
      <h2>{{ name }}</h2>
      <button @click="toggleDisplay">
        {{ display ? "Hide" : "Show" }} Info
      </button>
      <ul v-if="display">
        <li><strong>Phone No:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong> {{ emailId }}</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  // EASIEST WAY TO WRITE PROPS-
  // props: ["name", "phoneNumber", "emailId"],
  // 2ND METHOD- Validating Props, Gives a vue warning in the console
  // props: {name: Number, phoneNumber: String, emailId: String},
  // 3RD METHOD- Even more validations
  props: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailId: {
      type: String,
      required: false,
      default: "null@example.com",
      // validator: function (value) {},
    },
  },
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
