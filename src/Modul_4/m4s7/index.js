import Vue from 'vue';
import ExampleOne from "./components/ExampleOne.vue";
import ExampleTwo from "./components/ExampleTwo.vue";

Vue.component('example-one', ExampleOne);
Vue.component('example-two', ExampleTwo);

// verknüpft mit root element
new Vue({
    el: '#app',
    
    data: {
        message: 'test'
    }
});