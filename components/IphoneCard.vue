<template>
  <div class="card text-center">
    <!-- <nuxt-link
      :to="`/iphone/iphone-${iphone.version}?iphonedetail=${encodeURIComponent(
        JSON.stringify(iphone)
      )}`"
    > -->
    <nuxt-link :to="`/iphone/iphone-${iphone.version}`">
      <h1>{{ iphone.name }}</h1>
      <div class="flex justify-center">
        <img width="100" :src="iphone.img" alt="" />
        <!-- <img width="200" :src="`/images/iphone-${ip.version}.webp`" alt="" /> -->
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const { iphone } = defineProps(["iphone"]);
// console.log(JSON.stringify(iphone));
</script>

<style scoped></style>
