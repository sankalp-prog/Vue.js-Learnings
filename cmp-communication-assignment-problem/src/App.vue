<template>
  <div>
    <user-data @add-data="addData"></user-data>
    <active-user
      v-for="user in userData"
      :key="user.id"
      :name="user.name"
      :age="user.age"
    ></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    addData(name, age) {
      const newData = {
        id: new Date().toISOString,
        name: name,
        age: age,
      };
      this.userData.push(newData);
    },
  },
};
</script>
