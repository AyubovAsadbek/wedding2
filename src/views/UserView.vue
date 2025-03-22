<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import Divider from "primevue/divider";
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  components: { Icon, Divider, CardComponent },
  data() {
    return {};
  },
  methods: {},
});
</script>

<template>
  <section
    class="flex flex-col lg:!mt-[-200px] lg:flex-row gap-[50px] px-[5%] py-[50px] justify-center lg:justify-between items-center md:min-h-screen md:my-[-100px]"
  >
    <div
      class="flex flex-col gap-4 justify-center lg:justify-between md:min-h-[40vh]"
    >
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
            Загрузить
            <Icon icon="material-symbols:download" class="text-2xl" />
          </button>
        </a>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <div
        class="flex p-5 bg-DarkRed w-full max-w-[550px] sm:h-[250px] rounded-xl text-white justify-between overflow-hidden text-start"
      >
        <div class="w-[50%] flex flex-col gap-5 justify-between">
          <img class="max-w-[100px]" src="/white-logo.svg" alt="" />
          <div class="flex flex-col gap-2">
            <h1 class="text-xl font-semibold">Свадьба</h1>
            <p class="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
          <p class="text-[7px]">
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div
          class="relative w-[30%] flex flex-col gap-2 justify-between items-end"
        >
          <img
            class="-bottom-5 -right-5 absolute w-[200px] max-w-[none]"
            src="/card/Clip path group.png"
            alt=""
          />
          <div></div>
          <img class="w-[100px]" src="/card/whiteQR.png" alt="" />
          <p class="text-[8px]">14 5151 843451 51541</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Video -->
  <section class="px-[5%]">
    <div class="rounded-xl overflow-hidden">
      <iframe
        width="100%"
        class="sm:h-[508px] h-[250px]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YImYagfuR9Iu5lBv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </section>

  <!-- Contacts -->
  <section class="px-[5%] py-[50px]">
    <!-- <div
      class="flex lg:flex-rowborder-[1px] border-[1px] border-Dark rounded-xl justify-center"
    >
      <div
        class="flex flex-col justify-between gap-5 p-2 sm:p-[35px] w-1/2 items-start"
      >
        <Icon icon="cil:phone" class="sm:text-8xl text-5xl text-Red" />
        <p class="text-lg font-medium">Номер телефона</p>
        <p class="text-sm">+998 90 123 45 67</p>
        <button
          type="button"
          class="flex gap-2 items-center px-[20px] py-[10px] rounded-md border-DarkRed border-2 bg-Red text-white hover:bg-white hover:text-DarkRed"
        >
          <Icon icon="cil:phone" class="text-xl" /> Позвонить
        </button>
      </div>

      <Divider layout="vertical" class="text-black" />

      <div class="flex flex-col gap-5 sm:p-[35px] w-1/2 items-start">
        <Icon icon="pajamas:location" class="sm:text-8xl text-5xl text-Red" />
        <p class="text-lg font-medium">Локация</p>
        <p class="text-sm">Toshkent sh. Alisher Navoi 62-a</p>
        <p class="flex items-center text-lg gap-3 text-Red">
          <Icon icon="pajamas:location" class="text-xl" /> Позвонить
        </p>
      </div>
    </div> -->
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

  <!-- comments -->
  <section class="px-[5%] py-[50px] flex flex-col gap-[50px] mb-[150px]">
    <div class="bg-white p-5 md:p-10 rounded-xl flex flex-col gap-5">
      <p class="font-medium text-lg">Отправьте свои пожелания</p>
      <div class="flex flex-col md:flex-row gap-5 w-full">
        <div
          class="p-5 bg-LightRed w-full md:min-w-[300px] md:w-[30%] h-[300px] rounded-3xl text-2xl text-Dark flex items-center justify-center gap-2"
        >
          <Icon icon="mage:stars-a" />
          <Icon icon="lucide:mail" />
          <Icon icon="mdi:heart-outline" />
        </div>

        <div
          class="flex flex-col gap-5 items-end md:items-start w-full md:w-[70%]"
        >
          <div class="flex gap-5 flex-col md:flex-row w-full">
            <input
              type="text"
              class="bg-Light border-2 focus:border-Red text-Dark outline-none p-3 rounded-2xl md:w-1/2"
              placeholder="Имя"
            />
            <input
              type="text"
              class="bg-Light border-2 focus:border-Red text-Dark outline-none p-3 rounded-2xl md:w-1/2"
              placeholder="Имя"
            />
          </div>

          <div class="w-full">
            <textarea
              name=""
              id=""
              class="bg-Light text-Dark border-2 focus:border-Red outline-none p-3 rounded-2xl w-full"
              rows="5"
              placeholder="Имя"
            />
          </div>

          <button
            type="button"
            class="flex gap-2 items-center px-[20px] py-[10px] rounded-md border-DarkRed border-2 bg-Red text-white hover:bg-white hover:text-DarkRed"
          >
            <Icon icon="mdi:stars-outline" class="text-xl" /> Отправлять
          </button>
        </div>
      </div>
    </div>

    <div
      class="bg-white p-5 md:p-10 rounded-xl flex flex-col-reverse md:flex-row gap-5"
    >
      <div
        class="w-full md:w-[60%] flex flex-col gap-5 items-end md:items-start justify-between"
      >
        <p class="text-sm">
          <span class="text-lg font-medium">“Туяна”</span> <br />Выразить
          поддержку молодоженам через денежный вклад
        </p>
        <button
          type="button"
          class="flex gap-2 items-center px-[20px] py-[10px] rounded-md border-DarkRed border-2 bg-Red text-white hover:bg-white hover:text-DarkRed"
        >
          <Icon icon="mdi:stars-outline" class="text-xl" /> Отправить поддержку
        </button>
      </div>

      <div
        class="p-5 bg-LightRed w-full md:min-w-[300px] md:w-[40%] h-[200px] rounded-3xl text-2xl text-Dark flex items-center justify-center gap-2"
      >
        <Icon icon="lucide:mail" />
        <Icon icon="nimbus:money" />
        <Icon icon="mdi:heart-outline" />
      </div>
    </div>
  </section>
</template>
