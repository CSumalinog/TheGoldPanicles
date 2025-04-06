<script setup>
import { ref } from 'vue'

const theme = ref('light')
const selectedRole = ref(null)
const selectedClientType = ref(null)

const roles = ref([
  { title: 'Client', value: 'client' },
  { title: 'Staffer', value: 'staffer' },
  { title: 'Admin', value: 'admin' },
])

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto">
              <img src="" alt="Logo" class="logo" />
              <span class="font-weight-bold ml-3">"We never flinched in serving you the Truth"</span>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto">
              <v-card class="mx-auto">
                <template v-slot:title>
                  <span class="d-flex justify-center text-center font-weight-bold"
                    >Welcome, let's set you up !</span
                  >
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  <v-container class="d-flex flex-column align-center justify-center">
                    <v-card width="350" class="pa-4">
                      <v-select
                        v-model="selectedRole"
                        :items="roles"
                        item-title="title"
                        item-value="value"
                        label="Login as"
                        outlined
                        class="mb-4"
                      />
                    </v-card>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer class="d-flex justify-center text-center" border app>
        © 2025 - TGP | All Rights Reserved
      </v-footer>
    </v-app>
  </v-responsive>
</template>
