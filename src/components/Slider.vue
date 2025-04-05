<template>
  <div class="section relative mb-10">
    <div class="bg-main relative rounded-o overflow-hidden flex items-center h-[350px]">
      <div class="flex z-1 w-full h-full transition-transform duration-[2s] ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="flex shrink-0 overflow-hidden w-full relative">
        <div class="p-8 z-1 w-3/5">
          <h2 class="text-2xl font-bold text-white mb-4">{{ slide.title }}</h2>
          <p class="text-lg text-white mb-6">{{ slide.description }}</p>
          <button class="button-white">
            <span class="shrink-0">
              {{ slide.buttonText }}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17L19 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 7L19 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
        </div>
        <img :src=slide.image alt="Slide Image" class="absolute w-3/5 overflow-visible right-0 h-full object-cover">

      </div>
    </div>
      <svg width="403" height="242" viewBox="0 0 403 242" fill="none" class="absolute top-0 bottom-0 w-1/2 h-full object-cover  inset-0 ml-auto opacity-30" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M402.39 87.87C402.39 40.8698 363.646 1.45963 315.445 0L79.319 1.75156L21.9655 93.7086L402.39 92.2489V87.87ZM375.849 176.325C360.595 190.629 338.935 199.095 315.139 200.847H140.638L114.402 241.717H0L86.3353 107.43H403V110.35C403 137.207 393.543 159.977 375.849 176.325Z" fill="#FFF"/>
      </svg>
      <div class="absolute bottom-8 left-8 w-auto flex justify-center">
        <div v-for="(slide, index) in slides" :key="index" class="w-12 h-1 mx-2 rounded" :class="{ 'bg-white': index === currentSlide, 'bg-gray-300': index !== currentSlide }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: 'Аппараты для лазерной сварки и очистки 4в1',
          description: 'Новый ассортимент уже в продаже!',
          buttonText: 'Перейти',
          image: '/images/74f9dd93e09ecc4c364f8f67d6544653.png' // Replace with actual image URL
        },
        // Add more slides here
        {
          title: 'Slide 2 Title',
          description: 'Slide 2 Description',
          buttonText: 'Learn More',
          image: '/images/74f9dd93e09ecc4c364f8f67d6544653.png' // Replace with actual image URL
        },
        {
          title: 'Slide 3 Title',
          description: 'Slide 3 Description',
          buttonText: 'Get Started',
          image: '/images/74f9dd93e09ecc4c364f8f67d6544653.png' // Replace with actual image URL
        }
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000); // Change 5000 (5 seconds) to your desired interval
  },
};
</script>