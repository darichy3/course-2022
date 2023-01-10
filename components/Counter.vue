<template>
  <div>
    <button @click="increament">Increament</button>
    <p>{{ count }}</p>
    <button @click="decreament">Decreament</button>
  </div>
</template>

<!-- nuxt3 update -->
<script setup>
// import ref from 'vue' // auto import nuxt 3, dont type script explicitly (will return error)
const count = ref(0);

// increament function
function increament() {
  count.value++;
}
// decreament function
function decreament() {
  count.value--;
}
</script>

<style scoped></style>
