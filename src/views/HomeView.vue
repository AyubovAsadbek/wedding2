<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import Textarea from "primevue/textarea";
import "vue3-carousel/dist/carousel.css";
import CardComponent from "@/components/CardComponent.vue";
import MarqueeCards from "@/components/MarqueeCards.vue";

export default defineComponent({
  components: {
    Icon,
    Carousel,
    Avatar,
    Navigation,
    Slide,
    Divider,
    Pagination,
    Textarea,
    CardComponent,
    MarqueeCards,
  },
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
  methods: {
    checkAndRedirect() {
      let token = localStorage.getItem("auth_token");
      const router = useRouter();
      if (token == null) {
        router.push("/login");
      } else {
        router.push("/");
      }
    },
  },
});
</script>

<template>
  <section
    class="relative flex flex-col gap-[25px] px-[10%] py-[150px] w-full justify-center items-center text-white overflow-hidden"
  >
    <!-- Video Background -->
    <video
      class="scale-125 absolute top-0 left-0 md:w-full !h-full object-cover"
      autoplay
      muted
      loop
    >
      <source src="/video.mp4" type="video/mp4" class="!h-full" />
      Your browser does not support the video tag.
    </video>

    <!-- Content -->
    <div class="relative text-lg text-center lg:text-left">
      <p>Устали раздовать брашюрки на вашу свадьбу?</p>
    </div>

    <div
      class="relative text-center text-3xl md:text-5xl lg:text-7xl leading-snug"
    >
      <h1>
        На дворе 21 век! <br />
        <span class="text-Red">Раздайте цифровые брошюрки</span>
      </h1>
    </div>

    <div class="relative mt-[20px]">
      <button
        @click="checkAndRedirect"
        class="px-[20px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white hover:bg-white hover:text-Red flex justify-center items-center gap-2"
      >
        <Icon icon="icon-park-outline:shopping" /> Заказать сейчас
      </button>
    </div>
  </section>

  <!-- image slider Section -->
  <!-- <Carousel
    :itemsToShow="1"
    :breakpoints="{
      768: { itemsToShow: 1.2 },
      1200: { itemsToShow: 3.4 },
    }"
    :wrap-around="true"
    :autoplay="2000"
    class="-mt-20"
  >
    <Slide class="flex gap-[50px]" v-for="slide in 10" :key="slide">
      <div v-if="slide % 2 == 1" class="carousel__item">
        <CardComponent
          mode="dark"
          :mainText="{ cardMainText }"
          :subText="{ cardSubText }"
        ></CardComponent>
      </div>
      <div v-else class="carousel__item">
        <CardComponent
          mode="dark"
          :mainText="{ cardMainText }"
          :subText="{ cardSubText }"
        ></CardComponent>
      </div>
    </Slide>
  </Carousel>

  <Carousel
    :itemsToShow="1"
    :breakpoints="{
      768: { itemsToShow: 2 },
      1200: { itemsToShow: 3.4 },
    }"
    :wrap-around="true"
    :autoplay="3000"
  >
    <Slide class="flex gap-[50px]" v-for="slide in 10" :key="slide">
      <div v-if="slide % 2 == 1" class="carousel__item">
        <CardComponent
          mode="dark"
          :mainText="{ cardMainText }"
          :subText="{ cardSubText }"
        ></CardComponent>
      </div>
      <div v-else class="carousel__item">
        <CardComponent
          mode="dark"
          :mainText="{ cardMainText }"
          :subText="{ cardSubText }"
        ></CardComponent>
      </div>
    </Slide>
  </Carousel> -->

  <MarqueeCards className="-mt-10 sm:-mt-20 " />
  <MarqueeCards className="mt-[18px] sm:mt-[30px] pl-[112px] sm:pl-[186px]" />

  <!-- Trust Section -->
  <section class="flex flex-col gap-[50px] px-[5%] py-[50px] text-justify">
    <div class="flex flex-col gap-5 items-start max-w-[600px]">
      <div
        class="flex justify-center items-center gap-1 px-5 py-1 bg-Red text-white rounded-2xl"
      >
        <Icon class="text-xl" icon="mdi:heart-outline" /> Доверье
      </div>
      <div class="text-Dark text-4xl leading-snug">
        Что бы нам <span class="text-Red">довериться</span> вам нужно знать как
        это работает
      </div>
      <div class="text-lg font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row border-[2px] border-Red rounded-3xl gap"
    >
      <div class="flex flex-col gap-5 p-[35px] items-center lg:items-start">
        <div class="text-8xl text-Red">
          <Icon icon="mynaui:cupcake" />
        </div>
        <div class="text-3xl">Создание приглашений:</div>
        <div>
          "Создавайте и отправляйте индивидуальные приглашения своим гостям
          всего за несколько кликов."
        </div>
        <div>
          <button
            @click="checkAndRedirect"
            class="cursor-pointer px-[20px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white hover:bg-white hover:text-Red flex justify-center items-center gap-2"
          >
            <Icon icon="ph:ticket" class="text-2xl font-bold" /> Создайте свое
          </button>
        </div>
      </div>

      <Divider layout="vertical" class="text-Red" />

      <div class="flex flex-col gap-5 p-[35px] items-center lg:items-start">
        <div class="text-8xl text-Red">
          <Icon icon="tabler:users-group" />
        </div>
        <div class="text-3xl">Добавьте гостей:</div>
        <div>
          "Создавайте и отправляйте индивидуальные приглашения своим гостям
          всего за несколько кликов."
        </div>
        <div>
          <button
            @click="checkAndRedirect"
            class="cursor-pointer px-[20px] py-[10px] rounded-md text-Red flex justify-center items-center gap-2 font-semibold"
          >
            <Icon
              icon="icon-park-outline:shopping"
              class="text-2xl font-bold"
            />
            Создайте свое
          </button>
        </div>
      </div>
    </div>

    <div>
      <div
        class="flex flex-col lg:flex-row border-[2px] border-Red rounded-3xl gap"
      >
        <div class="flex flex-col gap-5 p-[35px] items-center lg:items-start">
          <div class="text-8xl text-Red">
            <Icon icon="ph:planet" />
          </div>
          <div class="text-3xl">Создание приглашений:</div>
          <div>
            "Создавайте и отправляйте индивидуальные приглашения своим гостям
            всего за несколько кликов."
          </div>
        </div>

        <Divider layout="vertical" class="text-Red" />

        <div class="flex flex-col gap-5 p-[35px] items-center lg:items-start">
          <div class="text-8xl text-Red">
            <Icon icon="bi:star" />
          </div>
          <div class="text-3xl">Создание приглашений:</div>
          <div>
            "Создавайте и отправляйте индивидуальные приглашения своим гостям
            всего за несколько кликов."
          </div>
        </div>

        <Divider layout="vertical" class="text-Red" />

        <div class="flex flex-col gap-5 p-[35px] items-center lg:items-start">
          <div class="text-8xl text-Red">
            <Icon icon="ph:ticket" />
          </div>
          <div class="text-3xl">Добавьте гостей:</div>
          <div>
            "Создавайте и отправляйте индивидуальные приглашения своим гостям
            всего за несколько кликов."
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benifit Section -->
  <section
    class="bg-Light flex flex-col gap-[50px] px-[5%] py-[50px] overflow-hidden"
  >
    <div class="flex flex-col gap-5 items-start max-w-[600px]">
      <div
        class="flex justify-center items-center gap-1 px-5 py-1 bg-Red text-white rounded-2xl"
      >
        <Icon class="text-xl" icon="mdi:heart-outline" /> Доверье
      </div>
      <div class="text-Dark text-4xl leading-snug font-light max-w-[400px]">
        Лучшие <span class="text-Red">планы</span> для вашей свадьбы
      </div>
      <div class="text-lg font-extralight">
        После проведения свадьба, через три дня ваша покупка становится
        недействительной.
      </div>
    </div>

    <div class="flex gap-[25px] flex-col lg:flex-row text-center md:text-left">
      <div class="flex flex-col gap-[25px] w-full lg:w-1/2 justify-between">
        <div
          class="flex flex-col lg:flex-row gap-[10px] lg:gap-[30px] bg-white p-[40px] rounded-2xl border-[1px] border-Grey"
        >
          <div class="flex flex-col gap-3">
            <h1 class="text-xl">Стандарт</h1>
            <p class="text-Grey">
              Kickstart your product research in your business at no cost.
            </p>
          </div>

          <div class="hidden md:flex">
            <Divider layout="vertical" class="text-Grey" />
          </div>

          <div class="flex flex-col gap-3 items-center">
            <p class="text-2xl">
              <span class="text-Red text-4xl">$8</span> / месяц
            </p>
            <button
              @click="checkAndRedirect"
              class="px-[20px] w-[200px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white flex justify-center items-center gap-2"
            >
              <Icon icon="icon-park-outline:shopping" /> Lorem ipsum
            </button>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-[30px] bg-white p-[40px] rounded-2xl border-[1px] border-Grey"
        >
          <div class="flex flex-col gap-3">
            <h1 class="text-xl">Бизнес</h1>
            <p class="text-Grey">
              Kickstart your product research in your business at no cost.
            </p>
          </div>

          <div class="hidden md:flex">
            <Divider layout="vertical" class="text-Grey" />
          </div>

          <div class="flex flex-col gap-3 items-center">
            <p class="text-2xl">
              <span class="text-Red text-4xl">$14</span> / месяц
            </p>
            <button
              @click="checkAndRedirect"
              class="px-[20px] w-[200px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white flex justify-center items-center gap-2"
            >
              <Icon icon="icon-park-outline:shopping" /> Lorem ipsum
            </button>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col w-full lg:w-1/2 text-white rounded-3xl overflow-hidden"
      >
        <div class="p-[35px] bg-Red pb-[60px]">
          <div class="flex flex-col gap-[10px]">
            <h1 class="text-3xl">Премиум</h1>
            <p>
              Give your everyday finances a boost. <br />
              Get more out of your money for less.
            </p>
            <div
              class="flex justify-between sm:flex-row items-center flex-col gap-4"
            >
              <p class="text-2xl"><span class="text-6xl">$8</span> / месяц</p>
              <button
                @click="checkAndRedirect"
                class="px-[20px] w-[200px] border-Red border-2 py-[10px] rounded-md bg-white text-black"
              >
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-between gap-[50px] p-[35px] bg-DarkRed">
          <div class="flex flex-col gap-[30px]">
            <p>Unlimited workspace</p>
            <p>Unlimited workspace</p>
          </div>
          <div class="flex flex-col gap-[30px]">
            <p>Unlimited workspace</p>
            <p>Unlimited workspace</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- With Us section -->
  <section class="flex flex-col gap-[50px] px-[5%] py-[50px] items-center">
    <div class="flex flex-col gap-5 max-w-[600px] items-center text-center">
      <div
        class="flex justify-center items-center gap-1 px-5 py-1 bg-Red text-white rounded-2xl"
      >
        <Icon class="text-xl" icon="mdi:heart-outline" /> C нами были
      </div>
      <div class="text-Dark text-4xl leading-snug font-light max-w-[400px]">
        Что говорят <span class="text-Red">про нас</span> наши пользователи?
      </div>
      <div class="text-lg font-extralight">
        После проведения свадьба, через три дня ваша покупка становится
        недействительной.
      </div>
    </div>

    <div class="w-full">
      <Carousel
        :itemsToShow="1"
        :breakpoints="{
          768: { itemsToShow: 2 },
          1200: { itemsToShow: 2.7 },
        }"
        :wrapAround="true"
        :transition="500"
      >
        <Slide v-for="(comment, index) in comments" :key="index">
          <div class="carousel__item cursor-pointer">
            <div
              class="w-full flex flex-col gap-5 border-[1px] border-Red p-10 text-justify rounded-3xl"
            >
              <div class="flex gap-4 text-base">
                <div
                  class="w-[70px] h-[70px] bg-Grey text-white flex items-center justify-center rounded-3xl"
                >
                  P
                </div>
                <div>
                  <p>{{ comment.name }}</p>
                  <p class="text-Grey font-extralight">
                    {{ comment.username }}
                  </p>
                </div>
              </div>
              <div class="font-[300]">{{ comment.comment }}</div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>

  <section class="flex flex-col lg:flex-row gap-[50px] px-[5%] py-[50px]">
    <div class="flex flex-col gap-5 items-start w-full lg:w-1/2">
      <div
        class="flex justify-center items-center gap-1 px-5 py-1 bg-Red text-white rounded-2xl"
      >
        <Icon class="text-xl" icon="mdi:heart-outline" /> C нами были
      </div>
      <div class="text-Dark text-4xl leading-snug">
        Что говорят <span class="text-Red"> про нас</span> наши пользователи?
      </div>
      <div class="text-lg font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <a
        href="mailto:help@gmail.com"
        class="flex w-full justify-between p-[25px] rounded-2xl border-[1px] border-Grey"
      >
        <div class="flex gap-4 items-center justify-center">
          <div
            class="text-3xl w-[50px] h-[50px] bg-Light text-Dark border-[1px] border-Grey flex items-center justify-center rounded-2xl"
          >
            <Icon icon="material-symbols:mail-outline" />
          </div>
          <div>
            <p>You can EMAIL us here</p>
            <p class="font-semibold">help@gmail.com</p>
          </div>
        </div>
        <div
          class="text-3xl w-[50px] h-[50px] bg-Light text-Dark border-[1px] border-Grey flex items-center justify-center rounded-full"
        >
          <Icon icon="iconamoon:arrow-top-right-1" />
        </div>
      </a>

      <a
        href="tel: +998905955902"
        class="flex w-full justify-between p-[25px] rounded-2xl border-[1px] border-Grey"
      >
        <div class="flex gap-4 items-center justify-center">
          <div
            class="text-3xl w-[50px] h-[50px] bg-Light text-Dark border-[1px] border-Grey flex items-center justify-center rounded-2xl"
          >
            <Icon icon="ant-design:phone-outlined" />
          </div>
          <div>
            <p>You can CALL us here</p>
            <p class="font-semibold">+998 90 595 59 02</p>
          </div>
        </div>
        <div
          class="text-3xl w-[50px] h-[50px] bg-Light text-Dark border-[1px] border-Grey flex items-center justify-center rounded-full"
        >
          <Icon icon="iconamoon:arrow-top-right-1" />
        </div>
      </a>
    </div>

    <div
      class="flex flex-col gap-4 items-start w-full lg:w-1/2 p-[35px] border-[1px] border-Grey rounded-3xl"
    >
      <h1 class="text-2xl">
        <span class="text-Red">Оставьте</span> нам ваши <br />
        письма
      </h1>
      <p class="text-Grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempo.
      </p>
      <div class="flex flex-col md:flex-row w-full gap-5">
        <input
          type="text"
          class="bg-gray-200 border-2 focus:border-Red text-Dark outline-none p-3 rounded-2xl md:w-1/2"
          placeholder="Имя"
        />
        <input
          type="text"
          class="bg-gray-200 border-2 focus:border-Red text-Dark outline-none p-3 rounded-2xl md:w-1/2"
          placeholder="Имя"
        />
      </div>

      <textarea
        name=""
        id=""
        class="bg-gray-200 text-Dark border-2 focus:border-Red outline-none p-3 rounded-2xl w-full"
        rows="4"
        placeholder="Имя"
      />

      <button
        @click="checkAndRedirect"
        class="px-[20px] w-full py-[10px] rounded-md border-Red border-2 bg-Red text-white hover:bg-white hover:text-Red flex justify-center items-center gap-2"
      >
        <Icon icon="icon-park-outline:shopping" /> Заказать сейчас
      </button>
    </div>
  </section>
</template>

<style scoped>
.carousel__slide {
  padding: 20px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
