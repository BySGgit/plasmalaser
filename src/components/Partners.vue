<template>
  <section class="section py-12">
    <h2 class="text-3xl font-bold text-dark-blue mb-2">{{ title }}</h2>
      <div class="w-32 h-1 bg-main mb-10"></div>
      
      <!-- Карусель с логотипами партнеров -->
      <div class="relative my-10 flex w-full items-center">
        <button class="w-[50px] h-[50px] flex items-center justify-center p-2" @click="scrollLeft" :disabled="startIndex <= 0" :class="{'opacity-50 cursor-not-allowed': startIndex <= 0}">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        
        <div class="overflow-hidden flex-1">
          <div class="flex transition-transform duration-300 ease-in-out">
            <div v-for="(partner, index) in visiblePartners" :key="index" class="w-1/4 flex-shrink-0 px-4">
              <img :src="partner.image" :alt="partner.name" class="h-20 object-contain mx-auto">
            </div>
          </div>
        </div>
        
        <button class="w-[50px] h-[50px] flex items-center justify-center p-2" @click="scrollRight" :disabled="startIndex + itemsPerPage >= partners.length" :class="{'opacity-50 cursor-not-allowed': startIndex + itemsPerPage >= partners.length}">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
      </div>
      
      <!-- Секция подписки -->
      <div class="bg-main mt-12 py-8 px-6 sm:px-10 flex flex-col md:flex-row items-center gap-4 rounded-sm overflow-hidden relative">
        <div class="h-full z-10 mb-6 md:mb-0 flex flex-col justify-center w-1/3">
          <h3 class="text-white text-2xl sm:text-3xl font-bold mb-2">Будьте всегда в курсе!</h3>
          <p class="text-white text-lg">Узнавайте о скидках и акциях первым</p>
        </div>
        
        <div class="flex z-10 w-2/5">
          <input type="email" placeholder="Ваш e-mail" class="px-4 py-3 rounded-l-sm w-full flex-1 md:w-64 focus:outline-none">
          <button class="bg-white py-3 px-4 rounded-r-sm hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-main">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        <div class="h-full flex flex-1 relative"><img src="/images/ChatCenteredDots.svg" class="absolute left-0 bottom-0 top-0 opacity-80 my-auto" alt=""></div>
    
        
      </div>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      title: 'Наши партнеры',
      startIndex: 0,
      itemsPerPage: 4,
      partners: [
        { 
          name: 'Тверской вагоностроительный завод', 
          image: '/images/img1.png' 
        },
        { 
          name: 'Трансмашхолдинг', 
          image: '/images/img2.png' 
        },
        { 
          name: 'Ростех', 
          image: '/images/img3.png' 
        },
        { 
          name: 'ЗПМК', 
          image: '/images/img4.png' 
        }
      ]
    }
  },
  computed: {
    visiblePartners() {
      return this.partners.slice(this.startIndex, this.startIndex + this.itemsPerPage);
    }
  },
  methods: {
    scrollLeft() {
      if (this.startIndex > 0) {
        this.startIndex = Math.max(0, this.startIndex - 1);
      }
    },
    scrollRight() {
      if (this.startIndex + this.itemsPerPage < this.partners.length) {
        this.startIndex = Math.min(this.partners.length - this.itemsPerPage, this.startIndex + 1);
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