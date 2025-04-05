<template>
  <div class="section"><div class="bg-blue-100 rounded  mt-5 p-5 min-h-[450px] flex flex-col  items-center justify-center">
    <div class="flex  items-center justify-center overflow-hidden">
      <div class="arrow" @click="slider(false)">
        <span></span>
      </div>
      <div class="overflow-hidden"><div class="flex z-1 w-full transition-transform duration-[2s] ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="w-full p-10 flex -lg:flex-col items-center justify-between shrink-0" v-for="(slide, index) in slides" :key="index">
          <div class="lg:w-1/2 z-10">
            <h2 class="text-orange-500 font-bold text-2xl mb-4">
              {{ slide.title }}
            </h2>
            <p class="text-gray-700 mb-6">
              {{ slide.description }}
            </p>
            <button class="button">
              <span class="shrink-0">{{ slide.buttonText }}</span>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 17L19 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 7L19 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>


            </button>
          </div>
          <div class="relative lg:w-1/2 h-full flex">
            <img :src="'/images/317a6ae518eac739da3a8c25f337aeb1.png'" alt="Materials" class="w-full h-full object-contain z-1">
            <svg width="403" height="242" viewBox="0 0 403 242" fill="none" class="absolute top-0 bottom-0 w-full inset-0 h-full m-auto" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M402.39 87.87C402.39 40.8698 363.646 1.45963 315.445 0L79.319 1.75156L21.9655 93.7086L402.39 92.2489V87.87ZM375.849 176.325C360.595 190.629 338.935 199.095 315.139 200.847H140.638L114.402 241.717H0L86.3353 107.43H403V110.35C403 137.207 393.543 159.977 375.849 176.325Z" fill="#FF8304"/>
            </svg>

          </div>
        </div>
      </div>
      </div>
      <div class="arrow-cover" @click="slider(true)">
        <span class="next"></span>
      </div></div>
    <div class="w-full flex items-center justify-center gap-2">
      <div v-for="(slide, index) in slides" :key="index" class="tablist" :class="{ 'active': index === currentSlide }" @click="currentSlide = index"></div>
    </div>
  </div></div>

  </template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: 'Высококачественные расходные материалы\n',
          description: 'Предлагаем вам весь перечень расходников: электроды, сопла, завихрители, защитные экраны и другие детали',
          buttonText: 'Перейти',
          image: 'src/images/317a6ae518eac739da3a8c25f337aeb1.png' // Replace with actual image URL
        },
        // Add more slides here
        {
          title: 'Slide 2 Title',
          description: 'Slide 2 Description',
          buttonText: 'Learn More',
          image: 'src/images/74f9dd93e09ecc4c364f8f67d6544653.png' // Replace with actual image URL
        },
        {
          title: 'Slide 3 Title',
          description: 'Slide 3 Description',
          buttonText: 'Get Started',
          image: 'src/images/74f9dd93e09ecc4c364f8f67d6544653.png' // Replace with actual image URL
        }
      ],
    };
  },
  methods:{
    slider(way){
      this.currentSlide = (this.currentSlide + way? 1: -1) % this.slides.length;
    }
  },
  mounted() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000); // Change 5000 (5 seconds) to your desired interval
  },
}
</script>