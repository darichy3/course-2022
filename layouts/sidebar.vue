<template>
  <main class="user-layout bg-gray-100">
    <div class="sidebar">
      <p>Dashboard</p>
      <p>Settings</p>

      <nav class="bg-green-600 rounded-md ml-2 mt-5 p-2 text-white text-center">
        <!-- NuxtLink to navigate page -->
        <NuxtLink to="/">Back to Home</NuxtLink>
      </nav>
    </div>
    <section>
      <!-- here nuxt will replace page content -->
      <slot></slot>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 15%;
}
.user-layout {
  display: flex;
}
</style>
