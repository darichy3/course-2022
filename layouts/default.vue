<template>
  <div>
    <nav
      class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between"
    >
      <!-- NuxtLink to navigate page -->
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/iphone">Iphones</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
    </nav>

    <!-- Here Nuxt will replace content -->
    <slot></slot>
  </div>
</template>
