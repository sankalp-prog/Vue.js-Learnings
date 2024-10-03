<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="input" />
    <button @click="setGoal">Set Goal</button>
    <!-- Using <teleport></teleport>, the error alert component is transport to the body tags when rendered in the browser rather than being nested inside some divs[exactly how we wrote it] -->
    <!-- This allows the same scope and functionality as intended, just when rendedred you can transport it to where it's sementically correct. -->
    <teleport to="body">
      <error-alert v-if="isInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter a few characters...</p>
        <button @click="setDefault">Okay</button>
      </error-alert>
    </teleport>
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
