<template>
  <button @click="moveToAbout">Go to About Page!</button>
  <div>Hello Index</div>
</template>

<script setup>
function moveToAbout() {
  navigateTo("about");
}
</script>
