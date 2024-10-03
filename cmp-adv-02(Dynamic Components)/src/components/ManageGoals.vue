<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="input" />
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="isInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter a few characters...</p>
      <button @click="setDefault">Okay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  data() {
    return {
      isInvalid: false,
    };
  },
  components: { ErrorAlert },
  methods: {
    setGoal() {
      const goal = this.$refs.input.value;
      if (goal === "") {
        this.isInvalid = true;
      }
    },
    setDefault() {
      this.isInvalid = false;
    },
  },
};
</script>
