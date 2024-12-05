<script setup>
import Cards from "./components/cards/Cards.vue";
import Carousel from "./components/carousel/Carousel.vue";
import NavBar from "./components/navBar/NavBar.vue";
import About from "./components/about/About.vue";

import Placements from "./components/placements/Placements.vue";
import Company from "./components/company/Company.vue";
import WhyQspiders from "./components/whyqspiders/WhyQspiders.vue";
import Footer from "./components/footer/Footer.vue";
import branch_img from "./assets/branch_details.png";
import { computed, onBeforeMount, ref } from "vue";

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

import { useDisplay } from "vuetify";
import { useRoute, useRouter } from "vue-router";
const { xs, sm, md, lg, xl } = useDisplay();

const headingClasses = computed(() => {
  if (xs.value) return "text-[2rem] font-bold  text-start"; // Extra-small screens
  if (sm.value) return "text-[2rem] font-bold  text-start"; // Small screens
  if (md.value) return "text-[2.5rem] font-bold  text-start"; // bold screens
  if (lg.value) return "text-[2.5rem] font-bold  text-start"; // Large screens
  if (xl.value) return "text-[2.5rem] font-bold  text-start"; // Extra-large screens
  return "text-[2.5rem] font-bold text-start"; // Default
});
let router = useRouter();
onBeforeMount(() => {
  router.push("/");
});
</script>

<template>
  <v-app>
    <NavBar />
    <v-main class="">

      <v-container  id="home">
        <Carousel />
      </v-container>
      <!-- <v-container >
        <Company />
      </v-container> -->
      <!-- <v-container fluid="true" id="about">
        <About />
      </v-container> -->
       <v-container  id="whyQspiders">
        <WhyQspiders />
      </v-container>
      <v-container  id="placements">
        <Placements />
      </v-container>
      <v-container  id="courses" class="pa-3">
        <Cards />
      </v-container>
      <v-container  class="pa-3">
        <h3 :class="headingClasses" class="text-[#FF7F3E]">Branches</h3>
        <section class="flex w-full items-center justify-center">
          <img :src="branch_img" alt="" />
        </section>
      </v-container>
     
      <v-container >
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
