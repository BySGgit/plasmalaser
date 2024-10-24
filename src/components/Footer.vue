<template>
  <footer class="bg-blue-900 text-white py-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <!-- Block with logo, contacts, payment acceptance, and developed by -->
      <div>
        <img src="" alt="Plasma Laser Logo" class="mb-4">
        <p class="mb-2">+7(904)-642-21-01</p>
        <p class="mb-2">n_yatsko@bk.ru</p>
        <p class="mb-2">г. Санкт-Петербург, пр.Королева, д. 22 корп 1</p>
        <div class="flex space-x-2 mt-4">
          <img src="" alt="Visa" class="w-8">
          <img src="" alt="Mir" class="w-8">
        </div>
      </div>

      <!-- Block with site menu -->
      <div>
        <h3 class="font-bold mb-4">Меню сайта</h3>
        <ul>
          <li>Оплата и доставка</li>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Каталог</li>
          <li>Блог</li>
          <li>FAQ</li>
          <li>Отзывы</li>
          <li>Контакты</li>
        </ul>
      </div>

      <!-- Blocks with categories -->
      <div>
        <h3 class="font-bold mb-4">Плазменная резка</h3>
        <ul>
          <li>HYPER</li>
          <li>Thermal Dynamics</li>
          <li>Lincoln Electric</li>
          <li>Kjellberg</li>
          <li>ESAB</li>
          <li>Trafilmet</li>
          <li>Плазматроны и кабели к резакам</li>
          <li>CEBORA</li>
          <li>AJAN</li>
          <li>Сварог</li>
          <li>XF</li>
          <li>CUT 300 / CUT 400</li>
          <li>VGX</li>
          <li>ST120 (STM120)</li>
          <li>YK</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-4">Лазерная резка</h3>
        <ul>
          <li>Bystronic</li>
          <li>Precitec</li>
          <li>Trumpf</li>
          <li>Средства очистки оптики, аксессуары</li>
          <li>Защитные стекла и линзы</li>
          <li>AMADA</li>
          <li>Raytools</li>
          <li>HANKWANG</li>
          <li>Очки</li>
          <li>Hans laser</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-4">Газовая резка</h3>
        <ul>
          <li>Harris</li>
          <li>KOIKE</li>
          <li>Messer</li>
          <li>G03</li>
          <li>ESAB</li>
          <li>PNME</li>
          <li>GK3</li>
          <li>TANAKA</li>
          <li>GCE</li>
          <li>TECNA</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-4">Расходные материалы для сварки</h3>
        <ul>
          <li>Расходные материалы для сварки</li>
          <li>Наконечники для автоматической сварки (тракторов)</li>
          <li>TECNA</li>
          <li>Fronius</li>
          <li>Abicor Binzel</li>
          <li>Наконечники (Abicor, fronius, kempi, esab, panasonic и др.)</li>
          <li>Сварочные горелки Abicor</li>
          <li>Сварочные горелки Fronius</li>
          <li>Газовые сопла (Abicor, fronius)</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-4">Гидроабразивная резка</h3>
        <ul>
          <li>Фокусные трубки</li>
          <li>Гранатовый песок</li>
          <li>Рубиновые сопла</li>
        </ul>
      </div>

      <!-- Policy and other information -->
      <div>
        <h3 class="font-bold mb-4">Политика и информация</h3>
        <ul>
          <li>Политика конфиденциальности</li>
          <li>Условия использования</li>
          <li>Оферта</li>
          <li>Информация о доставке</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import MenuLink from './MenuLink.vue';

export default {
  name: 'Footer',
  components: {
    MenuLink,
  },
  data() {
    return {
      menuItems: [
        {
          label: 'Меню',
          items: [
            { label: 'Плазменная резка', items: ['Hyder', 'Thermal Dynamics'] },
            { label: 'Лазерная резка', items: ['Вырезка', 'Травиление'] },
            // Другие подпункты меню
          ],
        },
        {
          label: 'Оплата и доставка',
          items: [], // Если нет подпунктов
        },
        // Другие пункты меню
      ],
    };
  },
};
</script>