<script setup>
import Cards from "./components/cards/Cards.vue";
import Carousel from "./components/carousel/Carousel.vue";
import NavBar from "./components/navBar/NavBar.vue";
import About from "./components/about/About.vue";

import Placements from "./components/placements/Placements.vue";
import Company from "./components/company/Company.vue";
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container width="100%" fluid="true" id="home">
        <Carousel />
      </v-container>
      <v-container fluid="true" id="about">
        <About />
      </v-container>
      <v-container fluid="true" width="100%" id="courses">
        <Cards />
      </v-container>
      <Company/>
      <Placements />

    </v-main>
  </v-app>
</template>

<style scoped>
.v-application--wrap {
  min-height: unset;
}
</style>
