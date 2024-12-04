<script setup>
import Cards from "./components/cards/Cards.vue";
import Carousel from "./components/carousel/Carousel.vue";
import NavBar from "./components/navBar/NavBar.vue";
import About from "./components/about/About.vue";

import Placements from "./components/placements/Placements.vue";
import Company from "./components/company/Company.vue";
import WhyQspiders from "./components/whyqspiders/WhyQspiders.vue";
import Footer from "./components/footer/Footer.vue";
import { ref } from "vue";

// Track the current scroll position
const isAtBottom = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;

  isAtBottom.value = scrollTop + windowHeight >= fullHeight - 10;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

// Add event listener for scroll
window.addEventListener("scroll", handleScroll);

</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container width="100%" fluid="true" id="home">
        <Carousel />
      </v-container>
      <!-- <v-container fluid="true" width="100%">
        <Company />
      </v-container> -->
      <v-container fluid="true" id="about">
        <About />
      </v-container>
      <v-container fluid="true" width="100%" id="placements">
        <Placements />
      </v-container>
      <v-container fluid="true" width="100%" id="courses" class="pa-3">
        <Cards />
      </v-container>
      <v-container fluid="true" width="100%" id="whyQspiders">
        <WhyQspiders />
      </v-container>
      <v-container fluid="true" width="100%">
        <Footer class="static" />
      </v-container>
    </v-main>
     <!-- Scroll buttons -->
    <div class="scroll-buttons">
      <button v-if="isAtBottom" class="scroll-button up" @click="scrollToTop">
        ↑
      </button>
      <button v-else class="scroll-button down" @click="scrollToBottom">
        ↓
      </button>
    </div>

  </v-app>
</template>

<style scoped>
.v-application--wrap {
  min-height: unset;
}
.scroll-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scroll-button {
  background-color: #fb8c00;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.scroll-button:hover {
  background-color: #fb8c00;
  transform: scale(1.1);
}

</style>
