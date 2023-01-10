<template>
  <div>
    <Head>
      <Title>Nuxt3 - Iphone {{ version }}</Title>
    </Head>
    <div>
      <h1>Iphone {{ version }} Page</h1>
    </div>
  </div>
</template>

<script setup>
const version = useRoute().params.version.replaceAll("-", " ");
</script>

<style scoped></style>
