<template>
  <div>
    <h2>Slides</h2>
    <div class="d-flex">
      <button @click="all" class="btn btn-success" v-text="'All'" />
      <div v-for="category in categories" :key="category.id">
        <button
          @click="selectCategory(category.id)"
          class="btn btn-success"
          v-text="category.name"
        />
      </div>
    </div>
    <br />
    <VueSlickCarousel v-if="filteredCourses.length > 0" v-bind="settings">
      <div v-for="course in filteredCourses" :key="course.id">
        <div>
          <h3  v-text="course.name"/>
        </div> 
      </div>
    </VueSlickCarousel>
    <div v-if="filteredCourses.length ==0">
      <h3>No,course available</h3>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Carousel",
  props: ["categories", "courses"],
  components: { VueSlickCarousel },
  data() {
    return {
      selectedCategoryId: '',
      settings: {
        dots: true,
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // touchThreshold: 5,
      },
    };
  },
  methods: {
    all() {
      this.selectedCategoryId='';
    },
    selectCategory(id) {
      this.settings.slidesToScroll = 1;
      this.settings.slidesToShow = 1;
      this.selectedCategoryId = id;
    },
  },
  computed: {
    filteredCourses() {
      if (this.selectedCategoryId === "") {
        return this.courses;
      } else if (this.selectedCategoryId != "") {
        return this.courses.filter(
          (course) => course.category_id == this.selectedCategoryId
        );
      }
    },
  },
};
</script>
