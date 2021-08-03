import Vue from 'vue';
import Props from './components/Props';

new Vue({
    el: '#app',
    
    components: {
        Props
    },
    
    data: {
        post: {
            id: 1,
            title: 'My title',
        }
    }
});