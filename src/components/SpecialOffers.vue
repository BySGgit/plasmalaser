<template>
  <section class="section my-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Блок "Расходные материалы для Kjellberg" -->
      <div class="bg-gray-100 rounded-[10px] overflow-hidden relative max-h-[480px]">
        <div class="p-8 flex flex-col justify-between w-1/2 relative z-1">
          <div>
            <img src="/images/Kjellberg-Logo.png" alt="Kjellberg" class="h-16 mb-6">
            <h2 class="text-3xl mb-6">Расходные материалы для Kjellberg</h2>
          </div>
          <a href="#" class="button">
            Перейти
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="ml-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
          <img src="/images/BG.png" alt="Расходные материалы" class="w-full h-full object-cover absolute top-0 left-0">
        
      </div>

      <!-- Блок с двумя баннерами -->
      <div class="grid grid-rows-2 gap-6  max-h-[480px]">
        <!-- Верхний баннер "Дарим скидку 10% за отзыв" -->
        <div class="bg-white rounded-[10px] border border-[#EBEBEB] overflow-hidden px-8 flex items-center justify-between">
          <div class="w-1/2 z-1">
            <h2 class="text-3xl font-bold text-main mb-6">Дарим скидку 10% за отзыв</h2>
            <a href="#" class="button">
              Перейти
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="ml-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <img src="/images/IMG.svg" alt="Отзыв" class="h-full w-1/2">
        </div>

        <!-- Нижний баннер "Нашли дешевле? Снизим цену!" -->
        <div class="bg-main rounded-[10px] overflow-hidden px-8 flex items-center justify-between">
          <div class="text-white w-1/2">
            <h2 class="text-white text-3xl font-bold mb-6">Нашли дешевле? Снизим цену!</h2>
            <a href="#" class="button-white">
              Перейти
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="ml-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <img src="/images/Tag.svg" alt="Ценник" class="h-full w-1/2">
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center gap-2 my-6">
      <div class="tablist active"></div>
      <div class="tablist"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpecialOffers'
}
</script>

<style scoped>
.bg-main {
  background-color: #FF8304;
}
</style> 