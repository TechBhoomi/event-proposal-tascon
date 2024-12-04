<template>
  <v-container class="partners-section" fluid>
    <h1 class="text-center mb-4 font-weight-bold text-h4" style="font-size: 2rem">
      Our Customers
    </h1>
    <div class="scroll-container">
      <div class="scroll-content">
        <v-col
          v-for="(partner, index) in [...partners, ...partners]"
          :key="index"
          cols="auto"
          class="d-flex justify-center align-center partner-card"
        >
          <!-- Link wrapping the logo and displaying the partner name below the image -->
          <a :href="partner.link" target="_blank" rel="noopener noreferrer">
            <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
            <div class="partner-name">{{ partner.name }}</div>
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
    logo: "http://api.qspiders.com/media/clients/Deliotte_C9ukSJM_1_yA82JEr.png",
    link: "https://www.philips.com",
  },
  {
    name: "AECOM",
    logo: "http://api.qspiders.com/media/clients/Capegemini_60.png",
    link: "https://www.aecom.com",
  },
  {
    name: "Moderna",
    logo: "http://api.qspiders.com/media/clients/Integra_Micro_Systems_chIzJjj.jpg",
    link: "https://www.modernatx.com",
  },
  {
    name: "Brother",
    logo: "http://api.qspiders.com/media/clients/sharp_sZ49lwe.png",
    link: "https://www.brother.com",
  },
  {
    name: "Wepik",
    logo: "http://api.qspiders.com/media/clients/EFI_pdQaA6e.png",
    link: "https://www.wepik.com",
  },
  {
    name: "Vaio",
    logo: "http://api.qspiders.com/media/clients/arisglobal-logo-new_0_ijEbzaU.png",
    link: "https://www.vaio.com",
  },
  {
    name: "Vaio",
    logo: "http://api.qspiders.com/media/clients/atos_logo_4i8GHxl_60.jpg",
    link: "https://www.vaio.com",
  },
  {
    name: "Vaio",
    logo: "http://api.qspiders.com/media/clients/Quinnox_ZF14fB1.png",
    link: "https://www.vaio.com",
  },
  {
    name: "Vaio",
    logo: "http://api.qspiders.com/media/clients/Toshiba-Leading-Innovation-Logo_n57DHxh.png",
    link: "https://www.vaio.com",
  },
  {
    name: "HTC",
    logo: "http://api.qspiders.com/media/clients/3dplm_XXe7oH6.png",
    link: "https://www.htc.com",
  },
  {
    name: "HTC",
    logo: "http://api.qspiders.com/media/clients/allstate-logo-header-170x45_W9ycizB.png",
    link: "https://www.htc.com",
  },
  {
    name: "HTC",
    logo: "http://api.qspiders.com/media/clients/Metric_stream_qYDZUOg.png",
    link: "https://www.htc.com",
  },
  {
    name: "HTC",
    logo: "http://api.qspiders.com/media/clients/Subex_3mL6EYk.jpg",
    link: "https://www.htc.com",
  },
  {
    name: "HTC",
    logo: "http://api.qspiders.com/media/clients/Pole_to_Win_u2xelPo.png",
    link: "https://www.htc.com",
  },
  {
    name: "HTC",
    logo: "http://api.qspiders.com/media/clients/2000px-Unisys_logo.svg__iTADfwk.png",
    link: "https://www.htc.com",
  },
]);
</script>

<style scoped>
.partners-section {
  background-color: #c6e7ff;
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

.partner-name {
  text-align: center;
  font-size: 0.75rem;
  margin-top: 8px;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .scroll-content {
    animation: scroll-left 5s linear infinite; /* Increased scrolling time for mobile */
  }

  .partner-card {
    min-width: 80px;
    height: 60px;
    margin: 0 5px;
  }

  .partner-logo {
    max-width: 80%;
    max-height: 80%;
  }
}
</style>
