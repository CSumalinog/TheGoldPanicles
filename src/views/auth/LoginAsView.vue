<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedRole = ref(null)

const roles = ref([
  { title: 'Client', value: 'client' },
  { title: 'Staffer', value: 'staffer' },
  { title: 'Admin', value: 'admin' },
])

watch(selectedRole, (newVal) => {
  if (newVal === 'client') {
    router.push('/login_client')
  } else if (newVal === 'staffer' || newVal === 'admin') {
    router.push('/login')
  }
})
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
                cover
              />
              <br />
              <span class="font-weight-bold font-italic white--text">
                "We never flinched in serving you the Truth"
              </span>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto">
              <v-card class="mx-auto" width="350">
                <template v-slot:title>
                  <span class="d-flex justify-center text-center font-weight-medium"
                    >Welcome, let's set you up !
                  </span>
                </template>

                <v-card-text class="bg-surface-light">
                  <v-container class="d-flex flex-column align-center justify-center">
                    <v-card width="300" class="pa-2">
                      <v-select
                        v-model="selectedRole"
                        :items="roles"
                        item-title="title"
                        item-value="value"
                        label="Login as"
                      />
                    </v-card>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer class="d-flex justify-center text-center" color="amber-darken-2" border app>
        © 2025 - TGP | All Rights Reserved
      </v-footer>
    </v-app>
  </v-responsive>
</template>
