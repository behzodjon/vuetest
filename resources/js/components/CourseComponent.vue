<template>
    <div>
        <div class="d-flex" style="justify-content: flex-end;">
            <a href="#" type="button" class="btn btn-primary  " data-toggle="modal" data-target="#exampleModal"
               @click="openAddModal()">
                Add <i class="fa fa-user-plus fa-1x"></i>
            </a>
        </div>
        <br>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Text</th>
                <th scope="col">Status</th>
                <th scope="col">Price</th>
                <th scope="col">Lesson count</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="course in courses.data" :key="course.id">

                <td>{{ course.name }}</td>
                <td>{{ course.category.name }}</td>
                <td>{{ course.description }}</td>
                <td>{{ course.status }}</td>
                <td>{{ course.price }}</td>
                <td>{{ course.lesson_count }}</td>
                                <td class="d-flex" style="align-items: center">
                                    <a @click="editCourse(course)" class="btn btn-success" href="#">Edit</a>
                                    <a @click="deleteCourse(course.id)" href="#" class="btn btn-danger">Delete</a>
                                </td>
            </tr>
            </tbody>
        </table>

        <pagination :data="courses" @pagination-change-page="getPagination"></pagination>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="edit ? updateCourse() : createCourse()">
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="form.name">
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="form.description">
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="form.status">
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="number" v-model="form.price">
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="number" v-model="form.lesson_count">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Categories</label>
                                <select v-model="form.category_id" class="form-control" id="exampleFormControlSelect1">
                                    <option v-for="cat in categories.data" :key="cat.id" :value="cat.id">{{ cat.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-success">Save</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
        
        Caorusel
<VueSlickCarousel ref="slick" :arrows="true" :dots="true">
<!-- <div> -->
     <a href="http://placehold.it/420x220">
        <img src="http://placehold.it/420x220" alt="">
    </a>
  <a href="http://placehold.it/420x220">
        <img src="http://placehold.it/420x220" alt="">
    </a>
    <!-- </div> -->
    </VueSlickCarousel>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'CourseComponent',
    components: { VueSlickCarousel },
    
    data() {
        return {
            form: new Form({
                id: '',
                name: '',
                category_id: '',
                description: '',
                status: '',
                price: '',
                lesson_count: '',
            }),
            categories: [],
            courses: {},
            edit: false,
             slickOptions: {
                 slidesToShow: 3,
                 infinite: true,
                        accessibility: true,
                        adaptiveHeight: false,
                        arrows: true,
                        dots: true,
                        draggable: true,
                        edgeFriction: 0.30,
                        swipe: true
                    },
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
    methods: {
        getPagination(page = 1) {
            axios.get('api/courses?page=' + page)
                .then(response => {
                    this.courses=response.data                                                                                                                                                                                                                                                                                               ;
                });
        },
        getCategories() {
            axios.get('/api/categories').then(res => {
                this.categories = res.data
            }).catch(err => console.log(err));
        },
        getCourses() {
            axios.get('/api/courses').then(res => {
                this.courses = res.data
            }).catch(err => console.log(err));
        },
        createCourse() {
            this.form.post('api/course')
                .then(response => {
                    console.log(response);
                    this.form.clear();
                    $('#exampleModal').modal('hide');
                })
                .catch(err => console.log(err))
        },
        editCourse(course) {
            this.form.clear();
            this.edit = true;
            this.form.reset();
            this.getCategories();
            $('#exampleModal').modal('show');
            this.form.fill(course)
        },
        updateCourse() {
            this.form.put('api/courses/' + this.form.id)
                .then(data => {
                    $('#exampleModal').modal('hide');
                    this.getCourses();
                })
                .catch(err => console.log(err));
        },
        deleteCourse(id) {
            axios.delete(`api/courses/${id}`)
                    .then((response) => {
                        this.getCourses();
                    })
                    .catch(err => console.log(err))

        },
        openAddModal() {
            this.edit = false;
            this.name = '';
            this.category_id = '';
            $('#exampleModal').modal('show');
            this.getCategories();
        },
         next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
            },
            beforeUpdate() {
        if (this.$refs.slick) {
            this.$refs.slick.destroy();
        }
    },
    updated() {
        this.$nextTick(function () {
            if (this.$refs.slick) {
                this.$refs.slick.create(this.slickOptions);
            }
        });
    },
    },
    created() {
        this.getPagination();
    },
}
</script>
