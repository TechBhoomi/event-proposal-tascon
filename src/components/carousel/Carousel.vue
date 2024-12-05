<script>
import slide_1 from "../../assets/1.png";
import slide_2 from "../../assets/2.png";
import slide_3 from "../../assets/3.png";
import slide_4 from "../../assets/4.png";
import slide_5 from "../../assets/5.png";
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
          <p>Slide {{ i+1 }}</p>
        </div>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>

<style>
#carouselForm {
  width: 100%;
}
</style>
