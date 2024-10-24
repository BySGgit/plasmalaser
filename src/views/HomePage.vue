<template>
  <div>
    <Header />
    <Banner />
    <AdvantagesBlock />
    <Slider />
    <div class="section flex -lg:flex-col justify-between">
      <div class="w-full lg:w-2/5">
        <h2 class="text-4xl">
          Расходные материалы для плазменной резки и сварки
        </h2>
        <hr>
        <p class="text-2xl text-main-blue mb-4">
          Полный ассортимент расходных материалов от европейских производителей
        </p>
        <p>
          Расходные материалы для плазменной резки и сварки
          Полный ассортимент расходных материалов от европейских производителей
          Интернет-магазин Plasmalaser — это широчайший ассортимент оснастки для термической резки метала и сварки. Мы обеспечили вас наиболее необходимым оборудованиям для вашей сферы деятельности. У нас вы можете снабдить самое узконаправленное производство в кратчайшие сроки.
        </p>
        <p>Основным направлением нашей деятельности стало распространение совместимых расходных материалов для плазменной резки конечным пользователям и дистрибьюторам материалов для сварки и резки. За прошедшие годы мы расширили наш ассортимент оригинальными расходными материалами для плазменной резки.
        </p>
        <p>Мы можем поставить расходные материалы и совместимые продукты для всех источников плазмы.
        </p>
        <p>Расходные материалы для плазменной резки играют важную роль, будь то ручная резка, станок для резки с ЧПУ или механизированный станок для плазменной резки. Он помогает резать как тонкие, так и толстые металлы с максимальной скоростью.
        </p>
        <p>За последние несколько лет срок службы расходных материалов для плазменной резки значительно увеличился, что позволило снизить стоимость и сделать клиентов конкурентоспособными. Это достигается за счет тщательного проектирования, изготовления их с использованием современного программного обеспечения и высокоточного ЧПУ.
        </p>
        <p>В нашем каталоге товаров большой выбор расходных материалов, включая наконечники, корпуса, провода для плазмотронов самого широкого модельного ряда. Охлаждающая жидкость для плазмы, уплотнительные кольца, смазки для электродов и ключи для откручивания запасных частей.
        </p>
        <p>Отдельно поставляем ручные и механизированные резаки.
        </p>
      </div>
      <div class="w-full lg:w-2/5 grid grid-cols-2 gap-4" >
        <div v-for="item in items" :key="item.id" class="plate relative">
          <div class="plateinfo px-4 py-2 z-1">
            <h2>{{ item.title }}
            </h2>
            <a class="button" :href="item.link">{{ item.linkText }}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 17L19 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 7L19 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></a>
          </div>
          <div class="plateimage flex">
            <img class="w-full object-cover overflow-visible z-10" :src="item.image" alt="">
            <svg width="403" height="242" viewBox="0 0 403 242" fill="none" class="absolute bottom-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M402.39 87.87C402.39 40.8698 363.646 1.45963 315.445 0L79.319 1.75156L21.9655 93.7086L402.39 92.2489V87.87ZM375.849 176.325C360.595 190.629 338.935 199.095 315.139 200.847H140.638L114.402 241.717H0L86.3353 107.43H403V110.35C403 137.207 393.543 159.977 375.849 176.325Z" fill="#FF8304"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <CategoriesList />
    <ProductsList @add-to-cart="handleAddToCart" />
    <NewsList />
    <Testimonials />
    <ContactForm />
    <div class="bg-gray-100 p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Kjellberg Section -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">Kjellberg FINSTERWALDE</h3>
          <p class="mb-4">Расходные материалы для Kjellberg</p>
          <img src="" alt="Kjellberg Components" class="w-full mb-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Перейти</button>
        </div>
        <!-- Discount Section -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">Дарим скидку 10% за отзыв</h3>
          <img src="" alt="Discount" class="w-full mb-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Перейти</button>
        </div>
        <!-- Price Match Section -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-4">Нашли дешевле? Снизим цену!</h3>
          <img src="" alt="Price Match" class="w-full mb-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Перейти</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'HomePage',
  components: {
    ...components,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: 'src/assets/images/317a6ae518eac739da3a8c25f337aeb1.png',
          title: 'Плазменная резка',
          link: '#',
          linkText: 'Перейти'
        },
        {
          id: 2,
          image: 'src/assets/images/807a7e64ec474371efccf8e44f806ee2.png',
          title: 'Лазерная сварка',
          link: '#',
          linkText: 'Перейти'
        },
        {
          id: 3,
          image: 'src/assets/images/4001eeb8b9c4dafd92a1b8cc4c82900a.png',
          title: 'Лазерная резка',
          link: '#',
          linkText: 'Перейти'
        },
        {
          id: 4,
          image: 'src/assets/images/4d08be4c376661faf6009cc96317bc5b.png',
          title: 'Газовая резка',
          link: '#',
          linkText: 'Перейти'
        },
        {
          id: 5,
          image: 'src/assets/images/5f958d7d5d6c3458d94073d29f1b6519.png',
          title: 'Газовая резка',
          link: '#',
          linkText: 'Перейти'
        }
      ]
    }
  },
  methods: {
    handleAddToCart(product) {
      // Логика добавления в корзину
      console.log(`Товар добавлен в корзину: ${product.name}`);
    }
  }
}</script>