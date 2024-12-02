<script>
export default {
  data() {
    return {
      cards: [
        {
          para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          para2: "Suspendisse varius enim in eros elementum tristique.",
          buttonText: "Learn More",
        },
        {
          para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          para2: "Suspendisse varius enim in eros elementum tristique.",
          buttonText: "Learn More",
        },
        {
          para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          para2: "Suspendisse varius enim in eros elementum tristique.",
          buttonText: "Learn More",
        },
        {
          para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          para2: "Suspendisse varius enim in eros elementum tristique.",
          buttonText: "Learn More",
        },
        {
          para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          para2: "Suspendisse varius enim in eros elementum tristique.",
          buttonText: "Learn More",
        },
        {
          para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          para2: "Suspendisse varius enim in eros elementum tristique.",
          buttonText: "Learn More",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="p-2">
    <h1 class="text-h3 font-weight-medium pb-1">Courses</h1>
    <v-row dense>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(card, index) in cards"
        :key="index"
      >
        <v-card class="card-wrapper" elevation="2">
          <v-card-text>
            <p class="card-para">
              {{ card.para1 }}
            </p>
            <p class="card-para">
              {{ card.para2 }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block>
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
  /* -webkit-line-clamp: 3;  */
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
