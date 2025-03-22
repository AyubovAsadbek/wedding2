import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

export interface AuthState {
  phoneNumber: string | null;
  otpCode: string | null;
  isAuthenticated: boolean;
  userInfo: { name: string; lastName: string } | null;
  token: string | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    phoneNumber: null,
    otpCode: null,
    isAuthenticated: false,
    userInfo: null,
    token: null,
  }),

  actions: {
    async sendOtp(phoneNumber: string) {
      try {
        await axios.post("https://event-in.online/api/send-otp", {
          phone_number: phoneNumber,
        });
        this.phoneNumber = phoneNumber;
      } catch (error) {
        console.error("Error sending OTP:", error);
        throw new Error("Failed to send OTP.");
      }
    },

    async verifyOtp(code: string): Promise<void> {
      if (!this.phoneNumber) {
        throw new Error("Phone number is not set.");
      }

      try {
        const response = await axios.post(
          "https://event-in.online/api/verify-otp",
          {
            phone_number: this.phoneNumber,
            code: parseInt(code, 10),
          }
        );
        if (response) {
          console.log(response);

          return;
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        throw new Error("Failed to verify OTP.");
      }
    },

    async registerUser(name: string, lastName: string) {
      if (!this.phoneNumber) {
        throw new Error("Phone number is not set.");
      }

      try {
        const response = await axios.post(
          "https://event-in.online/api/register",
          {
            phone_number: this.phoneNumber,
            name,
            last_name: lastName,
          }
        );

        const { token, user } = response.data.data;

        if (token) {
          this.token = token;
          this.isAuthenticated = true;
          this.userInfo = {
            name: user.name,
            lastName: user.last_name,
          };

          localStorage.setItem("auth_token", this.token as string);
        } else {
          throw new Error("Token not found in the registration response.");
        }
      } catch (error) {
        console.error("Error registering user:", error);
        throw new Error("Failed to register.");
      }
    },

    async loginUser(phoneNumber: string) {
      try {
        const response = await axios.post("https://event-in.online/api/login", {
          phone_number: "998" + phoneNumber,
        });

        const { token, user } = response.data.data;

        if (token) {
          this.token = token;
          this.userInfo = {
            name: user.name,
            lastName: user.last_name,
          };
          this.isAuthenticated = true;

          localStorage.setItem("auth_token", this.token as string);
          
          router.push("/");
        } else {
          throw new Error("Token not found in the login response.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        throw new Error("Login failed.");
      }
    },

    logout() {
      this.token = null;
      this.isAuthenticated = false;
      this.userInfo = null;
      this.phoneNumber = null;
      this.otpCode = null;
      localStorage.removeItem('auth_token');
    },

    async checkAuthentication() {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        this.logout();
        return;
      }

      try {
        const response = await axios.get("https://event-in.online/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { user } = response.data.data;

        this.token = token;
        this.isAuthenticated = true;
        this.userInfo = {
          name: user.name,
          lastName: user.last_name,
        };
      } catch (error) {
        console.error("Error checking authentication:", error);
        this.logout();
      }
    },
  },
});
