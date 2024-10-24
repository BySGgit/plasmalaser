<template>
  <div class="bg-white shadow p-4 rounded text-center">
    <img :src="`@/assets/images/${category.image}`" :alt="category.name" class="h-40 object-cover mb-4 mx-auto" />
    <h3 class="text-lg font-semibold">{{ category.name }}</h3>
    <a href="#" class="text-blue-600 hover:underline mt-2 block">Перейти</a>
  </div>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>