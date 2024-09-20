<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
        <slot :item="goal" another-prop="..." third-prop="Random things"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Learn Vue.js", "Finish the course"],
    };
  },
};
</script>
