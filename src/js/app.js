import 'core-js/stable';
import 'regenerator-runtime/runtime';
import es6Promise from "es6-promise";
window.Vue = require('vue');
es6Promise.polyfill()

/** COMPONENTS **/
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueKinesis from 'vue-kinesis'
Vue.use(VueKinesis)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
/** COMPONENTS **/

/** VIEW **/
import Main from '../vue/Main';
/** VIEW **/

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

new Vue({
    name: 'Arsanandha',
    el: '#app',
    render: h => h(Main)
});

