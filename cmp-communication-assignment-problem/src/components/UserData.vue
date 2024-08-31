<template>
  <form @submit.prevent="addUser">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="age" />
    </div>
    <div>
      <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
  emit: ["add-data"],
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods: {
    addUser() {
      this.$emit("add-data", this.name, this.age);
    },
  },
};
</script>
