<template>
  <ul>
    <!-- `type="button"` is used to overide the default form nature of making buttons inside the form to submit the entire form-->
    <li :class="{ active: activeoption === 'poor' }">
      <button type="button" @click="activate('poor')">poor</button>
    </li>
    <li :class="{ active: activeoption === 'average' }">
      <button type="button" @click="activate('average')">average</button>
    </li>
    <li :class="{ active: activeoption === 'great' }">
      <button type="button" @click="activate('great')">great</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeoption: null,
    };
  },
  methods: {
    activate(option) {
      this.activeoption = option;
    },
  },
};
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: purple;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
