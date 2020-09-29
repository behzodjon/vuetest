require('./bootstrap');


window.Vue = require('vue');

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//vform
import {Form, HasError, AlertError} from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.component('course-component', require('./components/CourseComponent.vue').default);
const app = new Vue({
    el: '#app',
});
