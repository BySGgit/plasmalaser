<template>
  <section class="section py-[50px]">
    <div class="w-full">
      <div class="flex justify-between mb-6">
        <div class="flex">
          <button 
            class="px-6 py-3 font-medium rounded-l-[10px] border border-[#EBEBEB] transition-colors"
            :class="activeTab === 'new' ? 'bg-main text-white' : 'text-gray-700 hover:bg-gray-200'"
            @click="setActiveTab('new')"
          >
            НОВИНКИ
          </button>
          <button 
            class="px-6 py-3 font-medium rounded-t-lg border border-[#EBEBEB] transition-colors"
            :class="activeTab === 'popular' ? 'bg-main text-white' : 'text-gray-700 hover:bg-gray-200'"
            @click="setActiveTab('popular')"
          >
            ПОПУЛЯРНОЕ
          </button>
          <button 
            class="px-6 py-3 font-medium rounded-r-[10px] border border-[#EBEBEB] transition-colors"
            :class="activeTab === 'sale' ? 'bg-main text-white' : 'text-gray-700 hover:bg-gray-200'"
            @click="setActiveTab('sale')"
          >
            РАСПРОДАЖА
          </button>
        </div>
        <div class="flex space-x-2">
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" 
                  @click="prevSlide" 
                  :disabled="startIndex <= 0" 
                  :class="{'opacity-50 cursor-not-allowed': startIndex <= 0}">
                  <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" 
                  @click="nextSlide" 
                  :disabled="startIndex + itemsPerPage >= filteredProducts.length" 
                  :class="{'opacity-50 cursor-not-allowed': startIndex + itemsPerPage >= filteredProducts.length}">
                  <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        <div v-for="(product, index) in visibleProducts" :key="product.id" class="bg-white p-4 rounded-[10px] border hover:shadow-lg transition-shadow">
          <div class="relative aspect-square mb-4">
            <img :src="'/images/' + product.imageName" alt="Механизированный резак" class="w-full h-full object-contain" />
          </div>
          <div class="space-y-2">
            <div class="flex justify-between items-center text-sm text-gray-500">
              <div class="text-xs">Артикул: {{ product.sku }}</div>
              <div class="flex">
                <span v-for="i in 5" :key="i" class="text-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" :fill="i <= product.rating ? '#FF9800' : '#E0E0E0'" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                  </svg>
                </span>
                <span class="ml-1">{{ product.rating.toFixed(1) }} ({{ product.reviewCount }})</span>
              </div>
            </div>
            <div class="font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center mt-4">
              <div>
                <div class="text-main text-xl font-bold">{{ product.price.toLocaleString() }} ₽</div>
                <div class="text-gray-400 line-through text-sm">{{ product.oldPrice.toLocaleString() }} ₽</div>
              </div>
              <button class="bg-main hover:bg-orange-600 text-white p-2 rounded-[8px] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M20 12L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductSlider',
  data() {
    return {
      activeTab: 'new',
      tabPositions: {
        new: 0,
        popular: 0,
        sale: 0
      },
      itemsPerPage: 4,
      products: [
        {
          id: 1,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'popular']
        },
        {
          id: 2,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'sale']
        },
        {
          id: 3,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'popular']
        },
        {
          id: 4,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'sale']
        },
        {
          id: 5,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'popular']
        },
        {
          id: 6,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'popular', 'sale']
        },
        {
          id: 7,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'popular', 'sale']
        },
        {
          id: 8,
          name: '059477 Механизированный резак 180° в сборе',
          sku: '059477',
          price: 36670,
          oldPrice: 42864,
          rating: 4.0,
          reviewCount: 51,
          imageName: 'image6.png',
          tabs: ['new', 'sale']
        }
      ]
    }
  },
  computed: {
    startIndex() {
      return this.tabPositions[this.activeTab];
    },
    filteredProducts() {
      // Фильтруем продукты по активной вкладке
      return this.products.filter(product => product.tabs.includes(this.activeTab));
    },
    visibleProducts() {
      // Возвращаем только видимые продукты для текущей страницы
      const itemsInRow = 4; // Количество товаров в ряду (на десктопе)
      const rowsToShow = 2; // Показываем 2 строки
      const totalVisible = itemsInRow * rowsToShow; // Всего видимых товаров
      
      // Вычисляем начальный индекс так, чтобы перемещаться по столбцам
      const startCol = this.startIndex;
      const result = [];
      
      // Формируем двумерную сетку
      for (let row = 0; row < rowsToShow; row++) {
        for (let col = 0; col < itemsInRow; col++) {
          const index = (col + startCol) * rowsToShow + row;
          if (index < this.filteredProducts.length) {
            result.push(this.filteredProducts[index]);
          }
        }
      }
      
      return result;
    }
  },
  methods: {
    setActiveTab(tab) {
      // Меняем активную вкладку, при этом позиция слайдера сохраняется
      this.activeTab = tab;
    },
    prevSlide() {
      if (this.startIndex > 0) {
        // Смещаем на один столбец назад
        this.tabPositions[this.activeTab] = this.startIndex - 1;
      }
    },
    nextSlide() {
      const itemsInRow = 4; // Количество товаров в ряду
      const rowsToShow = 2; // Показываем 2 строки
      const maxStartCol = Math.ceil(this.filteredProducts.length / rowsToShow) - itemsInRow;
      
      if (this.startIndex < maxStartCol) {
        // Смещаем на один столбец вперед
        this.tabPositions[this.activeTab] = this.startIndex + 1;
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
.hover\:bg-orange-600:hover {
  background-color: #dd7203;
}
/* Дополнительные стили при необходимости */
</style> 