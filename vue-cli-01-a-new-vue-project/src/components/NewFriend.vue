<template>
  <form @submit.prevent>
    <input v-model="friend.id" type="text" placeholder="ID" />
    <input v-model="friend.name" type="text" placeholder="Name" />
    <input v-model="friend.phone" type="text" placeholder="Phone No" />
    <input v-model="friend.email" type="text" placeholder="Email ID" />
    <button @click="submitFriend">Add New Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      friend: {
        id: "",
        name: "",
        phone: "",
        email: "",
        isFavourite: false,
      },
    };
  },
  methods: {
    reset() {
      this.friend = {
        id: "",
        name: "",
        phone: "",
        email: "",
        isFavourite: false,
      };
    },
    submitFriend() {
      this.$emit("submit-friend", this.friend);
      this.reset();
    },
  },
};
</script>
