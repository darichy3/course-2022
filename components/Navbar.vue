<template>
  <div>
    <nav
      class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between"
    >
      <!-- NuxtLink to navigate page -->
      <div class="flex">
        <NuxtLink to="/" class="mr-5"> Home </NuxtLink>
        <NuxtLink to="/iphone" class="mr-5"> Iphones </NuxtLink>
        <p class="mr-5">Cart ({{ cart.length }})</p>
        <ClientOnly>Total Route Change ({{ pageVisitCount }})</ClientOnly>
      </div>
      <div v-if="auth.isAuthenticated">
        <NuxtLink to="/profile"> Profile</NuxtLink>
        <button class="btn ml-2" @click="onLogout">Logout</button>
      </div>
      <NuxtLink v-if="!auth.isAuthenticated" to="/login">Login</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
const pageVisitCount = usePageVisitCount();
// console.log(pageVisitCount.value);

const cart = useCart();
const auth = useAuth();
function onLogout() {
  auth.value.isAuthenticated = false;
  navigateTo("/login");
}
</script>

<style scoped></style>
