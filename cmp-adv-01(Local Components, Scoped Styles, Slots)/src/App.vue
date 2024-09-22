<template>
  <div>
    <the-header></the-header>
    <!-- ANOTHER WAY TO WRITE THE ABOVE TAG: -->
    <!-- <TheHeader />  -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
        <p>{{ slotProps.thirdProp }}</p>
      </template>
    </course-goals> -->

    <!-- SHORTER WAY TO WRITE THE ABOVE GIVEN THAT THERE IS ONLY ONE SLOT -->
    <course-goals #default="slotProps">
        <!-- <h2>{{ slotProps }}</h2> -->
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
        <p>{{ slotProps.thirdProp }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  // First way to write local components-
  // components: {
  //   'the-header': TheHeader,
  //   'badge-list': BadgeList,
  //   'user-info': UserInfo
  // },

  // Second way-
  // components: {
  //   TheHeader: TheHeader,
  //   BadgeList: BadgeList,
  //   UserInfo: UserInfo
  // },

  // Modern way-[Just a shorter way to write the above 2nd method]
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
