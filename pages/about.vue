<template>
  <div>Hello About</div>
  <NuxtLink to="/">Bact to Home</NuxtLink>
</template>

<script setup>
const iphone = useRoute().params;
console.log(iphone.value);

definePageMeta({
  // Layout false -> Nuxt will add no layout for About route page
  layout: false,
});
</script>

<style scoped></style>
