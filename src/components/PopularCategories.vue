<template>
  <section class="section py-[50px] bg-main-gray">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold text-dark-blue">Популярные категории</h2>
        <div class="flex space-x-4">
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" @click="scrollLeft" :disabled="startIndex <= 0" :class="{'opacity-50 cursor-not-allowed': startIndex <= 0}">
            <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" @click="scrollRight" :disabled="startIndex + itemsPerPage >= categories.length" :class="{'opacity-50 cursor-not-allowed': startIndex + itemsPerPage >= categories.length}">
            <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="w-32 h-1 bg-main mb-10"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-1 rounded-[10px] overflow-hidden">
        <!-- Плазмотроны и кабели к резакам -->
        <div class="bg-white p-6 flex border border-[#EBEBEB] border-collapse" v-for="category in visibleCategories" :key="category.id">
          <div class="w-1/3 mr-4">
            <img :src="category.image" :alt="category.title" class="w-full" />
          </div>
          <div class="w-2/3">
            <h3 class="font-semibold mb-4 text-[14px]">{{ category.title }}</h3>
            <ul class="space-y-2 text-[13px] text-gray-700">
              <li v-for="(item, index) in category.items" :key="index">{{ item }}</li>
            </ul>
            <a href="#" class="w-full inline-flex items-center justify-end text-[14px] font-bold text-gray-600 mt-4 hover:text-main transition-colors">
              СМОТРЕТЬ ВСЕ
              <div class="ml-2 w-4 h-4 rounded-[100%] overflow-hidden bg-main"></div>
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'PopularCategories',
  data() {
    return {
      startIndex: 0,
      itemsPerPage: 6,
      categories: [
        {
          id: 1,
          title: 'Плазмотроны и кабели к резакам',
          image: '/images/img-rezaki.png',
          items: ['Плазмотроны', 'Шланг-пакеты', 'Ручные резаки', 'Головки резаки']
        },
        {
          id: 2,
          title: 'Расходные материалы для лазерной резки',
          image: '/images/img-laser.png',
          items: ['Сопла', 'Защитные стекла', 'Линзы', 'Держатели']
        },
        {
          id: 3,
          title: 'Расходные материалы для плазменной резки',
          image: '/images/img-plasma.png',
          items: ['Колпаки', 'Сопла', 'Электроды', 'Колпачки']
        },
        {
          id: 4,
          title: 'Сварочное оборудование',
          image: '/images/webpc-passthru 1.png',
          items: ['Наконечники', 'Сопла', 'Горелки', 'Каналы']
        },
        {
          id: 5,
          title: 'Расходные материалы для газовой резки',
          image: '/images/img-gas.png',
          items: ['Мундштуки', 'Сопла', 'Наконечники', 'Комплектующие']
        },
        {
          id: 6,
          title: 'Лазерная сварка',
          image: '/images/img-rezaki (1).png',
          items: ['Сопла', 'Линзы', 'Аппараты', 'Комплектующие']
        },
        {
          id: 7,
          title: 'Автоматическая сварка',
          image: '/images/img-auto-weld.png',
          items: ['Головки', 'Проволока', 'Держатели', 'Горелки']
        },
        {
          id: 8,
          title: 'Контактная сварка',
          image: '/images/img-contact-weld.png',
          items: ['Электроды', 'Держатели', 'Аппараты', 'Насадки']
        },
        {
          id: 9,
          title: 'Промышленные роботы',
          image: '/images/img-robots.png',
          items: ['Манипуляторы', 'Контроллеры', 'Датчики', 'Приводы']
        }
      ]
    }
  },
  computed: {
    visibleCategories() {
      return this.categories.slice(this.startIndex, this.startIndex + this.itemsPerPage);
    }
  },
  methods: {
    scrollLeft() {
      if (this.startIndex > 0) {
        this.startIndex = Math.max(0, this.startIndex - 1);
      }
    },
    scrollRight() {
      if (this.startIndex + this.itemsPerPage < this.categories.length) {
        this.startIndex = Math.min(this.categories.length - this.itemsPerPage, this.startIndex + 1);
      }
    }
  }
}
</script>

<style scoped>
.bg-main {
  background-color: #FF8304;
}
.hover\:text-main:hover {
  color: #FF8304;
}
/* Дополнительные стили при необходимости */
</style> 