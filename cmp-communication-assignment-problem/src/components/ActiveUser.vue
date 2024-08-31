<template>
  <div>
    <h2>{{ this.name }}</h2>
    <h3>{{ this.age }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
