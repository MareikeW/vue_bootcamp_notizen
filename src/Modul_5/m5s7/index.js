import Vue from 'vue';
import InputField from './components/InputField';
import SubmitButton from "./components/SubmitButton";

new Vue({
    el: '#app',
    
    components: {
        InputField, SubmitButton
    },
    
    data: {
        form: {
            submitted: false,
            first_name: '',
            last_name: '',
            email: '',
        }
    },
});