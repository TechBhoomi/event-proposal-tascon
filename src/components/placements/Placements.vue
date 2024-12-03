<template>
  <v-container class="statistics-section" fluid>
    <v-row align="center" justify="center" class="h-100">
      <v-col
        v-for="(stat, index) in animatedStats"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="text-center"
      >
        <h1 class="stat-number">{{ stat.currentValue }}+</h1>
        <p class="stat-label">{{ stat.label }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const stats = ref([]);
const animatedStats = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://hrstbackend.qspiders.com/placements/website_data_reportSummary/"
    );
    const apiData = response.data;
    stats.value = [
      { value: apiData.it, label: "IT" },
      { value: apiData.yop, label: "YOP" },
      { value: apiData.non_it, label: "NON_IT" },
      { value: apiData.above_60, label: "Above 60%" },
      { value: apiData.yop_count, label: "YOP Count" },
      { value: apiData.less_than_60, label: "Less than 60%" },
      { value: apiData.total_placed, label: "Total Placed" },
    ];

    animatedStats.value = stats.value.map((stat) => ({
      ...stat,
      currentValue: 0,
    }));
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const startAnimation = () => {
  animatedStats.value.forEach((stat, index) => {
    const increment = Math.ceil(stat.value / 50);
    const interval = setInterval(() => {
      if (stat.currentValue < stat.value) {
        stat.currentValue += increment;
        if (stat.currentValue > stat.value) {
          stat.currentValue = stat.value;
        }
        animatedStats.value[index] = { ...stat };
      } else {
        clearInterval(interval);
      }
    }, 50);
  });
};

onMounted(async () => {
  await fetchData();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );
  const section = document.querySelector(".statistics-section");
  observer.observe(section);
});
</script>

<style scoped>
.statistics-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://acrossgeo.com/assets/img/stats-bg.jpg") center/cover no-repeat;
  height: 60vh; 
}

 .stat-number {
    font-size: 2.5rem; 
    font-weight: bold;
  }

    .stat-label {
    font-size: 1.5rem; 
    font-weight: bold;
  }

@media (max-width: 768px) {
  .statistics-section {
    background-size: cover;
    background-position: center;
    height: 100vh; 
  }

  .stat-number {
    font-size: 2rem; 
  }

  .stat-label {
    font-size: 1rem; 
  }
}
</style>
