<template>
  <section
    class="text-justify flex items-center justify-between pb-2"
    id="about-section"
  >
    <article class="flex flex-col">
      <h1 class="pb-3 font-sans text-[#FF7F3E]" :class="headingClasses">
        About Qspiders
      </h1>
      <section class="text-xl font-poppins text-justify">
        World's premier software training institution, dedicated to bridging the
        gap between industry demands and academic curricula. With centers
        worldwide, Qspiders provides a platform for young minds to cultivate
        successful careers.
      </section>
    </article>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
// import bg from "../../assets/undraw_open_note_cgre.png";
const { xs, sm, md, lg, xl } = useDisplay();
const headingClasses = computed(() => {
  if (xs.value) return "text-[2rem] font-bold font-bold text-start"; // Extra-small screens
  if (sm.value) return "text-[2rem] font-bold font-bold text-start"; // Small screens
  if (md.value) return "text-[3rem] font-bold font-bold text-start"; // bold screens
  if (lg.value) return "text-[3rem] font-bold font-bold text-start"; // Large screens
  if (xl.value) return "text-[3rem] font-bold font-bold text-start"; // Extra-large screens
  return "h-auto"; // Default
});
</script>

<style scoped>
#about-section {
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.055)),
    url("../../assets/about_bg_image.jpg") center/cover no-repeat;
}
</style>
