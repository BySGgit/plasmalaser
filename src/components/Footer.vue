<template>
  <footer class="section bg-main-darkblue">
    <div class="flex flex-col">
      <div class="flex gap-4 py-12">
        <!-- Левая колонка - логотип, контакты, платежные системы, копирайт, разработчик -->
        <div class="w-1/5 flex flex-col justify-between">
          <div>
            <img src="/images/logo.svg" alt="Plasma Laser" class="p-6" />
            <div class="flex flex-col gap-5">
              <div
                v-for="(contact, index) in contacts"
                :key="index"
                class="flex gap-1 text-white text-[14px] font-bold"
                :class="{ 'contact-address': contact.type === 'address' }"
              >
                <img
                  v-for="icon in contact.icons"
                  :key="icon"
                  :src="`/images/${icon}.svg`"
                  :alt="contact.iconAlt"
                  class="contact-icon"
                />
                <component
                  :is="contact.type"
                  :href="contact.href"
                  class="contact-link"
                  >{{ contact.text }}</component
                >
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-8">
            <!-- Платежные системы -->
            <div class="flex flex-col gap-1">
              <p class="text-sm text-white">{{ paymentTitle }}</p>
              <div class="flex gap-2">
                <img
                  v-for="method in paymentMethods"
                  :key="method.id"
                  :src="`/images/${method.icon}.svg`"
                  :alt="method.name"
                  class="bg-[#f4f6f933] p-2 rounded-[4px]"
                />
              </div>
            </div>

            <!-- Копирайт -->
            <div class="text-xs text-[#67747F]">
              <p class="copyright">{{ copyright }}</p>
            </div>
          </div>

          <!-- Разработка -->
          <div class="flex flex-col gap-1">
            <p class="text-sm text-white">{{ developerText }}</p>
            <img
              :src="developerLogoPath"
              :alt="developerName"
              class="max-w-[150px]"
            />
          </div>
        </div>
        <div class="w-4/5 grid grid-cols-3 gap-x-4 gap-y-20">
          <!-- Меню сайта -->
          <div v-for="submenu in menu" class="flex flex-col">
            <h3 class="text-[18px] font-bold text-white mb-4">
              {{ submenu.title }}
            </h3>
            <div class="flex gap-4">
              <ul
                v-for="sub in submenu.items"
                class="flex flex-col flex-1 gap-4"
              >
                <li v-for="item in sub" :key="item.id">
                  <a
                    :href="item.url"
                    class="flex items-start text-white text-xs hover:text-main"
                  >
                    <div
                      class="w-1 h-1 bg-main mt-1 mr-2 flex-shrink-0 rounded"
                    ></div>
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full py-4 border-t border-[#ebebeb] opacity-20"></div>
      <div class="w-full">
        <div class="flex gap-4">
          <p class="text-xs text-[#67747F]">{{ legalText }}</p>
          <div class="flex gap-4 p-4">
            <a
              v-for="link in legalLinks"
              :key="link.id"
              :href="link.url"
              class="text-white hover:text-main"
              >{{ link.text }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      legalText:
        "ПРАВОВАЯ ИНФОРМАЦИЯ. Hypertherm®, Powermax®, HyPerformance®, HPR® – зарегистрированные торговые марки компании Hypertherm, Inc. Все торговые марки, приведенные на сайте, являются собственностью соответствующих компаний, и упоминаются исключительно для справок. Компания Plasma Laser никоим образом не связана с вышеназванным производителем и зарегистрированными им товарными знаками.",
      legalLinks: [
        { id: 1, text: "Оферта", url: "#" },
        { id: 2, text: "Конфиденциальность", url: "#" },
      ],
      contacts: [
        {
          icons: ["whatsapp", "phone"],
          iconAlt: "Телефон",
          type: "a",
          href: "tel:+79046422101",
          text: "+7(904)-642-21-01",
        },
        {
          icons: ["email"],
          iconAlt: "Email",
          type: "a",
          href: "mailto:n_yatsko@bk.ru",
          text: "n_yatsko@bk.ru",
        },
        {
          icons: ["location"],
          iconAlt: "Адрес",
          type: "address",
          text: "г. Санкт-Петербург, пр.Королева, д. 22 корп 1",
        },
      ],
      paymentTitle: "Принимаем к оплате",
      paymentMethods: [
        { id: 1, name: "MasterCard", icon: "mastercard" },
        { id: 2, name: "Visa", icon: "visa" },
        { id: 3, name: "МИР", icon: "mir" },
      ],
      copyright: "© 2023 «PlasmaLaser». Все права защищены.",
      developerText: "Разработка сайта",
      developerLogoPath: "/images/Developer.svg",
      developerName: "Markitties - Digital агентство полного цикла",

      menu: [
        {
          title: "Меню сайта",
          items: [
            [
              { id: 1, text: "Оплата и доставка", url: "#" },
              { id: 2, text: "О нас", url: "#" },
              { id: 3, text: "Услуги", url: "#" },
              { id: 4, text: "Каталог", url: "#" },
              { id: 5, text: "Блог", url: "#" },
              { id: 6, text: "FAQ", url: "#" },
              { id: 7, text: "Отзывы", url: "#" },
              { id: 8, text: "Контакты", url: "#" },
            ],
          ],
        },
        {
          title: "Плазменная резка",
          items: [
            [
              { id: 1, text: "HYPER", url: "#" },
              { id: 2, text: "Thermal Dynamics", url: "#" },
              { id: 3, text: "Lincoln Electric", url: "#" },
              { id: 4, text: "Kjellberg", url: "#" },
              { id: 5, text: "ESAB", url: "#" },
              { id: 6, text: "Trafimet", url: "#" },
              { id: 7, text: "Плазматроны и кабели к резакам", url: "#" },
            ],
            [
              { id: 8, text: "CEBORA", url: "#" },
              { id: 9, text: "AJAN", url: "#" },
              { id: 10, text: "Сварог", url: "#" },
              { id: 11, text: "XF", url: "#" },
              { id: 12, text: "CUT 300 / CUT 400", url: "#" },
              { id: 13, text: "YGX", url: "#" },
              { id: 14, text: "ST120 (STM120)", url: "#" },
              { id: 15, text: "YK", url: "#" },
            ],
          ],
        },
        {
          title: "Лазерная резка",
          items: [
            [
              { id: 1, text: "Bystronic", url: "#" },
              { id: 2, text: "Precetec", url: "#" },
              { id: 3, text: "Trumpf", url: "#" },
              { id: 4, text: "Средства очистки оптики, аксессуары", url: "#" },
              { id: 5, text: "Защитные стекла и линзы", url: "#" },
            ],
            [
              { id: 6, text: "AMADA", url: "#" },
              { id: 7, text: "Raytools", url: "#" },
              { id: 8, text: "HANKWANG", url: "#" },
              { id: 9, text: "Очки", url: "#" },
              { id: 10, text: "Hans laser", url: "#" },
            ],
          ],
        },
        {
          title: "Газовая резка",
          items: [
            [
              { id: 1, text: "Harris", url: "#" },
              { id: 2, text: "KOIKE", url: "#" },
              { id: 3, text: "Messer", url: "#" },
              { id: 4, text: "G03", url: "#" },
              { id: 5, text: "ESAB", url: "#" },
            ],
            [
              { id: 6, text: "PNME", url: "#" },
              { id: 7, text: "GKZ", url: "#" },
              { id: 8, text: "TANAKA", url: "#" },
              { id: 9, text: "GCE", url: "#" },
              { id: 10, text: "TECNA", url: "#" },
            ],
          ],
        },
        {
          title: "Расходные материалы для сварки",
          items: [
            [
              { id: 1, text: "Расходные материалы для сварки", url: "#" },
              {
                id: 2,
                text: "Наконечники для автоматической сварки (тракторов)",
                url: "#",
              },
              { id: 3, text: "TECNA", url: "#" },
              { id: 4, text: "Fronius", url: "#" },
              { id: 5, text: "Abicor Binzel", url: "#" },
              {
                id: 6,
                text: "Наконечники (Abicor, fronius, kempi, esab, panasonic и др.)",
                url: "#",
              },
              { id: 7, text: "Сварочные горелки Abicor", url: "#" },
              { id: 8, text: "Сварочные горелки Fronius", url: "#" },
              { id: 9, text: "Газовые сопла (Abicor, fronius)", url: "#" },
            ],
          ],
        },
        {
          title: "Гидроабразивная резка",
          items: [
            [
              { id: 1, text: "Фокусные трубки", url: "#" },
              { id: 2, text: "Гранатовый песок", url: "#" },
              { id: 3, text: "Рубиновые сопла", url: "#" },
            ],
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
