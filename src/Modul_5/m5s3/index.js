import Vue from 'vue';

new Vue({
    el: '#app',
    
    data: {
        exampleOne: 0,
        exampleTwo: 0,
        exampleThree: "",
        isVisible: false,
        globalPage: true
    },
    
    methods: {
        addTwo: function() {
            return this.exampleTwo += 2;
        },
        addData: function(str) {
            return this.exampleThree = str;
        },
        showText: function() {
            return this.isVisible = true;
        },
    }
});