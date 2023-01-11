<template>
  <div class="flex justify-center w-full mt-20">
    <div class="grid grid-cols-2 gap-2">
      <div>
        <img
          :src="`/images/iphone-${version}.webp`"
          alt="product img"
          class="mx-auto my-7"
        />
      </div>
      <div class="text-center">
        <h1 class="text-3xl">Iphone {{ version.replaceAll("-", " ") }}</h1>
        <button
          @click="addToCart"
          class="bg-indigo-900 p-3 text-white text-lg rounded-md mt-5 flex"
        >
          <i class="material-icons mr-2">add_shopping_card</i>
          <span v-if="!isInCart()">Add to cart</span>
          <span v-if="isInCart()">Remove from cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// const iphone = JSON.parse(decodeURIComponent(useRoute().query.iphonedetail));
// console.log("Iphone obj", iphone);

const { version } = defineProps(["version"]);
// console.log(version);

const fullname = computed(() => {
  return `iphone-${version}`;
});

const cart = useCart();
function isInCart() {
  return cart.value.find((ct) => ct.name == fullname.value);
}

function addToCart() {
  const found = isInCart();
  if (!found) {
    cart.value.push({
      name: fullname.value,
      url: `/iphone/${fullname.value}`,
    });
    console.log(cart.value);
  } else {
    cart.value = cart.value.filter((ct) => ct.name != fullname.value);
    console.log(cart.value);
  }
}
</script>

<style scoped>
img {
  max-width: 500px;
}
</style>
