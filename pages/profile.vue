<template>
  <div>
    <h1>Welcome Profile</h1>
    <p>Total Route Change ({{ pageVisitCount }})</p>
  </div>
</template>

<script setup>
const pageVisitCount = usePageVisitCount();

definePageMeta({
  layout: "sidebar",
  // ** named route middleware (/middleware/auth.js) **
  middleware: ["auth"],
  // ** Anonymous/Inline middleware **
  // middleware: () => {
  //   const auth = useAuth();
  //   return auth.value.isAuthenticated;
  // },
});
</script>

<style scoped></style>
