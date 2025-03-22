import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "@/views/UserView.vue";
import FAQView from "../views/FAQView.vue";
import NotFound404View from "@/views/NotFound404View.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import User2View from "@/views/User2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/FAQ",
      name: "faq",
      component: FAQView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
    {
      path: "/user2",
      name: "user2",
      component: User2View,
    },
    {
      path: "/signIn",
      name: "signIn",
      component: SignInView,
    },
    {
      path: "/signUp",
      name: "signUUp",
      component: SignUpView,
    },
    {
      path: "/404",
      name: "404",
      component: NotFound404View,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
