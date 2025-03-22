<script lang="ts">
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import CursoreComponent from "./components/CursoreComponent.vue";
import { defineComponent, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
// import { useRoute, useRouter } from "vue-router";
// import { useAuthStore } from "@/stores/auth";
import { Icon } from "@iconify/vue";

export default defineComponent({
  components: { Icon, NavbarComponent, FooterComponent, CursoreComponent },
  setup() {
    const route = useRoute();
    // const router = useRouter();
    // const authStore = useAuthStore();

    const hideNavAndFooter = computed(() => {
      return route.path === "/signIn" || route.path === "/signUp";
    });
    onMounted(async () => {
      const token = "21|jiqhLBDypQkSfdpNto4MGQSK8gpR8Ih3Jbv9bDDh70f46404";
      localStorage.setItem("auth_token", token as string);

      // if (token) {
      //   try {
      //     await authStore.checkAuthentication();

      //     if (!authStore.isAuthenticated) {
      //       router.push("/signIn");
      //     }
      //   } catch (error) {
      //     console.error("Error during authentication check:", error);
      //     router.push("/signIn");
      //   }
      // } else {
      //   if (route.path !== "/signIn" && route.path !== "/signUp") {
      //     router.push("/signIn");
      //   }
      // }
    });

    return {
      hideNavAndFooter,
    };
  },
});
</script>

<template>
  <CursoreComponent />
  <div class="bg-[#F4F9FB] font-light overflow-hidden">
    <NavbarComponent v-if="!hideNavAndFooter" />
    <div class="min-h-[calc(100vh-120px)]">
      <RouterView />
    </div>
    <FooterComponent v-if="!hideNavAndFooter" />
  </div>
</template>
