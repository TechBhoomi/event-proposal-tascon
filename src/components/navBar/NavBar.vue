<template>
  <template>
    <v-btn @click="dialog = true"> Open Dialog </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </template>
  <!-- App Bar -->
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none" />
    <v-app-bar-title
      class="font-bold text-2xl text-gray-600"
      style="font-weight: 600"
    >
      <section>
        <router-link to="/" :class="logoClasses">Q-spiders</router-link>
        <p :class="taglineClasses">Largest Software Training Organization</p>
      </section>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :ripple="false"
        @click="navigateToSection(item?.link)"
        class="d-none d-lg-flex hover:text-orange-400 font-semibold"
      >
        <!-- <router-link
          class="hover:text-orange-400 font-semibold"
          :to="item.link"
        > -->
        {{ item.title }}
        <!-- </router-link> -->
      </v-btn>
      <v-btn class="font-semibold" @click="dialog = true">
        <span class="font-semibold"> Contact </span>
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
          ><router-link
            class="hover:text-orange-400 font-semibold"
            :to="item.link"
          >
            {{ item.title }}
          </router-link></v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify/dist/vuetify-labs.js";

const drawer = ref(false);
const { xs, sm, md, lg, xl } = useDisplay();
const logoClasses = computed(() => {
  if (xs.value)
    return "text-[1rem] font-bold font-bold text-start text-orange-400"; // Extra-small screens
  if (sm.value)
    return "text-[1.6rem] font-bold font-bold text-start text-orange-400"; // Small screens
  if (md.value) return "text-[1rem]"; // bold screens
  if (lg.value)
    return "text-[1.6rem] font-bold font-bold text-start text-orange-400"; // Large screens
  if (xl.value)
    return "text-[1.6rem] font-bold font-bold text-start text-orange-400"; // Extra-large screens
  return "h-auto"; // Default
});
const taglineClasses = computed(() => {
  if (xs.value) {
    return "text-sm font-semibold";
  }
  if (sm.value) {
    return "text-base font-semibold";
  }
  if (md.value) {
    return "text-base font-semibold";
  }
  if (lg.value) {
    return "text-base font-semibold";
  }
  if (xl.value) {
    return "text-base font-semibold";
  }
  return "text-base font-semibold";
});
const router = useRouter();
const navigateToSection = section => {
  router.push(section);
};
const menuItems = [
  { title: "About", link: "/#about" },
  { title: "Courses", link: "/#courses" },
  { title: "Placements", link: "/#placements" },
];
let dialog = ref(false);
</script>

<style scoped>
/* Scoped styles for customization */
</style>
