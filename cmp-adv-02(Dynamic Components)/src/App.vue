<template>
  <div>
    <active-goals></active-goals>
    <manage-goals></manage-goals>
  </div>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue"
import ManageGoals from "./components/ManageGoals.vue"

export default {
  components: {
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {};
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
