<template>
  <div class="bg-white shadow p-4 rounded">
    <img :src="`@/assets/images/${product.image}`" :alt="product.name" class="h-40 w-full object-cover mb-4" />
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p class="text-gray-500">{{ product.price }} ₽</p>
    <button @click="$emit('add-to-cart', product)" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">В корзину</button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>