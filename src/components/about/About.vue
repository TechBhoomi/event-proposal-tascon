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
        <!-- QSpiders - the leading technology training organization, was started
        with the goal of bridging the gap between industry demands and academic
        curriculums. It is designed to work as a 'Finishing School' and is
        modelled with several learning programs. -->
        <p>
          QSpiders is the world’s ace software training organization with an aim
          to bridge the gap between the demands of the industry and the
          curriculum of educational institutions.
        </p>
        <br />
        <p>
          With centers across the Globe, the institute is a platform where young
          minds are given the opportunity to build successful careers.
        </p>
        <br />
        <p>
          ”QSpiders is a place where businesses find talent and dreams take
          flight."
        </p>
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
    url("https://devplaced.qspiders.com/illustrate_wave.svg") center/cover no-repeat;
    /* background: linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.055)),
    url("https://devplaced.qspiders.com/_next/image?url=%2FBackgroundWave.png&w=384&q=75") center/cover no-repeat; */
}
</style>
