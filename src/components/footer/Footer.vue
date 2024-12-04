<template>
  <v-footer
    fluid="true"
    class="text-center d-flex flex-column"
    style="background-color: #3C4048"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        :icon="icon.icon"
        class="mx-4"
        variant="text"
        :style="{ color: icon.color }"
        @click="navigateToSocial(icon.link)"
      ></v-btn>
    </div>

    <div class="pt-0 contact-us text-[#efefef] underline underline-offset-4">
      Contact Us
    </div>

    <div class="contact-details pt-2">
      <section>
        <div>
          <v-icon color="#efefef">mdi-phone</v-icon>
          <span class="ml-2 text-[#efefef]"
            >+91 97424 90958 / +91 89519 66099</span
          >
        </div>
        <div>
          <v-icon color="#efefef">mdi-email</v-icon>
          <span class="ml-2 text-[#efefef]">hire@qspiders.com</span>
        </div>
      </section>
    </div>

    <!-- <div class="pt-0 contact-us text-[#fff]">Contact Us</div> -->

    <!-- <div class="contact-details pt-2">
      <v-row justify="center">
        <v-col cols="auto" class="d-flex align-center text-[#fff]">
          <v-icon>mdi-phone</v-icon>
          <span class="ml-2 text-[#fff]">+91 97424 90958 / +91 89519 66099</span> </v-col
        ><br />
        <v-col cols="auto" class="d-flex align-center text-[#fff]">
          <v-icon>mdi-email</v-icon>
          <span class="ml-2 text-[#fff]">hire@qspiders.com</span>
        </v-col>
      </v-row>
    </div> -->
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "facebook",
        icon: "mdi-facebook",
        color: "#3b5998",
        link: "https://www.facebook.com/qspiders.pune/?checkpoint_src=any",
      },
      {
        name: "twitter",
        icon: "mdi-twitter",
        color: "#1da1f2",
        link: "https://twitter.com/qspiders",
      },
      {
        name: "linkedin",
        icon: "mdi-linkedin",
        color: "#0077b5",
        link: "https://www.linkedin.com/school/qspiders/",
      },
      {
        name: "instagram",
        icon: "mdi-instagram",
        color: "#e1306c",
        link: "https://www.instagram.com/qspiderspune?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      {
        name: "youtube",
        icon: "mdi-youtube",
        color: "#FF0000",
        link: "https://www.youtube.com/@QSpiders_",
      },
    ],
  }),

  methods: {
    navigateToSocial(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>

.v-btn {
  font-size: 1.5rem;
}

.v-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .v-btn {
    font-size: 1.2rem;
  }

  .contact-details {
    font-size: 1rem;
  }

  .v-icon {
    font-size: 1.5rem;
  }
}
</style>
