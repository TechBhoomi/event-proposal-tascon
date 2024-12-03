import axios from "axios";
import { acceptHMRUpdate, defineStore } from "pinia";

export const globalStore = defineStore("global-store", {
  state: () => ({
    courseList: [],
    placementStats: [],
    URL: import.meta.env.VITE_BASE_URL,
  }),
  actions: {
    async getCourseList() {
      try {
        const response = await axios.get(
          `${this.URL}categories/getAllCategories?organization=qspiders`
        );
        // console.log(response.data?.data, "response");
        this.courseList = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPlacementStats() {},
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(globalStore, import.meta.hot));
}
