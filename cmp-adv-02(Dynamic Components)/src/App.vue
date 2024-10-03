<template>
  <div>
    <button @click="dynamicComponent('activeGoals')">Active Goals</button>
    <button @click="dynamicComponent('manageGoals')">Manage Goals</button>
    <!-- <active-goals v-if="activeComponent == 'activeGoals'"></active-goals>
    <manage-goals v-if="activeComponent == 'manageGoals'"></manage-goals> -->
    <!-- USING DYNAMIC COMPONENT TO DO THE ABOVE COMMENTED LINES: -->

    <!-- PROBLEM: If the user types something in the input field and then switches to another component and then comes back.... the input field is now empty and whatever he wrote previously is not saved -->
    <!-- keep-alive is used to cache the state of the component, this way if user types in something in the input field, it will remain even if he goes to another component and comes back-->
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
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
