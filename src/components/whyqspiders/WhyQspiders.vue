<template>
  <section class="p-2 lg:w-[100%] text-justify" id="about-section">
    <h1 class="text-[#FF7F3E] font-sans pb-3" :class="headingClasses">
      Why QSpiders?
    </h1>
    <section class="text-xl">
      <ul class="custom-list font-poppins font-semibold text-sm">
        <li class="pb-3" :class="listClasses">
          On-demand Upskilling, Reskilling & Cross-skilling for hired resource
          on vanilla skills.
        </li>
        <li class="pb-3" :class="listClasses">
          Tailor made experiential learning programs.
        </li>
        <li class="pb-3" :class="listClasses">
          Dedicated facilities & team for hiring support.
        </li>
        <li class="pb-3" :class="listClasses">
          22,000+ Trained resource ready for hiring.
        </li>
        <li class="pb-3" :class="listClasses">
          10,800+ Female trained resource available for diversity hiring.
        </li>
        <li class="pb-3" :class="listClasses">
          17,300+ Trained resource available having below 4 lakh family income.
        </li>
        <li class="pb-3" :class="listClasses">
          14,900+ Trained resource with 60% throughout in their academics.
        </li>
        <li class="pb-3" :class="listClasses">
          7,200+ Trained resource above 65% throughout in their academics.
        </li>
        <li class="pb-3" :class="listClasses">
          8,500+ Trained resource available in Pune/Mumbai.
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { xs, sm, md, lg, xl } = useDisplay();

const headingClasses = computed(() => {
  if (xs.value) return "text-[2rem] font-bold  text-start"; // Extra-small screens
  if (sm.value) return "text-[2rem] font-bold  text-start"; // Small screens
  if (md.value) return "text-[2.5rem] font-bold  text-start"; // bold screens
  if (lg.value) return "text-[2.5rem] font-bold  text-start"; // Large screens
  if (xl.value) return "text-[2.5rem] font-bold  text-start"; // Extra-large screens
  return "text-[2.5rem] font-bold text-start"; // Default
});
const listClasses = computed(() => {
  if (xs.value) return "text-[0.9rem] text-start "; // Extra-small screens
  if (sm.value) return "text-[0.9rem] text-start"; // Small screens
  if (md.value) return "text-[1rem] text-start"; // bold screens
  if (lg.value) return "text-[1.1rem] text-start"; // Large screens
  if (xl.value) return "text-[1.1rem] text-start"; // Extra-large screens
  return "text-[1.1rem] text-start"; // Default
});
</script>

<style scoped>
.custom-list {
  list-style: none;
  padding-left: 0;
}

.custom-list li {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.custom-list li::before {
  content: "✔";
  font-weight: bold;
  color: #eb5b00;
  margin-right: 10px;
  font-size: 1.4rem;
  line-height: 1;
}
#about-section {
  padding: 1rem;
  /* background: linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.055)),
    url("https://devplaced.qspiders.com/_next/image?url=%2FBackgroundWave.png&w=384&q=75") center/cover no-repeat; */
      background: linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.055)),
    url("https://devplaced.qspiders.com/illustrate_wave.svg") center/cover no-repeat;
}
</style>
