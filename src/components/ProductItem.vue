<template>
  <div class="product-card bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full overflow-hidden">
    <!-- Верхние бейджи -->
    <div class="relative p-3">
      <div class="absolute top-2 left-2 flex flex-col gap-2">
        <span v-if="product.isNew" class="bg-green-500 text-white text-xs py-1 px-2 rounded">Новинка</span>
        <span v-if="product.oldPrice" class="bg-red-500 text-white text-xs py-1 px-2 rounded">
          -{{ Math.round((product.oldPrice - product.price) / product.oldPrice * 100) }}%
        </span>
      </div>
      
      <!-- Избранное и сравнение -->
      <div class="absolute top-2 right-2 flex flex-col gap-2">
        <button class="bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <button class="bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
        </button>
      </div>
      
      <!-- Изображение товара -->
      <div class="product-image flex justify-center items-center h-48 mb-4 overflow-hidden">
        <img 
          :src="product.image" 
          :alt="product.name" 
          class="max-h-full transition-transform duration-300 hover:scale-105"
        >
      </div>
      
      <!-- Рейтинг -->
      <div class="flex items-center mb-2">
        <div class="flex">
          <template v-for="i in 5" :key="i">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              :fill="i <= Math.floor(product.rating) ? '#FF8304' : 'none'" 
              :stroke="i <= Math.floor(product.rating) ? '#FF8304' : 'currentColor'" 
              stroke-width="1.5" 
              class="text-gray-300"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </template>
        </div>
        <span class="text-sm text-gray-500 ml-1">{{ product.rating }}</span>
      </div>
      
      <!-- Категория и бренд -->
      <div class="text-xs text-gray-500 mb-1">
        {{ product.category }} | {{ product.brand }}
      </div>
      
      <!-- Название товара -->
      <h3 class="text-base font-semibold mb-2 line-clamp-2 h-12">{{ product.name }}</h3>
      
      <!-- Наличие и цена -->
      <div class="mt-auto">
        <div class="flex items-center mb-2">
          <span v-if="product.inStock" class="text-green-500 text-sm flex items-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="mr-1">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            В наличии
          </span>
          <span v-else class="text-red-500 text-sm flex items-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="mr-1">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Нет в наличии
          </span>
        </div>
        
        <div class="flex items-end justify-between">
          <div>
            <span v-if="product.oldPrice" class="text-gray-400 text-sm line-through block">{{ product.oldPrice }} ₽</span>
            <span class="text-xl font-bold text-main-blue">{{ product.price }} ₽</span>
          </div>
          
          <div class="flex gap-2">
            <button 
              class="text-main-blue bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors"
              title="Посмотреть детали"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            <button 
              class="bg-main hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
              @click="$emit('add-to-cart', product)"
              :disabled="!product.inStock"
              :class="{'opacity-50 cursor-not-allowed': !product.inStock}"
              title="Добавить в корзину"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20Z"></path>
                <path d="M20 20C20 21.1 19.1 22 18 22C16.9 22 16 21.1 16 20C16 18.9 16.9 18 18 18C19.1 18 20 18.9 20 20Z"></path>
                <path d="M3 3H5L5.4 5M5.4 5H21L17 13H8M5.4 5L8 13M8 13H17H17.5M17.5 13L19 16H7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
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
  },
  emits: ['add-to-cart']
}
</script>

<style scoped>
.product-card {
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>