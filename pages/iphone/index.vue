<template>
  <div class="grid grid-cols-4 gap4 mt-10">
    <div v-for="ip in iphones" class="shadow-lg border rounded-lg text-center">
      <IphoneCard :iphone="ip" />
    </div>
  </div>
</template>

<script setup>
// for public directory you can't write explicit /public/images/....
// but, write whatever it is inner /public directory
const iphones = [
  {
    name: "Iphone 12",
    version: "12",
    img: "/images/iphone-12.webp",
    url: "/iphone/iphone-12",
  },
  {
    name: "Iphone 12 PRO",
    version: "12-pro",
    img: "/images/iphone-12-pro.webp",
    url: "/iphone/iphone-12-pro",
  },
  {
    name: "Iphone 13",
    version: "13",
    img: "/images/iphone-13.webp",
    url: "/iphone/iphone-13",
  },
  {
    name: "Iphone 13 PRO",
    version: "13-pro",
    img: "/images/iphone-13-pro.webp",
    url: "/iphone/iphone-13-pro",
  },
];

// fetch API just for knowledge
// const { data } = useFetch("/iphones");
// console.log(data.value);

// const iphones = computed(() => {
//   return data.value;
// });

useHead({
  title: "Nuxt3 - Iphones",
});
</script>

<style scoped></style>
