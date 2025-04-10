<script setup></script>

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
      </v-main>

      <v-footer class="d-flex justify-center text-center"color="amber-darken-2" border app>
        © 2025 - TGP | All Rights Reserved
      </v-footer>
    </v-app>
  </v-responsive>
</template>
