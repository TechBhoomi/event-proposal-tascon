<script>
import slideSvg1 from "../../assets/Hiring Process (2).svg";
import slideSvg2 from "../../assets/Hiring Process (3).svg";
import slideSvg3 from "../../assets/Hiring Process.svg";
import slideSvg4 from "../../assets/Our Journey - Stats.svg";
import slideSvg5 from "../../assets/Skills we train - Technologies.svg";

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
    };
  },
};
</script>

<template >
  <v-carousel
    height="500"
    id="about-section"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    class="carouselForm"
  >
    <v-carousel-item v-for="slide in slides" :key="slide.id">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <!-- SVG Image -->
          <img
            :src="slide.src"
            :alt="`Slide ${slide.label}`"
            class="h-full w-auto"
          />
        </div>
      </v-sheet>
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
