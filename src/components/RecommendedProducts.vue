<template>
  <section class="section py-[50px] bg-main-gray">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold text-dark-blue">Мы рекомендуем</h2>
        <div class="flex space-x-4">
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" @click="scrollLeft" :disabled="startIndex <= 0" :class="{'opacity-50 cursor-not-allowed': startIndex <= 0}">
            <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" @click="scrollRight" :disabled="startIndex + itemsPerPage >= products.length" :class="{'opacity-50 cursor-not-allowed': startIndex + itemsPerPage >= products.length}">
            <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="w-32 h-1 bg-main mb-10"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-1 rounded-[10px] overflow-hidden">
        <!-- Плазмотроны и кабели к резакам -->
        <div class="bg-white p-6 flex border border-[#EBEBEB] border-collapse items-center" v-for="product in visibleProducts" :key="product.id">
          <div class="w-1/3 mr-4">
            <img :src="product.image" :alt="product.name" class="w-full" />
          </div>
          <div class="w-2/3 flex flex-col gap-7">
            <div v-if="product.sku" class="text-gray-500 text-sm mb-2">АРТИКУЛ: {{ product.sku }}</div>
            <h3 class="font-semibold mb-4 text-[14px]">{{ product.name }}</h3>
            <div class="flex items-center gap-2">
            <div class="flex items-center">
              <span v-if="product.oldPrice" class="text-gray-400 line-through mr-3">{{ product.oldPrice }} ₽</span>
              <span v-if="product.price" class="text-[#F25763] text-lg">{{ product.price }} ₽</span>
              <span v-else class="text-[#F25763]">Цена по запросу</span>
            </div>
            <div v-if="product.unit" class="text-gray-500">/ {{ product.unit }}</div>
          </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'RecommendedProducts',
  data() {
    return {
      startIndex: 0,
      itemsPerPage: 6,
      products: [
        {
          id: 1,
          sku: '6290-6VAX',
          name: '6290-6VAX Мундштук',
          price: '788',
          unit: 'шт.',
          image: '/images/img.png'
        },
        {
          id: 2,
          sku: '120932',
          name: '120932 Сопло 40A',
          price: '138.53',
          oldPrice: '145',
          image: '/images/image 11.png'
        },
        {
          id: 3,
          sku: '',
          name: 'Безворсовые чистящие палочки для оптики (Свабы) (100 шт.) - длина 70 мм',
          price: '788',
          unit: 'шт.',
          image: '/images/image 15.png'
        },
        {
          id: 4,
          sku: '3-01903',
          name: '3-01903 Сопло d=2.0 HD',
          price: '196.36',
          oldPrice: '235',
          image: '/images/image 12.png'
        },
        {
          id: 5,
          sku: '42,0404,0271',
          name: '42,0404,0271 Канал направляющий (изолированный) D0,8мм L4,5м F',
          price: null,
          priceLabel: 'Цена по запросу',
          image: '/images/image 13.png'
        },
        {
          id: 6,
          sku: '028872',
          name: 'Антифриз 70/30 (Аналог 028872) 4 л.',
          price: '2 640.53',
          oldPrice: '3 100',
          image: '/images/image 14.png'
        }
      ]
    }
  },
  computed: {
    visibleProducts() {
      return this.products.slice(this.startIndex, this.startIndex + this.itemsPerPage);
    }
  },
  methods: {
    scrollLeft() {
      if (this.startIndex > 0) {
        this.startIndex = Math.max(0, this.startIndex - 1);
      }
    },
    scrollRight() {
      if (this.startIndex + this.itemsPerPage < this.products.length) {
        this.startIndex = Math.min(this.products.length - this.itemsPerPage, this.startIndex + 1);
      }
    }
  }
}
</script>

<style scoped>
.bg-main {
  background-color: #FF8304;
}
.text-main {
  color: #FF8304;
}
.text-dark-blue {
  color: #212B36;
}
</style> 