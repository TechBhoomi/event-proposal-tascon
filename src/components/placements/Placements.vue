<template>
  <h1 :class="headingClasses" class="font-sans pb-3 text-[#FF7F3E]">
    Placement Statistics
  </h1>
  <section class="statistics-section" fluid>
    <v-row class="h-100">
      <v-col
        v-for="(stat, index) in animatedStats"
        :key="index"
        cols="12"
        sm="6"
        md="auto"
        class="d-flex justify-center stat-col"
      >
        <v-card class="stat-card" outlined>
          <div class="stat-number">{{ stat.currentValue }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </v-card>
      </v-col>
    </v-row>
  </section>
  <section class="font-poppins text-center pt-2">
    For more details
    <a
      class="text-blue-500 pl-1 cursor-pointer"
      href="https://placements.qspiders.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      click Here.
    </a>
    >
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useDisplay } from "vuetify";
const { xs, sm, md, lg, xl } = useDisplay();
const stats = ref([]);
const animatedStats = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://hrstbackend.qspiders.com/placements/website_data_reportSummary/"
    );
    const apiData = response.data;
    stats.value = [
      { value: apiData.total_placed, label: "Total Placed" },
      { value: apiData.less_than_60, label: "Less than 60% in Degree" },
      { value: apiData.non_it, label: "Non IT" },
      { value: apiData.it, label: "IT/CS/IS Candidates" },
      { value: apiData.above_60, label: "Throughout 60%" },
    ];

    animatedStats.value = stats.value.map(stat => ({
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
    entries => {
      entries.forEach(entry => {
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

const headingClasses = computed(() => {
  if (xs.value) return "text-[2rem] font-bold font-bold text-start"; // Extra-small screens
  if (sm.value) return "text-[2rem] font-bold font-bold text-start"; // Small screens
  if (md.value) return "text-[2.5rem] font-bold font-bold text-start"; // bold screens
  if (lg.value) return "text-[2.5rem] font-bold font-bold text-start"; // Large screens
  if (xl.value) return "text-[2.5rem] font-bold font-bold text-start"; // Extra-large screens
  return "text-[2.5rem] font-bold font-bold text-start"; // Default
});
</script>

<style scoped>
.statistics-section {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://acrossgeo.com/assets/img/stats-bg.jpg") center/cover no-repeat;
  color: white;
  /* text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7); */
}

.v-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.stat-col {
  flex: 1 1 calc(20% - 1rem); /* Equal width for 5 cards */
  max-width: calc(20% - 1rem); /* Ensure 5 cards fit in a row */
}

.stat-card {
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #86a7fc;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
}

@media (max-width: 768px) {
  .stat-col {
    flex: 1 1 100%;
    max-width: 100%;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}
</style>

<!-- <template>
  <h1 class="text-center mb-4 font-weight-bold text-h4" style="font-size: 2rem">
    Placement Statistics
  </h1>
  <v-container class="statistics-section" fluid>
    <v-row
      align="center"
      justify="center"
      class="h-100 no-wrap"
    >
      <v-col
        v-for="(stat, index) in animatedStats"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="2"
        class="stat-card d-flex flex-column align-center justify-center"
        :style="{ background: stat.bgColor }"
      >
        <div class="stat-content text-center">
          <h1 class="stat-number">{{ stat.currentValue }}</h1>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
        <img :src="stat.image" alt="stat image" class="stat-image" />
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
      {
        value: apiData.total_placed,
        label: "Total Placed",
        bgColor: "#003366",
     
      },
      {
        value: apiData.less_than_60,
        label: "Less than 60% in Degree",
        bgColor: "#FFDDDD",
        image: "path_to_image2", // Replace with actual image path
      },
      {
        value: apiData.non_it,
        label: "Non-IT",
        bgColor: "#F5F9FF",
        image: "path_to_image3", // Replace with actual image path
      },
      {
        value: apiData.it,
        label: "IT/CS/IS Candidates",
        bgColor: "#FFF1E8",
        image: "path_to_image4", // Replace with actual image path
      },
      {
        value: apiData.above_60,
        label: "Throughout 60%",
        bgColor: "#EBFFF4",
        image: "path_to_image5", // Replace with actual image path
      },
    ];

    animatedStats.value = stats.value.map(stat => ({
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
    entries => {
      entries.forEach(entry => {
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
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.stat-card {
  position: relative;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  height: 250px; /* Increased height */
  color: #333;
}

.stat-content {
  z-index: 1;
}

.stat-image {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: auto;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.stat-label {
  font-size: 1rem;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .stat-card {
    height: 220px; /* Adjust height for smaller screens */
  }
}

@media (max-width: 768px) {
  .stat-card {
    height: 200px;
  }
  .stat-number {
    font-size: 1.8rem;
  }
  .stat-label {
    font-size: 0.9rem;
  }
  .stat-image {
    width: 40px;
  }
}
</style> -->
