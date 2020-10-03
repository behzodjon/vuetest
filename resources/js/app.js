require('./bootstrap');
import VueRouter from 'vue-router';

import App from './App.vue'

window.Vue = require('vue');


import router from "./router.js";
import axios from './axios';

window.axios = axios;

Vue.use(VueRouter);


//vform
import {Form, HasError, AlertError} from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
    });
