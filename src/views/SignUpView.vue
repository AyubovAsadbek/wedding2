<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import InputOtp from "primevue/inputotp";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  components: { Icon, RouterLink, InputOtp },
  setup() {
    const step = ref("phoneInput");
    const phoneNumber = ref("");
    const otpCode = ref("");
    const name = ref("");
    const lastName = ref("");
    const isLoading = ref(false);
    const errorMessage = ref("");
    const authStore = useAuthStore();

    const sendOtp = async () => {
      if (phoneNumber.value.length !== 9) {
        errorMessage.value = "Phone number must be 9 digits.";
        return;
      }

      try {
        isLoading.value = true;
        errorMessage.value = "";
        await authStore.sendOtp(`998${phoneNumber.value}`);
        step.value = "verifyOtp";
      } catch (error) {
        errorMessage.value = "Failed to send OTP. Please try again.";
      } finally {
        isLoading.value = false;
      }
    };

    // Verify OTP
    const verifyOtp = async () => {
      if (otpCode.value.length !== 6) {
        errorMessage.value = "OTP must be 6 digits.";
        return;
      }

      try {
        isLoading.value = true;
        errorMessage.value = "";
        await authStore.verifyOtp(otpCode.value);
        step.value = "registration";
      } catch (error) {
        errorMessage.value = "Invalid OTP. Please try again.";
      } finally {
        isLoading.value = false;
      }
    };

    // Register User
    const registerUser = async () => {
      if (!name.value || !lastName.value) {
        errorMessage.value = "Name and last name are required.";
        return;
      }

      try {
        isLoading.value = true;
        errorMessage.value = "";
        await authStore.registerUser(name.value, lastName.value);

        if (authStore.isAuthenticated) {
          window.location.href = "http://weddinguz-dashboard.netlify.app";
        }
      } catch (error) {
        errorMessage.value = "Failed to register. Please try again.";
      } finally {
        isLoading.value = false;
      }
    };

    return {
      step,
      phoneNumber,
      otpCode,
      name,
      lastName,
      isLoading,
      errorMessage,
      sendOtp,
      verifyOtp,
      registerUser,
    };
  },
});
</script>

<template>
  <section
    class="relative bg-[#88A8BF] w-full min-h-screen flex items-center justify-center p-5"
  >
    <div class="flex rounded-2xl bg-White">
      <div class="flex flex-col gap-4 items-center justify-center p-6">
        <!-- Step: Enter Phone Number -->
        <div v-if="step === 'phoneInput'" class="flex flex-col gap-5">
          <div class="flex flex-col text-center">
            <h1 class="text-2xl font-semibold">Explore Web</h1>
            <p class="text-sm">
              Now your finances are in one place <br />
              and always under control
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="tel"
              class="flex bg-inherit border-2 border-gray-300 w-[275px] text-Dark items-center p-3 gap-2 rounded-lg"
            >
              <span>+998</span>
              <input
                id="tel"
                type="tel"
                v-model="phoneNumber"
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
              <Icon icon="ic:baseline-phone" class="text-xl" /> Send Code
            </button>
          </div>
          <p v-if="errorMessage" class="text-red-500 text-sm">
            {{ errorMessage }}
          </p>
        </div>

        <!-- Step: Verify OTP -->
        <div v-if="step === 'verifyOtp'" class="flex flex-col gap-10">
          <h1 class="text-2xl font-semibold text-center">Verify OTP</h1>
          <div class="flex flex-col gap-2">
            <InputOtp
              :length="6"
              class="!border-Red"
              v-model="otpCode"
              integerOnly
            />
            <button
              @click="verifyOtp"
              :disabled="isLoading"
              class="px-[20px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white hover:bg-white hover:text-Red flex justify-center items-center gap-2"
            >
              Verify Code
            </button>
          </div>
          <p v-if="errorMessage" class="text-red-500 text-sm">
            {{ errorMessage }}
          </p>
        </div>

        <!-- Step: Register -->
        <div v-if="step === 'registration'" class="flex flex-col gap-10">
          <h1 class="text-2xl font-semibold text-center">Create Account</h1>
          <div class="flex flex-col gap-2">
            <input
              v-model="name"
              class="p-2 border-2 border-gray-300 rounded-lg"
              placeholder="Enter Name"
            />
            <input
              v-model="lastName"
              class="p-2 border-2 border-gray-300 rounded-lg"
              placeholder="Enter Last Name"
            />
            <button
              @click="registerUser"
              :disabled="isLoading"
              class="px-[20px] shadow-md shadow-Red py-[10px] rounded-md border-Red border-2 bg-Red text-white hover:bg-white hover:text-Red flex justify-center items-center gap-2"
            >
              Register
            </button>
          </div>
          <p v-if="errorMessage" class="text-red-500 text-sm">
            {{ errorMessage }}
          </p>
        </div>

        <div>
          <p class="text-sm text-center">
            Already have an account?
            <RouterLink to="/signIn" class="hover:text-Red font-semibold"
              >Log in</RouterLink
            >
          </p>
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
  height: calc(100vh - 56px);
  background-image: url("/BackgoundEllipse.png");
  background-size: auto 100%;
}
</style>
