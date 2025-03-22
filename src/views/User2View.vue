<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import Divider from "primevue/divider";
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  components: { Icon, Divider, CardComponent },
  data() {
    return {
      comments: [
        {
          name: "User Name",
          username: "Lorem ipsum dolor sit amet",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
      cardMainText: "Welcome to Wedding! We really like your presents!",
      cardSubText:
        "We really like your presents! We really like your presents!",
    };
  },
  methods: {},
});
</script>

<template>
  <section
    class="flex flex-col lg:!mt-[-200px] lg:flex-row gap-[50px] px-[5%] py-[50px] justify-between items-center md:min-h-screen md:my-[-100px]"
  >
    <div class="flex flex-col gap-4 justify-between md:min-h-[40vh]">
      <div class="flex flex-col gap-4">
        <p>Онлайн пригласительное</p>
        <h1 class="text-5xl">
          Вы были приглашены на <br />
          <span class="text-Red flex items-end gap-2">
            Свадьбу
            <Icon class="text-3xl" icon="mdi:heart-outline" />
          </span>
        </h1>
      </div>

      <div class="flex flex-col gap-3 items-start">
        <p class="flex gap-3 items-center text-Grey">
          <Icon icon="gg:mouse" /> Вниз для больше информации
        </p>
        <a
          href=""
          download="https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf"
        >
          <button
            type="button"
            class="flex gap-2 items-center px-[20px] py-[10px] rounded-md border-DarkRed border-2 bg-Red text-white hover:bg-white hover:text-DarkRed"
          >
            Скачать пригласительную
            <Icon icon="material-symbols:download" class="text-2xl" />
          </button>
        </a>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <CardComponent
        mode="light"
        :mainText="{ cardMainText }"
        :subText="{ cardSubText }"
      >
      </CardComponent>
    </div>
  </section>

  <!-- Contacts -->
  <section class="px-[5%] py-[50px]">
    <div
      class="flex flex-col lg:flex-row border-[1px] border-blue rounded-xl justify-center"
    >
      <!-- Phone section -->
      <div
        class="flex flex-col justify-between gap-5 p-4 sm:p-[35px] w-full lg:w-1/2 items-center md:items-start"
      >
        <Icon icon="cil:phone" class="sm:text-6xl text-5xl text-Red" />

        <p class="text-lg font-medium">Номер телефона</p>
        <p class="text-sm">+998 90 123 45 67</p>
        <button
          type="button"
          class="flex gap-2 items-center px-[20px] py-[10px] rounded-md border-DarkRed border-2 bg-Red text-white hover:bg-white hover:text-DarkRed transition-colors"
        >
          <Icon icon="cil:phone" class="text-xl" /> Позвонить
        </button>
      </div>

      <!-- Divider - vertical on desktop, horizontal on mobile -->
      <div class="hidden lg:block w-px bg-blue"></div>
      <div class="lg:hidden h-px w-full bg-blue mx-auto my-4"></div>

      <!-- Location section -->
      <div
        class="flex flex-col gap-5 p-4 sm:p-[35px] w-full lg:w-1/2 items-center md:items-start"
      >
        <Icon icon="pajamas:location" class="sm:text-6xl text-5xl text-Red" />
        <p class="text-lg font-medium">Локация</p>
        <p class="text-sm">Toshkent sh. Alisher Navoi 62-a</p>
        <p class="flex items-center text-lg gap-3 text-Red">
          <Icon icon="pajamas:location" class="text-xl" /> Показать на карте
        </p>
      </div>
    </div>
  </section>
</template>
