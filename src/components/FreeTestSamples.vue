<template>
  <section class="section my-12">
    <div class="bg-gray-100 overflow-hidden rounded-[10px] relative">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-2/3">
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
        </div>
        <div class="md:w-1/3 py-10 pr-10 flex flex-col justify-center srez">
          <h2 class="text-3xl font-bold text-white mb-4">{{ h2.text }}</h2>
          <p class="text-white mb-8">{{ p.text }}</p>
          <a :href="a.href" class="button-white">
            {{ a.text }}
            <svg class="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  name: 'FreeTestSamples',
  data() {
    return {
      image: {
        src: '/images/img-banner.png',
        alt: 'Тестовые образцы деталей'
      },
      h2: {
        text: 'Бесплатные тестовые образцы'
      },
      p: {
        text: 'Вы можете предварительно заказать небольшую партию деталей для теста'
      },
      a: {
        text: 'Перейти',
        href: '#'
      }
    }
  }
}
</script>

<style type="scss" scoped>
.srez{
  & > *{
    z-index: 1;
  }
  &::after {
    @apply w-1/2;
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    height: 200%;
    right: -10%;
    --tw-bg-opacity: 1;
    background-color: rgb(255 131 4 / var(--tw-bg-opacity, 1));
    transform: rotate(11.96deg);
    transform-origin: center center;
}
}
</style> 