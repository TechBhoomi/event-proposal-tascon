<script setup>
import { computed, onBeforeMount } from "vue";
import { globalStore } from "../../store/globalStore";
import { useDisplay } from "vuetify";

const { xs, sm, md, lg, xl } = useDisplay();
const cardHeightClasses = computed(() => {
  if (xs.value) return "h-48"; // Extra-small screens
  if (sm.value) return "h-48"; // Small screens
  if (md.value) return "h-40"; // Medium screens
  if (lg.value) return "h-40"; // Large screens
  if (xl.value) return "h-40"; // Extra-large screens
  return "h-56"; // Default
});
const titleClases = computed(() => {
  if (xs.value) return "text-[1rem] font-bold text-start"; // Extra-small screens
  if (sm.value) return "text-[1.2rem] font-bold text-start"; // Small screens
  if (md.value) return "text-[1rem]"; // Medium screens
  if (lg.value) return "text-[1.2rem] font-bold text-start"; // Large screens
  if (xl.value) return "text-xl font-bold text-start"; // Extra-large screens
  return "h-auto"; // Default
});
const headingClasses = computed(() => {
  if (xs.value) return "text-[2rem] font-bold text-start"; // Extra-small screens
  if (sm.value) return "text-[2rem] font-bold text-start"; // Small screens
  if (md.value) return "text-[2.5rem] font-bold text-start"; // Medium screens
  if (lg.value) return "text-[2.5rem] font-bold text-start"; // Large screens
  if (xl.value) return "text-[2.5rem] font-bold text-start"; // Extra-large screens
  return "text-[2.5rem] font-bold text-start"; // Default
});
const courseSectionPadding = computed(() => {
  if (xs.value) return "p-3"; // Extra-small screens
  if (sm.value) return "p-3"; // Small screens
  if (md.value) return "p-10"; // Medium screens
  if (lg.value) return "p-10"; // Large screens
  if (xl.value) return "p-10"; // Extra-large screens
  return "p-10"; // Default
});

const GLOBAL_STORE = globalStore();
const courseList = computed(() => GLOBAL_STORE.$state.courseList);
onBeforeMount(async () => {
  GLOBAL_STORE.getCourseList();
});
</script>

<template>
  <section>
    <h1 class="text-[#FF7F3E] pb-3" :class="headingClasses">Courses</h1>
    <article
      class="rounded-3xl m-auto bg-[#EEEEEE]"
      :class="courseSectionPadding"
    >
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
                <img :src="course?.icon" alt="" class="h-10" />
                <div :class="titleClases" class="font-sans">
                  {{ course?.title }}
                </div>
              </div>
            </section>
            <section class="flex flex-wrap">
              <div
                class="p-1 text-justify text-base"
                v-for="sub in course?.subjects"
                :key="sub"
              >
                <v-btn
                  color="orange-lighten-1"
                  :text="sub?.charAt(0).toUpperCase() + sub?.slice(1)"
                  border="thin"
                  class="text-none"
                  size="small"
                  variant="tonal"
                  flat
                ></v-btn>
              </div>
              <div>
                <!-- <v-btn>View</v-btn> -->
              </div>
            </section>
          </v-card>
        </v-col>
      </v-row>
    </article>
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

/* Optional fallback for custom CSS grid if Tailwind is unavailable */
.subject-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 8px; /* Adjust gap as needed */
}
</style>
