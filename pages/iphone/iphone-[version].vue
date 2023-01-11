<template>
  <div>
    <Head>
      <Title>Nuxt3 - Iphone {{ version.replaceAll("-", " ") }}</Title>
    </Head>
    <IphoneDetail :version="version" />
  </div>
</template>

<script setup>
const version = useRoute().params.version;
</script>

<style scoped></style>
