<template>
  <v-container class="partners-section" fluid>
    <h1
      class="text-center mb-4 font-weight-bold text-h4"
      style="font-size: 2rem"
    >
      Our Hiring Partners
    </h1>
    <div class="scroll-container">
      <div class="scroll-content">
        <v-col
          v-for="(partner, index) in [...partners, ...partners]"
          :key="index"
          cols="auto"
          class="d-flex justify-center align-center partner-card"
        >
          <!-- Link wrapping the logo -->
          <a :href="partner.link" target="_blank" rel="noopener noreferrer">
            <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
          </a>
        </v-col>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// Updated partners data with links
const partners = ref([
  {
    name: "Philips",
    logo: "https://devplaced.qspiders.com/compLogo-04.svg",
    link: "https://www.philips.com",
  },
  {
    name: "AECOM",
    logo: "https://devplaced.qspiders.com/compLogo05.svg",
    link: "https://www.aecom.com",
  },
  {
    name: "Moderna",
    logo: "https://devplaced.qspiders.com/compLogo03.svg",
    link: "https://www.modernatx.com",
  },
  {
    name: "Brother",
    logo: "https://devplaced.qspiders.com/compLogo01.svg",
    link: "https://www.brother.com",
  },
  {
    name: "Wepik",
    logo: "https://devplaced.qspiders.com/compLogo06.svg",
    link: "https://www.wepik.com",
  },
  {
    name: "Vaio",
    logo: "https://devplaced.qspiders.com/compLogo06.svg",
    link: "https://www.vaio.com",
  },
  {
    name: "HTC",
    logo: "https://devplaced.qspiders.com/compLogo02.svg",
    link: "https://www.htc.com",
  },
]);
</script>

<style scoped>
.partners-section {
  background-color: #fff;
  padding: 20px 0;
}

.scroll-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.scroll-content {
  display: flex;
  white-space: nowrap;
  animation: scroll-left 20s linear infinite;
}

.partner-card {
  min-width: 120px;
  height: 80px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      -50%
    ); /* Adjust based on the duplicated items for smooth loop */
  }
}

@media (max-width: 768px) {
  .partner-card {
    min-width: 80px;
    height: 60px;
    margin: 0 5px;
  }
}
</style>
