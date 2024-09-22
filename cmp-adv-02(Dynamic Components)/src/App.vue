<template>
  <div>
    <button @click="dynamicComponent('activeGoals')">Active Goals</button>
    <button @click="dynamicComponent('manageGoals')">Manage Goals</button>
    <active-goals v-if="activeComponent == 'activeGoals'"></active-goals>
    <manage-goals v-if="activeComponent == 'manageGoals'"></manage-goals>
  </div>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeComponent: "",
    };
  },
  methods: {
    dynamicComponent(cmp) {
      this.activeComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
