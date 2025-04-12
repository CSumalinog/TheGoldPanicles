<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

const router = useRouter()
const email = ref('')

const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\..+/.test(v) || 'Enter a valid email',
]

const submit = () => {
  console.log('Email submitted:', email.value)
  // Optional: verify email before auth
}

const googleLogin = async () => {
  const provider = new GoogleAuthProvider()
  try {
    await signInWithPopup(auth, provider)
    router.push('/dashboard')
  } catch (error) {
    console.error('Google Login Error:', error.message)
  }
}

const facebookLogin = async () => {
  const provider = new FacebookAuthProvider()
  try {
    await signInWithPopup(auth, provider)
    router.push('/dashboard')
  } catch (error) {
    console.error('Facebook Login Error:', error.message)
  }
}
</script>

<template>
  <v-responsive>
    <v-app>
      <v-main class="bg-cover bg-center" style="background-image: url('')">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto text-center pt-16">
              <v-img
                src="images/tgp_logo.jpg"
                width="70"
                height="70"
                class="mx-auto rounded-circle elevation-3 mb-3"
              />
              <br />
              <span class="font-weight-bold font-italic white--text">
                "We never flinched in serving you the Truth"
              </span>
            </v-col>
          </v-row>
        </v-container>

        <v-card class="mx-auto" width="400">
          <template v-slot:title>
            <span class="font-weight-black">Welcome to Vuetify</span>
          </template>

          <v-container
            class="fill-height d-flex align-center justify-center"
            fluid
            style="background-color: #fce488"
          >
            <v-sheet class="pa-6" elevation="0" max-width="400" width="100%">
              <v-form @submit.prevent="submit">
                <v-text-field
                  v-model="email"
                  label="Email address"
                  type="email"
                  variant="solo"
                  class="rounded-pill mb-4"
                  :rules="emailRules"
                />

                <v-btn type="submit" class="rounded-pill mb-4" color="white" block>
                  Continue
                </v-btn>

                <div class="text-center my-4 d-flex align-center">
                  <v-divider class="flex-grow-1" />
                  <span class="mx-3 font-weight-medium">OR</span>
                  <v-divider class="flex-grow-1" />
                </div>

                <v-row class="justify-center mb-3">
                  <v-col cols="6" class="d-flex justify-end">
                    <v-btn
                      width="56"
                      height="56"
                      class="rounded-circle elevation-3"
                      color="yellow-darken-2"
                      @click="googleLogin"
                    >
                      <v-icon size="28" color="black">mdi-google</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col cols="6" class="d-flex justify-start">
                    <v-btn
                      width="56"
                      height="56"
                      class="rounded-circle elevation-3"
                      color="blue-darken-4"
                      @click="facebookLogin"
                    >
                      <v-icon size="28" color="white">mdi-facebook</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-sheet>
          </v-container>
        </v-card>
      </v-main>

      <v-footer class="d-flex justify-center text-center" color="amber-darken-2" border app>
        © 2025 - TGP | All Rights Reserved
      </v-footer>
    </v-app>
  </v-responsive>
</template>
