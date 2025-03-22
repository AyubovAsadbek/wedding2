<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

import Divider from "primevue/divider";

export default defineComponent({
  components: { Icon, Divider },
  data() {
    return {};
  },
  methods: {},
});
</script>

<template>
  <footer
    class="w-full bg-white flex flex-col gap-5 py-[50px] px-[5%] text-Grey"
    aria-label="Global"
  >
    <div class="flex flex-col md:flex-row w-full gap-10">
      <div class="flex flex-col gap-3 md:w-[50%]">
        <RouterLink to="/" class="-m-1.5 p-1.5 cursor-pointer mb-3">
          <img class="w-[150px]" src="/Logo.svg" alt="" />
        </RouterLink>
        <a href="" class="flex gap-2 hover:text-Red"
          ><Icon class="text-2xl" icon="hugeicons:instagram" />
          @wedding_official</a
        >
        <a href="" class="flex gap-2 items-center hover:text-Red"
          ><Icon class="text-2xl" icon="mingcute:telegram-fill" />
          @wedding_telegram</a
        >
      </div>

      <div class="flex flex-col gap-5 md:w-1/2 text-base font-base">
        <RouterLink to="/" class="leading-6 cursor-pointer hover:text-Red"
          >O нас</RouterLink
        >
        <RouterLink to="/" class="leading-6 cursor-pointer hover:text-Red"
          >Статистика</RouterLink
        >
        <RouterLink to="/" class="leading-6 cursor-pointer hover:text-Red"
          >Тарифы</RouterLink
        >
        <RouterLink to="/" class="leading-6 cursor-pointer hover:text-Red"
          >Контакты</RouterLink
        >
        <RouterLink to="/" class="leading-6 cursor-pointer hover:text-Red"
          >Часто задаваемые вопросы</RouterLink
        >
      </div>
    </div>
    <Divider />
    <div
      class="text-sm flex flex-col lg:flex-row text-center lg:text-left justify-between w-full font-semibold"
    >
      <p>© 2024 Wedding Invites. Все права защищены.</p>
      <p>Политика конфиденциальности, Условия использования</p>
    </div>
  </footer>
</template>
