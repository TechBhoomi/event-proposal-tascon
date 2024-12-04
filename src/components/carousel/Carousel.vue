<script>
import slide_1 from "../../assets/slide_1.JPG";
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<template>
  <!-- <img :src="slide_1" alt=""> -->
  <v-carousel
    height="500"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    class="carouselForm"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <p>Slide {{ i+1 }}</p>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<style>
#carouselForm {
  width: 100%;
}
</style>
