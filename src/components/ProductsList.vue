<template>
  <section class="p-8 bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">Наши Расходные Материалы</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductItem v-for="product in products" :key="product.id" :product="product" @add-to-cart="handleAddToCart" />
    </div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  name: 'ProductsList',
  components: { ProductItem },
  data() {
    return {
      products: [
        { id: 1, name: 'Сопло 40А', price: 145, image: 'soplo_40a.jpg' },
        { id: 2, name: 'Сопло d=2.0 HD', price: 235, image: 'soplo_d2.jpg' },
        // Другие продукты
      ]
    }
  },
  methods: {
    handleAddToCart(product) {
      alert(`Товар ${product.name} добавлен в корзину!`);
    }
  }
}
</script>