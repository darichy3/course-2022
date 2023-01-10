<template>
  <div class="grid grid-cols-4 gap4 mt-10">
    <div v-for="ip in iphones" class="shadow-lg border rounded-lg text-center">
      <nuxt-link :to="`/iphone/iphone-${ip.version}`">
        <h1>Iphone {{ ip.version }}</h1>
        <div class="flex justify-center">
          <img width="100" :src="ip.url" alt="" />
          <!-- <img width="200" :src="`/images/iphone-${ip.version}.webp`" alt="" /> -->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
// for public directory you can't write explicit /public/images/....
// but, write whatever it is inner /public directory
const iphones = ref([
  { version: "12", url: "/images/iphone-12.webp" },
  { version: "12-pro", url: "/images/iphone-12-pro.webp" },
  { version: "13", url: "/images/iphone-13.webp" },
  { version: "13-pro", url: "/images/iphone-13-pro.webp" },
]);

useHead({
  title: "Nuxt3 - Iphones",
});
</script>

<style scoped></style>
