<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const birthdate = ref(null)
const menu = ref(false)
const gender = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const signUp = () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    alert('Please fill in all required fields.')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords don't match.")
    return
  }

  // Simulate successful sign-up
  alert('Sign-up successful! Redirecting to login...')
  router.push('/staffer_login') // adjust route as needed
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <v-responsive>
    <v-app>
      <v-main class="d-flex align-center justify-center" style="background-image: url('/images/bg_image.png')">
        <v-img
          src="images/tgp_logo.jpg"
          width="50"
                height="50"
                class="logo-top-left mx-auto rounded-circle elevation-3 mb-3"
                cover

        ></v-img>
        <v-container fluid class="d-flex flex-column align-center justify-center fill-height pa-5">
          <p class="text-center font-weight-bold font-italic mb-6">"We never flinched in serving you the truth"</p>

          <v-card class="pa-6" max-width="500" rounded="xl" elevation="8">
            <h3 class="text-center mb-4">Welcome, let’s set you up!</h3>

            <div>
              <strong>Name</strong>
              <v-row>
                <v-col><v-text-field v-model="firstName" placeholder="First Name" density="compact" /></v-col>
                <v-col><v-text-field v-model="lastName" placeholder="Last Name" density="compact" /></v-col>
              </v-row>
            </div>

            <div>
              <strong>Birthdate</strong>
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template #activator="{ props }">
                  <v-text-field
                    v-model="birthdate"
                    label="Select Date"
                    readonly
                    v-bind="props"
                    prepend-inner-icon="mdi-calendar"
                    density="compact"
                  ></v-text-field>
                </template>

                <v-date-picker
                  v-model="birthdate"
                  @input="menu = false"
                  color="amber-darken-2"
                ></v-date-picker>
              </v-menu>
            </div>

            <div class="mb-2">
              <strong>Gender</strong>
              <v-btn-toggle v-model="gender" class="d-flex justify-center" density="compact">
                <v-btn value="Male">Male</v-btn>
                <v-btn value="Female">Female</v-btn>
                <v-btn value="Custom">Custom</v-btn>
              </v-btn-toggle>
            </div>

            <v-text-field v-model="email" placeholder="Email address" density="compact" />
            <v-text-field v-model="password" type="password" placeholder="Password" density="compact" />
            <v-text-field v-model="confirmPassword" type="password" placeholder="Confirm Password" density="compact" />

            <v-row justify="center" class="mb-2">
              <v-col cols="auto">
                <v-btn @click="signUp" color="black" class="text-white px-4">
                  Sign Up
                </v-btn>
              </v-col>
            </v-row>

            <p class="text-center mt-2 text-caption">
              Already have an account?
              <span @click="$router.push('/staffer_login')" style="cursor: pointer; color: #D4A017;"><b><u>Sign in</u></b></span>
            </p>
          </v-card>

          <div class="mt-8 text-caption text-center w-100">
          <v-divider class="mb-2"></v-divider>
          © 2024 TGP | All Rights Reserved
        </div>

        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
<style scoped>
.logo-top-left {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
