<template>
  <section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
    <form @submit.prevent="submitForm" class="space-y-4 max-w-lg">
      <div>
        <label for="name" class="block">Имя</label>
        <input type="text" id="name" v-model="form.name" class="mt-1 block w-full border-gray-300 rounded" required />
      </div>
      <div>
        <label for="email" class="block">Email</label>
        <input type="email" id="email" v-model="form.email" class="mt-1 block w-full border-gray-300 rounded" required />
      </div>
      <div>
        <label for="message" class="block">Сообщение</label>
        <textarea id="message" v-model="form.message" class="mt-1 block w-full border-gray-300 rounded" required></textarea>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Отправить</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert('Сообщение отправлено!')
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>