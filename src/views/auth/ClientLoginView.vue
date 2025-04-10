<script setup>
</script>

<template>
  <v-responsive>
    <v-app>
      <v-main class="bg-cover bg-center" style="background-image: url('/images/bg_image.png')">
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

        <v-card class="pa-4">
  <h3 class="text-center">Client Login</h3>

  <v-text-field label="Email" outlined />
  <v-text-field label="Password" type="password" outlined />

  <!-- BUTTON ROW -->
  <v-row class="mt-4">
    <v-col cols="6" class="text-left">
      <v-btn
        color="grey-darken-1"
        variant="outlined"
        prepend-icon="mdi-arrow-left"
        @click="$router.push('/loginas')"
      >
        Back
      </v-btn>
    </v-col>
    <v-col cols="6" class="text-right">
      <v-btn color="amber-darken-2">
        Login
      </v-btn>
    </v-col>
  </v-row>
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
