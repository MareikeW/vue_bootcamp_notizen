import Vue from "vue";
import TestComponent from "./TestComponent";

Vue.component('test-component', TestComponent);

new Vue({
    el: '#app',

    data: {
        message: 'test'
    }
});