import Vue from 'vue';
import MyButton from './components/Button';

new Vue({
    el: '#app',
    
    components: {
        MyButton
    },
    
    data: {
        data: null,
    },
    
    methods: {
        // mit Klick auf den Button, wird "data" erstellt
        handleMyButton: function (data) {
            this.data = data;
        }
    }
});