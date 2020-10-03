<template>
    <div>
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
                        <form @submit.prevent="edit ? $emit('update-course',form.id) : $emit('create-course')">
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
                                    <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}
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
    </div>
</template>
<script>
export default {
    name: 'ModalForm',
    props:['categories','courses','form','edit'],
   data() {
        return {
            //
        }},
}
</script>
