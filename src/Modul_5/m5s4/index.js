import Vue from 'vue';
import MyButton from './components/MyButton';

new Vue({
    el: '#app',
    
    components: {
        MyButton
    },
    
    data: {
        message: '',
    },
    
    methods: {
        handleFormSubmitted: function () {
            this.message = 'CLICKED!';
        }
    }
});