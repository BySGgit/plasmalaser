<template>
  <div class="category-item bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div class="flex flex-col h-full">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-main">
          <!-- Иконка в зависимости от категории -->
          <svg v-if="category.icon === 'fire'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 23C7.58 23 4 19.42 4 15C4 12.235 5.035 9.844 6.305 7.733C6.963 6.641 7.697 5.621 8.421 4.733C8.883 4.176 9.941 3 12 3C12 3 12.048 7.4 15 9C15 9 14.5 3 19 2C19 2 18.043 5.038 19 7C21 11 22 11.773 22 15C22 19.42 18.42 23 14 23H12Z"></path>
          </svg>
          <svg v-else-if="category.icon === 'laser'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C11.4477 2 11 2.44772 11 3V4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4V3C13 2.44772 12.5523 2 12 2Z"></path>
            <path d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"></path>
            <path d="M21 11H20C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11Z"></path>
            <path d="M4 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11Z"></path>
            <path d="M18.364 7.05L17.657 7.757C17.2665 8.1475 17.2665 8.7806 17.657 9.1711C18.0475 9.5616 18.6806 9.5616 19.0711 9.1711L19.778 8.464C20.1685 8.0735 20.1685 7.4404 19.778 7.0499C19.3875 6.6594 18.7545 6.6594 18.364 7.05Z"></path>
            <path d="M6.343 16.9498L5.636 17.6568C5.2455 18.0473 5.2455 18.6805 5.636 19.071C6.0265 19.4615 6.6597 19.4615 7.0502 19.071L7.7572 18.364C8.1477 17.9735 8.1477 17.3403 7.7572 16.9498C7.3667 16.5593 6.7335 16.5593 6.343 16.9498Z"></path>
            <path d="M12 19C11.4477 19 11 19.4477 11 20V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V20C13 19.4477 12.5523 19 12 19Z"></path>
            <path d="M16.9497 7.0502C16.5592 7.4407 16.5592 8.0739 16.9497 8.4644L17.6567 9.1714C18.0472 9.5619 18.6803 9.5619 19.0708 9.1714C19.4613 8.7809 19.4613 8.1477 19.0708 7.7572L18.3638 7.0502C17.9733 6.6597 17.3401 6.6597 16.9497 7.0502Z"></path>
            <path d="M7.05 16.9498C6.6595 16.5593 6.0263 16.5593 5.6358 16.9498C5.2453 17.3403 5.2453 17.9735 5.6358 18.364L6.3428 19.071C6.7333 19.4615 7.3665 19.4615 7.757 19.071C8.1475 18.6805 8.1475 18.0473 7.757 17.6568L7.05 16.9498Z"></path>
          </svg>
          <svg v-else-if="category.icon === 'weld'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path>
          </svg>
          <svg v-else-if="category.icon === 'gas'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 2C10.5 2 9 3.5 9 5.5V10H13V14H7V10.5C7 8.5 5.5 7 3.5 7H3V14H5V22H19V14H21V7H20.5C18.5 7 17 8.5 17 10.5V14H16.2V10H18V5.5C18 4.837 17.663 4 17 4C15.5 4 13 5.5 13 7.5V8H11V5.5C11 4.5 11.5 4 12.5 4M6 16H18V20H6V16Z"></path>
          </svg>
          <svg v-else-if="category.icon === 'mig'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 14.5V12H9V14.5H3V16.5H21V14.5H10.5M14.5 13.5H16.5V10.5H19.5V8.5H16.5V5.5H14.5V8.5H11.5V10.5H14.5V13.5Z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold">{{ category.name }}</h3>
      </div>

      <div class="flex-grow overflow-hidden relative h-36">
        <img 
          :src="category.image" 
          :alt="category.name" 
          class="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        >
      </div>
      
      <div class="flex justify-between items-center mt-4">
        <div class="text-gray-600 text-sm">{{ category.count }} товаров</div>
        <a href="#" class="text-main font-semibold flex items-center gap-1 hover:underline">
          Перейти
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
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

<style scoped>
.category-item {
  transition: all 0.3s ease;
}

.category-item:hover {
  transform: translateY(-5px);
}
</style>