<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import InputOtp from "primevue/inputotp";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  components: { Icon, InputOtp },
  data() {
    return {
      phone_num: "",
      code: "",
      code_sent: false,
      isLoading: false,
      errorMessage: "",
    };
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    return { authStore, router };
  },
  methods: {
    async sendOtp() {
      if (this.phone_num.length !== 9) {
        this.errorMessage = "Phone number must be 9 digits.";
        return;
      }

      try {
        this.isLoading = true;
        this.errorMessage = "";
        await this.authStore.sendOtp(`998${this.phone_num}`);
        this.code_sent = true;
      } catch (error) {
        this.errorMessage = "Failed to send OTP. Please try again.";
      } finally {
        this.isLoading = false;
      }
    },

    async verifyOtp() {
      if (this.code.length !== 6) {
        this.errorMessage = "OTP must be 6 digits.";
        return;
      }

      try {
        this.isLoading = true;
        this.errorMessage = "";
        await this.authStore.verifyOtp(this.code);
        await this.authStore.loginUser(this.phone_num);
      } catch (error) {
        this.errorMessage = "Invalid OTP. Please try again.";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<template>
  <section
    class="relative bg-[#88A8BF] w-full flex items-center justify-center"
  >
    <div class="flex w-[85%] md:w-auto rounded-2xl bg-White">
      <div class="flex items-center justify-center p-6">
        <div class="flex flex-col gap-5">
          <!-- Step 1: Enter Phone Number -->
          <div class="flex flex-col gap-2 text-center" v-if="!code_sent">
            <h1 class="text-2xl font-semibold">Login</h1>
            <p class="w-full text-sm">
              Enter your phone number to receive a login code
            </p>
            <label
              for="tel"
              class="flex w-full bg-inherit border-2 border-gray-300 text-Dark items-center p-3 gap-2 rounded-lg"
            >
              <span>+998</span>
              <input
                id="tel"
                type="tel"
                v-model="phone_num"
                maxlength="9"
                class="bg-inherit text-Dark !outline-none rounded-lg"
                placeholder="99-999-99-99"
              />
            </label>
            <button
              @click="sendOtp"
              :disabled="isLoading"
              class="px-[20px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white hover:bg-white hover:text-Red flex justify-center items-center gap-2"
            >
              Send Code
            </button>
            <p v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </p>
          </div>

          <!-- Step 2: Enter OTP -->
          <div
            v-if="code_sent"
            class="text-center flex flex-col items-center gap-5"
          >
            <h1 class="text-2xl font-semibold">Enter Code</h1>
            <p class="w-80 text-sm">
              We’ve sent an SMS with a login code to your phone +998{{
                phone_num
              }}
            </p>
            <InputOtp
              :length="6"
              class="!border-Red"
              v-model="code"
              integerOnly
            />
            <button
              @click="verifyOtp"
              :disabled="isLoading"
              class="px-[20px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white hover:bg-white hover:text-Red flex justify-center items-center gap-2"
            >
              Verify Code
            </button>
            <p v-if="errorMessage" class="text-red-500 text-sm">
              {{ errorMessage }}
            </p>
          </div>

          <!-- Link to Sign Up -->
          <div>
            <p class="text-sm text-center">
              Don't have an account?
              <RouterLink to="/signUp" class="hover:text-Red font-semibold"
                >Sign up</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
      <div class="hidden md:flex items-center justify-center p-6">
        <div class="bg-Light p-10 rounded-xl flex h-full items-center">
          <img src="/Logo.svg" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: calc(100vh);
  background-image: url("/BackgoundEllipse.png");
  background-size: auto 100%;
}
</style>
