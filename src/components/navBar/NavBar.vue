<template>
  <!-- App Bar -->
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none" />
    <v-app-bar-title
      class="font-bold text-2xl text-gray-600"
      style="font-weight: 600"
    >
      <section>
        <a href="/" class="text-orange-400">Q-spiders</a>
        <p class="text-xs">Largest Software Training Organization</p>
      </section>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :ripple="false"
        class="font-semibold d-none d-lg-flex"
      >
        <a class="hover:text-orange-400 font-semibold" :href="item.link">
          {{ item.title }}
        </a>
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        @click="drawer = false"
      >
        <v-list-item-title
          ><span class="hover:text-orange-400 font-semibold">
            {{ item.title }}
          </span></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

const menuItems = [
  { title: "About", link: "#about" },
  { title: "Courses", link: "#courses" },
  { title: "Placements", link: "#placements" },
  { title: "Stats", link: "#stats" },
];
</script>

<style scoped>
/* Scoped styles for customization */
</style>
