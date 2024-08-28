<template>
  <div>
    <h2>Hello World</h2>
    <ul>
      <friend-list></friend-list>
      <friend-list></friend-list>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
