<script setup>
import Cards from "./components/cards/Cards.vue";
import Carousel from "./components/carousel/Carousel.vue";
import NavBar from "./components/navBar/NavBar.vue";
import About from "./components/about/About.vue";
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container width="100%" fluid="true">
        <Carousel />
      </v-container>
      <v-container fluid="true">
        <About />
      </v-container>
      <v-container fluid="true">
        <Cards />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-application--wrap {
  min-height: unset;
}
</style>
