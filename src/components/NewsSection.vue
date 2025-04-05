<template>
  <section class="section my-12 bg-gray-50 py-10">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl font-bold text-dark-blue mb-2 uppercase">{{ title }}</h2>
        <div class="flex space-x-4">
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" @click="scrollLeft" :disabled="startIndex <= 0" :class="{'opacity-50 cursor-not-allowed': startIndex <= 0}">
            <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-[50px] h-[50px] flex items-center justify-center p-2 border rounded-[3px] hover:bg-main group transition-colors" @click="scrollRight" :disabled="startIndex + itemsPerPage >= newsList.length" :class="{'opacity-50 cursor-not-allowed': startIndex + itemsPerPage >= newsList.length}">
            <svg class="group-hover:stroke-white stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="w-32 h-1 bg-main mb-10"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(news, index) in visibleNews" :key="index" :class="{'relative h-full': true, 'has-image': news.image}" class="h-[370px] aspect-square">
          <div v-if="news.image" class="relative h-full overflow-hidden rounded-lg">
            <div class="p-6 h-full text-white flex flex-col z-1 relative">
              <div class="text-2xl font-bold mb-1">{{ news.date.day }}</div>
              <div class="text-sm font-bold mb-4">{{ news.date.month }} {{ news.date.year }}</div>
              <h3 class="text-xl font-semibold mb-6">{{ news.title }}</h3>
              <a href="#" class="button-cover mt-auto">
                Перейти
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="ml-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <img :src="news.image" alt="Новость" class="w-full h-full object-cover rounded-lg absolute top-0 left-0">
          </div>
          <div v-else class="bg-white p-6 rounded-lg border h-full flex flex-col">
            <div class="mb-4">
              <div class="text-2xl font-bold text-dark-blue mb-1">{{ news.date.day }}</div>
              <div class="text-sm font-bold text-dark-blue">{{ news.date.month }} {{ news.date.year }}</div>
            </div>
            <h3 class="text-xl font-semibold text-dark-blue mb-6">{{ news.title }}</h3>
            <a href="#" class="button mt-auto">
              Перейти
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="ml-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'NewsSection',
  data() {
    return {
      title: 'Новости',
      startIndex: 0,
      itemsPerPage: 3,
      newsList: [
        {
          date: {
            day: '04',
            month: 'Сентября',
            year: '2020'
          },
          title: 'Hypertherm – расходники для плазменной резки',
          image: ''
        },
        {
          date: {
            day: '04',
            month: 'Сентября',
            year: '2020'
          },
          title: 'Hypertherm – расходники для плазменной резки',
          image: '/images/News card.png'
        },
        {
          date: {
            day: '04',
            month: 'Сентября',
            year: '2020'
          },
          title: 'Hypertherm – расходники для плазменной резки',
          image: ''
        },
        {
          date: {
            day: '04',
            month: 'Сентября',
            year: '2020'
          },
          title: 'Hypertherm – расходники для плазменной резки',
          image: ''
        },
        {
          date: {
            day: '04',
            month: 'Сентября',
            year: '2020'
          },
          title: 'Hypertherm – расходники для плазменной резки',
          image: ''
        }
      ]
    }
  },
  computed: {
    visibleNews() {
      return this.newsList.slice(this.startIndex, this.startIndex + this.itemsPerPage);
    }
  },
  methods: {
    scrollLeft() {
      if (this.startIndex > 0) {
        this.startIndex = Math.max(0, this.startIndex - 1);
      }
    },
    scrollRight() {
      if (this.startIndex + this.itemsPerPage < this.newsList.length) {
        this.startIndex = Math.min(this.newsList.length - this.itemsPerPage, this.startIndex + 1);
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