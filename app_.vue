<template>
  <div>
    <button @click="toggle">Toogle</button>
    <HomeWelcome v-if="MyComponent == 'welcome'" />
    <Counter v-else />
    <!-- component need variable with name Counter -->
    <!-- <component :is="MyComponent" /> -->
  </div>
</template>

<!-- Nuxt2 script -->
<!-- <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increament() {
      this.count++;
    },
    decreament() {
      this.count--;
    },
  },
};
</script> -->

<script setup>
// vue will find any component with name Counter from resolveComponent helper
// const MyComponent = shallowRef(resolveComponent("Counter"));
const MyComponent = ref("counter");

function toggle() {
  // change component for toggle button clicked
  // MyComponent.value = resolveComponent("HomeWelcome");
  if (MyComponent.value == "counter") {
    MyComponent.value = "welcome";
  } else {
    MyComponent.value = "counter";
  }
}
</script>
