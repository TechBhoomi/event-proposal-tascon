import { createRouter, createWebHashHistory } from "vue-router";
import About from "../components/about/About.vue";
import Cards from "../components/cards/Cards.vue";
import Carousel from "../components/carousel/Carousel.vue";
import Placements from "../components/placements/Placements.vue";
import WhyQspiders from "../components/whyqspiders/WhyQspiders.vue";

const routes = [
  {
    path: "/",
    name: "Carousel",
    component: Carousel,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Cards,
  },
  {
    path: "/placements",
    name: "Placements",
    component: Placements,
  },
  {
    path: "/whyQspiders",
    name: "Why-Qspiders",
    component: WhyQspiders,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (el) {
        const offset = 64; // Adjust this to match the navbar height in px
        const top = el.offsetTop - offset;
        return { top, behavior: "smooth" };
      }
    }
    return { top: 0 };
  },
});

export default router;
