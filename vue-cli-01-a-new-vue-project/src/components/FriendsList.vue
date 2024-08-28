<template>
  <div>
    <li>
      <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
      <button @click="toggleDisplay">
        {{ display ? "Hide" : "Show" }} Info
      </button>
      <button @click="toggleIsFavourite">
        {{ isFavourite ? "Unfavourite" : "Favourite" }}
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
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: false,
      default: "null@example.com",
      // validator: function (value) {},
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // BASIC WAY OF DEFINING CUSTOM EVENTS-
  // emits: ['toggle-favourite'],

  // DEFINING AS WELL VALIDATIONG CUSTOM EVENTS-
  emits: {
    "toggle-favourite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing!");
        return false;
      }
    },
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    toggleDisplay() {
      this.display = !this.display;
    },
    toggleIsFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
  },
};
</script>
