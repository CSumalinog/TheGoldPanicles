<script setup>
import { useRouter } from 'vue-router'

// Optional if you want to programmatically navigate
const router = useRouter()
</script>

<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar :elevation="2" rounded>
      <v-app-bar-title>TheGoldPanicles</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-facebook"></v-btn>
        <v-btn icon="mdi-twitter"></v-btn>
        <v-btn icon="mdi-youtube"></v-btn>
      </template>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn color="primary" to="/loginas">
              Let's get u started
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
