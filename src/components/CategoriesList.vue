<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Популярные категории</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CategoryItem v-for="category in categories" :key="category.id" :category="category" />
    </div>
  </section>
</template>

<script>
import CategoryItem from './CategoryItem.vue'

export default {
  name: 'CategoriesList',
  components: { CategoryItem },
  data() {
    return {
      categories: [
        { id: 1, name: 'Плазмотроны и кабели к резакам', image: 'category1.jpg' },
        { id: 2, name: 'Сварочное оборудование', image: 'category2.jpg' },
        // Другие категории
      ]
    }
  }
}
</script>