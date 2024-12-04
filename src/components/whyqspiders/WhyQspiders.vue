<template>
  <section class="p-2 lg:w-[100%] text-justify">
    <h1 class="text-[#FF7F3E] font-sans" :class="headingClasses">
      Why Qspiders?
    </h1>
    <section class="text-xl">
      <ul class="custom-list font-poppins font-semibold text-sm">
        <li class="sm:text-sm text-base pb-3">
          On-demand Upskilling, Reskilling & Cross-skilling for hired resource
          on vanilla skills.
        </li>
        <li class="sm:text-sm text-base pb-3">
          Tailor made experiential learning programs.
        </li>
        <li class="sm:text-sm text-base pb-3">
          Dedicated facilities & team for hiring support.
        </li>
        <li class="sm:text-sm text-base pb-3">
          22,000+ Trained resource ready for hiring.
        </li>
        <li class="sm:text-sm text-base pb-3">
          10,800+ Female trained resource available for diversity hiring.
        </li>
        <li class="sm:text-sm text-base pb-3">
          17,300+ Trained resource available having below 4 lakh family income.
        </li>
        <li class="sm:text-sm text-base pb-3">
          14,900+ Trained resource with 60% throughout in their academics.
        </li>
        <li class="sm:text-sm text-base pb-3">
          7,200+ Trained resource above 65% throughout in their academics.
        </li>
        <li class="sm:text-sm text-base pb-3">
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
  if (xs.value) return "text-[2rem] font-bold font-bold text-start"; // Extra-small screens
  if (sm.value) return "text-[2rem] font-bold font-bold text-start"; // Small screens
  if (md.value) return "text-[3rem] font-bold font-bold text-start"; // bold screens
  if (lg.value) return "text-[3rem] font-bold font-bold text-start"; // Large screens
  if (xl.value) return "text-[3rem] font-bold font-bold text-start"; // Extra-large screens
  return "h-auto"; // Default
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
</style>
