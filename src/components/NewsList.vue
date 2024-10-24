<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Новости</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NewsItem v-for="news in newsList" :key="news.id" :news="news" />
    </div>
    <a href="#" class="mt-4 inline-block text-blue-600 hover:underline">Все новости</a>
  </section>
</template>

<script>
import NewsItem from './NewsItem.vue'

export default {
  name: 'NewsList',
  components: { NewsItem },
  data() {
    return {
      newsList: [
        { id: 1, date: '04 Сентября 2020', title: 'Hypertherm – расходники для плазменной резки', link: '#' },
        // Другие новости
      ]
    }
  }
}
</script>