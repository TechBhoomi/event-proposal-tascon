<template>
  <!-- <v-container> -->
  <v-app-bar :elevation="2">
    <!-- <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template> -->

    <v-app-bar-title
      class="font-bold text-2xl text-gray-600"
      style="font-weight: 600"
      >Application Bar</v-app-bar-title
    >

    <!-- <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>

          <v-btn icon="mdi-magnify"></v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template> -->
  </v-app-bar>
  <!-- </v-container> -->
  <!-- <Carousel /> -->
</template>
<script setup>
import Carousel from "../carousel/Carousel.vue";
</script>
<style scoped></style>
