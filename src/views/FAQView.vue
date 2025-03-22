<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

export default defineComponent({
  components: {
    Icon,
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
  },
  data() {
    return {
      tabs: [
        { title: "Вопрос: Как создать аккаунт?", content: "Content 1" },
        {
          title: "Вопрос: Как добавить гостей на свадьбу?",
          content: "Content 2",
        },
        {
          title: "Title 3Вопрос: Как отправить приглашения гостям?",
          content: "Content 3",
        },
        {
          title: "Вопрос: Как генерировать QR-коды для гостей?",
          content: "Content 4",
        },
      ],
    };
  },
  methods: {},
});
</script>

<template>
  <!-- FAQ section -->
  <section class="flex flex-col gap-[50px] px-[5%] py-[50px]">
    <div class="flex flex-col gap-5 items-start text-center md:text-left">
      <div
        class="flex justify-center items-center gap-1 px-5 py-1 bg-Red text-white rounded-2xl"
      >
        <Icon class="text-xl" icon="mdi:heart-outline" /> Вопросы
      </div>
      <div class="text-Dark text-4xl leading-snug font-light">
        Что бы нам <span class="text-Red">довериться</span> <br />
        вам нужно знать как это работает
      </div>
      <div class="text-lg font-extralight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-[25px]">
      <div class="flex flex-col gap-4 w-full md:w-[400px]">
        <h1 class="text-xl font-medium text-Red">Категории:</h1>
        <div class="flex flex-col gap-2">
          <p class="cursor-pointer hover:text-DarkRed">Аккаунт и регистрация</p>
          <p class="cursor-pointer hover:text-DarkRed">Управление гостями</p>
          <p class="cursor-pointer hover:text-DarkRed">Приглашения и QR-коды</p>
          <p class="cursor-pointer hover:text-DarkRed">
            Тарифные планы и подписка
          </p>
          <p class="cursor-pointer hover:text-DarkRed">Технические вопросы</p>
          <p class="cursor-pointer hover:text-DarkRed">Связь c поддержкой</p>
        </div>
      </div>

      <div class="card w-full">
        <Accordion value="0">
          <AccordionPanel
            class="YEAP w-full mb-[50px] bg-white !border-[1px] !border-Red rounded-md overflow-hidden"
            v-for="(tab, index) in tabs"
            :key="tab.title"
            :value="index"
          >
            <AccordionHeader>{{ index + 1 }}. {{ tab.title }}</AccordionHeader>
            <AccordionContent>
              <p class="m-0">{{ tab.content }}</p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </section>
</template>
