<script setup>
import { onBeforeMount } from "vue";
import { globalStore } from "../../store/globalStore";

// export default {
//   data() {
//     return {
//       cards: [
//         {
//           para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           para2: "Suspendisse varius enim in eros elementum tristique.",
//           buttonText: "Learn More",
//         },
//         {
//           para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           para2: "Suspendisse varius enim in eros elementum tristique.",
//           buttonText: "Learn More",
//         },
//         {
//           para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           para2: "Suspendisse varius enim in eros elementum tristique.",
//           buttonText: "Learn More",
//         },
//         {
//           para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           para2: "Suspendisse varius enim in eros elementum tristique.",
//           buttonText: "Learn More",
//         },
//         {
//           para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           para2: "Suspendisse varius enim in eros elementum tristique.",
//           buttonText: "Learn More",
//         },
//         {
//           para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           para2: "Suspendisse varius enim in eros elementum tristique.",
//           buttonText: "Learn More",
//         },
//       ],
//     };
//   },
// };
const GLOBAL_STORE = globalStore();
onBeforeMount(async () => {
  GLOBAL_STORE.getCourseList();
});
</script>

<template>
  <section class="p-2">
    <h1 class="text-h3 font-weight-medium pb-1">Courses</h1>
    <v-row dense>
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="4"
        gap="2"
        align="center"
        v-for="(card, index) in cards"
        :key="index"
      >
        <v-card
          class="rounded-lg p-2"
          elevation="2"
          max-height="195"
          color="#efefef"
        >
          <v-card-text>
            <p>
              {{ card.para1 }}
            </p>
            <p>
              {{ card.para2 }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              block
              slim="true"
              rounded
              size="small"
              variant="tonal"
            >
              {{ card.buttonText }}
            </v-btn>
          </v-card-actions>
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
