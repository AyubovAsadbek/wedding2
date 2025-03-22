<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  components: { Icon, RouterLink },
  data() {
    return {
      isOpen: false,
      links: [
        { label: "О нас", to: "/faq" },
        { label: "Статистика", to: "/user" },
        { label: "Тарифы", to: "/user2" },
        { label: "Контакты", to: "/contacts" },
      ],
      isAuthenticated: useAuthStore.isAuthenticated,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        window.scrollTo({ top: 0 });
      }
    },
    logOut() {
      useAuthStore.isAuthenticated = false;
    },
  },
});
</script>

<template>
  <nav
    :class="[
      'w-full flex items-center justify-between px-5 py-6 lg:px-[5%] top-0 z-40 bg-white',
      isOpen ? 'fixed ' : 'relative',
    ]"
    aria-label="Global"
  >
    <div class="flex w-[300px]">
      <RouterLink @click="isOpen = false" to="/" class="-m-1.5 p-1.5">
        <img src="/Logo.svg" alt="Logo" class="w-[150px]" />
      </RouterLink>
    </div>

    <div
      :class="[
        'fixed px-5 lg:static top-[70px]  lg:top-0 w-full lg:w-2/3 h-[100vh] lg:h-auto z-20 flex flex-col lg:flex-row lg:items-center bg-white lg:bg-light transition-all duration-500 gap-20 justify-between pb-40 lg:pb-0',
        isOpen ? 'left-0' : 'left-[-100%]',
      ]"
    >
      <div
        class="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 font-medium"
      >
        <RouterLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          @click="isOpen = false"
          class="text-left lg:text-center w-full p-2 rounded-md transition-all duration-300 hover:bg-Red hover:text-white"
          active-class="bg-Red text-white"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <div
        class="flex flex-col lg:flex-row gap-6 lg:items-center font-medium mt-[40%] lg:m-0"
      >
        <template v-if="!isAuthenticated">
          <RouterLink to="/signIn" class="hover:text-Red w-full text-center">
            Вход
          </RouterLink>
          <RouterLink to="/signUp">
            <button
              class="w-full px-5 py-2 border-2 border-Red bg-Red text-white rounded-md transition-all duration-300 hover:bg-white hover:text-Red"
            >
              Регистрация
            </button>
          </RouterLink>
        </template>
        <template v-else>
          <button
            @click="logOut"
            class="w-full px-5 py-2 border-2 border-Red bg-Red text-white rounded-md transition-all duration-300 hover:bg-white hover:text-Red"
          >
            Выйти
          </button>
        </template>
      </div>
    </div>

    <button
      @click="toggleSidebar"
      class="lg:hidden z-50 bg-Red text-white px-4 py-2 rounded-md"
    >
      <Icon icon="quill:hamburger-sidebar" class="text-xl" />
    </button>
  </nav>
</template>
