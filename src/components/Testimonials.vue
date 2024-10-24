<template>
  <section class="p-8 bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">Отзывы клиентов</h2>
    <div class="space-y-4">
      <div class="bg-white shadow p-4 rounded" v-for="testimonial in testimonials" :key="testimonial.id">
        <p>"{{ testimonial.message }}"</p>
        <h4 class="text-right font-semibold mt-2">- {{ testimonial.name }}</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        { id: 1, message: 'Отличные расходные материалы!', name: 'Иван Иванов' },
        // Другие отзывы
      ]
    }
  }
}
</script>