<template>
  <div class="relative">
    <button
        class="text-white hover:bg-gray-700 py-2 px-4"
        @mouseover="showSubmenu = true"
        @mouseleave="showSubmenu = false"
    >
      {{ label }}
    </button>

    <ul
        v-show="showSubmenu"
        class="absolute bg-gray-800 text-white py-2 px-4 rounded-md shadow"
    >
      <li v-for="item in items" :key="item.label">
        <a href="#" class="block px-4 py-2 hover:bg-gray-700">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    items: Array,
  },
  data() {
    return {
      showSubmenu: false,
    };
  },
};
</script>