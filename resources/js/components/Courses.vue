<template>
  <div>
    <div class="d-flex" style="justify-content: flex-end">
      <a
        href="#"
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="openAddModal()"
      >
        Add
      </a>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Status</th>
          <th scope="col">Price</th>
          <th scope="col">Lesson count</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td v-text="course.name"></td>
          <td>{{ course.category.name }}</td>
          <td>{{ course.status }}</td>
          <td>{{ course.price }}</td>
          <td>{{ course.lesson_count }}</td>
          <td class="d-flex" style="align-items: center">
            <button @click="editCourse(course)" class="btn btn-success btn-sm" v-text="'Edit'"/>
            <button
              class="btn btn-danger btn-sm"
              @click="destroy(course.id)"
              v-text="'Delete'"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <ModalForm
      :categories="categories"
      :form="form"
      :edit="edit"
      @create-course="createCourse"
      @update-course="updateCourse" />
    <Carousel :categories="categories" :courses="courses" />
  </div>
</template>

<script>
import ModalForm from "../components/ModalForm";
import Carousel from "../components/Carousel";
export default {
  components: { ModalForm, Carousel },
  name: "Courses",
  data() {
    return {
      form: new Form({
        id: "",
        name: "",
        category_id: "",
        description: "",
        status: "",
        price: "",
        lesson_count: "",
      }),
      courses: [],
      categories: [],
      edit: false,
    };
  },
  methods: {
    createCourse() {
      this.form
        .post("api/course")
        .then((response) => {
          this.form.clear();
          $("#exampleModal").modal("hide");
          this.courses = response.data.data;
        })
        .catch((err) => console.log(err));
    },
    updateCourse() {
      this.form
        .put("api/courses/" + this.form.id)
        .then((response) => {
          $("#exampleModal").modal("hide");
          this.courses = response.data.data;
        })
        .catch((err) => console.log(err));
    },

    destroy(id) {
      axios.delete(`/courses/${id}`).then((response) => {
        this.courses = response.data.data;
      });
    },
    editCourse(course) {
      this.form.clear();
      this.edit = true;
      this.form.reset();
      this.categories;
      $("#exampleModal").modal("show");
      this.form.fill(course);
      console.log(this.edit);
    },
    openAddModal() {
      this.edit = false;
      this.form.clear();
      this.form.reset();
      $("#exampleModal").modal("show");
      this.categories;
    },
  },
  created() {
    axios
      .get("courses")
      .then((response) => (this.courses = response.data.data));
    axios
      .get("categories")
      .then((response) => (this.categories = response.data.data));
  },
};
</script>
