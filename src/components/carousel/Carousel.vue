<script>
import slide_1 from "../../assets/1.png";
import slide_2 from "../../assets/2.png";
import slide_3 from "../../assets/3.png";
import slide_4 from "../../assets/4.png";
import slide_5 from "../../assets/5.png";
export default {
  data() {
    return {
      slides: [
        { id: 1, src: slideSvg1, label: "First Slide" },
        { id: 2, src: slideSvg2, label: "Second Slide" },
        { id: 3, src: slideSvg3, label: "Third Slide" },
        { id: 4, src: slideSvg4, label: "Fourth Slide" },
        { id: 5, src: slideSvg5, label: "Fifth Slide" },
      ],
      slides: [slide_1, slide_2, slide_3, slide_4, slide_5],
    };
  },
};
</script>

<template>
  <!-- <img :src="slide_1" alt=""> -->
  <div class="fixed-shadow left-[-250px]"></div>
  <div class="fixed-shadow right-[-250px]"></div>
  <v-carousel
    height="500"
    id="about-section"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    class="carouselForm"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" 
    :src="slide"
    >
      <!-- <v-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
         
          <img
            :src="slide.src"
            :alt="`Slide ${slide.label}`"
            class="h-full w-auto"
          />
        </div>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.carouselForm {
  width: 100%;
}

img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

/* #about-section {
  padding: 1rem; */
  /* background: linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.055)),
    url("https://devplaced.qspiders.com/_next/image?url=%2FBackgroundWave.png&w=384&q=75") center/cover no-repeat; */
  /* background: linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.055)),
    url("https://devplaced.qspiders.com/illustrate_wave.svg") center/cover
      no-repeat; */
/* } */
</style>
