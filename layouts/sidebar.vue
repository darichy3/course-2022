<template>
  <main class="user-layout bg-gray-100">
    <div class="sidebar">
      <p>Dashboard</p>
      <p>Settings</p>

      <nav>
        <!-- NuxtLink to navigate page -->
        <NuxtLink to="/">Home</NuxtLink>
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
