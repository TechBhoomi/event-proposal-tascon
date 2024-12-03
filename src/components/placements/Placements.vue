<template>
  <v-container
    class="statistics-section"
    style="height: 60vh;"
    fluid
  >
    <v-row align="center" justify="center" class="h-100">
      <v-col
        v-for="(stat, index) in animatedStats"
        :key="index"
        cols="12"
        sm="4"
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

const stats = [
  { value: 17, label: "Years of Experience" },
  { value: 6, label: "Countries" },
  { value: 68, label: "Dedicated Labs" },
  { value: 44000, label: "Skilled Gig Workers" },
  { value: 540, label: "Clients" },
  { value: 1960, label: "Projects Executed" },
];

const animatedStats = ref(
  stats.map((stat) => ({
    ...stat,
    currentValue: 0, 
  }))
);

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

onMounted(() => {
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
  background: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ), 
    url("https://acrossgeo.com/assets/img/stats-bg.jpg") center/cover no-repeat;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  transition: 0.3s ease;
}

.stat-label {
  font-size: 1.2rem;
  margin: 0;
}
</style>
