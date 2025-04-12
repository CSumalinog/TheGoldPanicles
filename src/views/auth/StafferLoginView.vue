<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = () => {

  if (email.value === 'staffer@example.com' && password.value === 'password') {
    router.push('/staffer_dashboard')
  } else {
    alert('Invalid credentials')
  }
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <v-responsive>
  <v-app>
    <v-main class="d-flex align-center justify-center" style="background-image: url('/images/bg_image.png')">
      <v-container class="fill-height d-flex flex-column align-center justify-center">

        <v-img
          src="images/tgp_logo.jpg"
          width="90"
                height="70"
                class="mx-auto rounded-circle elevation-3 mb-3"
                cover
        ></v-img>
        <div class="text-center font-weight-bold font-italic mb-6">
          "We never flinched in serving you the truth"
        </div>

        <!-- Login Card -->
        <v-card class="pa-6" elevation="10" max-width="400" style="border-radius: 20px;">
          <v-card-text>
            <h3 class="text-center mb-4">Welcome! Please Log In.</h3>

            <v-text-field
              v-model="email"
              label="Email address"
              variant="outlined"
              class="mb-3"
            />

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              variant="outlined"
              class="mb-4"
            />

            <div class="d-flex justify-space-between">
              <v-btn
              @click="goBack"
              variant="text"
              style="color: #D4A10C;"
            >
              ← Back
            </v-btn>

              <v-btn color="black" @click="login">
                Log In
              </v-btn>
            </div>

            <v-divider class="my-4"></v-divider>

            <div class="text-center text-caption">
  <v-btn variant="text" color="#D4A017" @click="() => router.push('/forgot_password')" class="text-caption">
    Forgot Password?
  </v-btn>
  <div class="my-2">OR</div>
  <v-btn variant="tonal" color="#D4A017" class="mt-2 text-caption" @click="() => router.push('/staffer_signup')">
    Create New Account
  </v-btn>
</div>
          </v-card-text>
        </v-card>

        <!-- Footer -->
        <div class="mt-8 text-caption text-center w-100">
          <v-divider class="mb-2"></v-divider>
          © 2024 TGP | All Rights Reserved
        </div>

      </v-container>
    </v-main>
  </v-app>
</v-responsive>
</template>
