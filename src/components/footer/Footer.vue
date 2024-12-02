<script>
export default {
  data() {
    return {
      socialLinks: [
        { icon: "mdi-youtube", url: "https://www.youtube.com", color: "red" },
        {
          icon: "mdi-facebook",
          url: "https://www.facebook.com",
          color: "blue",
        },
        {
          icon: "mdi-whatsapp",
          url: "https://www.whatsapp.com",
          color: "green",
        },
        {
          icon: "mdi-twitter",
          url: "https://www.twitter.com",
          color: "light-blue",
        },
      ],
    };
  },
};
</script>

<template>
  <v-app>
    <v-footer app class="footer">
      <v-container>
        <v-row justify="space-between" align="center">
          <!-- Left Side: Branches -->
          <v-col cols="12" md="6">
            <h3 class="footer-heading">Branches</h3>
          </v-col>

          <!-- Right Side: Social Media Icons -->
          <v-col cols="12" md="6" class="text-right text-center--mobile">
            <v-btn
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              icon
              class="social-btn"
            >
              <v-icon :color="link.color">{{ link.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
.footer {
  background-color: #f5f5f5;
  /* padding: 10px 0; */
}

.footer-heading {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.branches-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.branches-list li {
  margin-bottom: 5px;
}

.social-btn {
  margin: 0 10px;
}

.text-center--mobile {
  text-align: center;
}

@media (max-width: 600px) {
  .footer-heading {
    font-size: 16px;
  }

  .social-btn {
    margin: 5px;
  }
}
</style>
