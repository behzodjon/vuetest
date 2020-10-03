<template>
  <div>
    <h2>Slides</h2>
    <div class="d-flex">
      <button class="btn btn-success" v-text="'All'" />
      <div v-for="category in categories" :key="category.id">
        <button class="btn btn-success" v-text="category.name" />
      </div>
    </div>
    <br />
    <VueSlickCarousel v-if="courses.length > 0" v-bind="settings">
      <div v-for="course in courses" :key="course.id">
        <div>
          <h3>{{ course.name }}</h3>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Carousel",
  props: ["categories", "courses"],
  components: { VueSlickCarousel },
  data() {
    return {
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
    //
  },
};
</script>
