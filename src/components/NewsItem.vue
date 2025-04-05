<template>
  <div class="news-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
    <div class="relative overflow-hidden h-48">
      <img 
        :src="news.image" 
        :alt="news.title" 
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      >
      <div class="absolute top-0 left-0 bg-main text-white text-sm py-1 px-3 rounded-br">
        {{ news.date }}
      </div>
    </div>
    
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-lg font-semibold mb-2">{{ news.title }}</h3>
      <p class="text-gray-600 mb-4 flex-grow">{{ news.summary }}</p>
      <a href="#" class="text-main font-semibold flex items-center gap-1 hover:underline self-start mt-auto">
        Подробнее
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.news-card {
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}
</style>