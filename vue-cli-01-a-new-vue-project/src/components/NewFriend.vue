<template>
  <form @submit.prevent="submitFriend">
    <div>
      <label>Name</label>
      <input v-model="enteredName" type="text" placeholder="Name" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="enteredPhone" type="tel" placeholder="Phone No" />
    </div>
    <div>
      <label>E-mail</label>
      <input v-model="enteredEmail" type="email" placeholder="Email ID" />
    </div>
    <div>
      <button>Add New Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["submit-friend"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    reset() {
      this.enteredName = "";
      this.enteredPhone = "";
      this.enteredEmail = "";
    },

    submitFriend() {
      this.$emit(
        "submit-friend",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
      this.reset();
    },
  },
};
</script>
