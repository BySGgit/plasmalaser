<template>
  <div class="bg-white shadow p-4 rounded">
    <p class="text-sm text-gray-600">{{ news.date }}</p>
    <h3 class="text-lg font-semibold">{{ news.title }}</h3>
    <a :href="news.link" class="text-blue-600 hover:underline">Перейти в каталог</a>
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