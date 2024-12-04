<template>
  <v-container class="partners-section" fluid>
    <h1
      class="text-center mb-4 font-weight-bold text-h4"
      style="font-size: 2rem"
    >
      Our Customers
    </h1>
    <div class="scroll-container">
      <div class="scroll-content">
        <v-col
          v-for="(partner, index) in [...partners, ...partners]"
          :key="index"
          cols="auto"
          class="d-flex justify-center align-center partner-card h-8 aspect-auto"
        >
          <!-- Link wrapping the logo and displaying the partner name below the image -->
          <a :href="partner.link" target="_blank" rel="noopener noreferrer">
            <img :src="partner.logo" :alt="partner.name" class="partner-logo h-10" />
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
    // name: "Deloitte",
    logo: "http://api.qspiders.com/media/clients/Deliotte_C9ukSJM_1_yA82JEr.png",
    link: "https://www2.deloitte.com/in/en.html",
  },
  {
    // name: "Capgemini",
    logo: "http://api.qspiders.com/media/clients/Capegemini_60.png",
    link: "https://www.capgemini.com/ ",
  },
  {
    // name: "Integra",
    logo: "http://api.qspiders.com/media/clients/Integra_Micro_Systems_chIzJjj.jpg",
    link: "https://www.integramicro.com/ ",
  },

  {
    // name: "EFI",
    logo: "http://api.qspiders.com/media/clients/EFI_pdQaA6e.png",
    link: "https://www.efi.com/",
  },
  {
    // name: "Arisglobal",
    logo: "http://api.qspiders.com/media/clients/arisglobal-logo-new_0_ijEbzaU.png",
    link: "https://www.arisglobal.com/",
  },
  {
    // name: "Atos",
    logo: "http://api.qspiders.com/media/clients/atos_logo_4i8GHxl_60.jpg",
    link: "https://atos.net/en/ ",
  },
  {
    // name: "Quinnox",
    logo: "http://api.qspiders.com/media/clients/Quinnox_ZF14fB1.png",
    link: "https://www.quinnox.com/ ",
  },
  {
    // name: "Toshiba",
    logo: "http://api.qspiders.com/media/clients/Toshiba-Leading-Innovation-Logo_n57DHxh.png",
    link: "https://toshiba-india.com/",
  },
  {
    // name: "3dplm",
    logo: "http://api.qspiders.com/media/clients/3dplm_XXe7oH6.png",
    link: "https://3dplmsoftware.com/",
  },

  {
    // name: "Metricstream",
    logo: "http://api.qspiders.com/media/clients/Metric_stream_qYDZUOg.png",
    link: "https://www.metricstream.com/",
  },
  {
    // name: "Subex",
    logo: "http://api.qspiders.com/media/clients/Subex_3mL6EYk.jpg",
    link: "https://www.subex.com/",
  },
  {
    // name: "PTW",
    logo: "http://api.qspiders.com/media/clients/Pole_to_Win_u2xelPo.png",
    link: "https://www.ptw.com/",
  },
  {
    // name: "Unisys",
    logo: "http://api.qspiders.com/media/clients/2000px-Unisys_logo.svg__iTADfwk.png",
    link: "https://www.unisys.com/",
  },
]);
</script>

<style scoped>
.partners-section {
  background-color: #eeee;
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
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  aspect-ratio: 16 / 9;
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
