<script setup>
import { computed, onBeforeMount } from "vue";
import { globalStore } from "../../store/globalStore";
import { useDisplay } from "vuetify";

const { xs, sm, md, lg, xl } = useDisplay();
const cardHeightClasses = computed(() => {
  if (xs.value) return "h-56"; // Extra-small screens
  if (sm.value) return "h-56"; // Small screens
  if (md.value) return "h-64"; // Medium screens
  if (lg.value) return "h-48"; // Large screens
  if (xl.value) return "h-44"; // Extra-large screens
  return "h-56"; // Default
});
const titleClases = computed(() => {
  if (xs.value) return "text-[1rem] font-bold font-bold text-start"; // Extra-small screens
  if (sm.value) return "text-[1.2rem] font-bold font-bold text-start"; // Small screens
  if (md.value) return "text-[1rem]"; // bold screens
  if (lg.value) return "text-[1rem] font-bold font-bold text-start"; // Large screens
  if (xl.value) return "text-lg font-bold font-bold text-start"; // Extra-large screens
  return "h-auto"; // Default
});
const GLOBAL_STORE = globalStore();
const courseList = computed(() => GLOBAL_STORE.$state.courseList);
onBeforeMount(async () => {
  GLOBAL_STORE.getCourseList();
});
</script>

<template>
  <section class="pt-7 pb-7">
    <h1 class="text-h3 font-weight-bold pb-4">Courses</h1>
    <v-row :no-gutters="false">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        gap="2"
        align="center"
        v-for="(course, index) in courseList[0]?.courseResponse"
        :key="index"
      >
        <v-card :class="cardHeightClasses" :hover="true" rounded="lg">
          <section class="p-3">
            <div class="flex gap-2 justify-start items-center">
              <img :src="course?.icon" alt="" class="h-8 h" />
              <div :class="titleClases">
                {{ course?.title }}
              </div>
            </div>
          </section>
          <section class="p-3">
            <div class="text-justify text-base font-medium">
              {{ course?.description }}
            </div>
            <div>
              <!-- <v-btn>View</v-btn> -->
            </div>
          </section>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.card-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-para {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  line-height: 1.5;
}

v-btn {
  margin-top: auto;
}
</style>
