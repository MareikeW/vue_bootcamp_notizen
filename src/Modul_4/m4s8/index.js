import Vue from 'vue';
import List from './components/List';

// 1. Weg war: Vue.component({'komponenten-name', Komponente})

new Vue({
    el: '#app',
    
    // zweiter Weg, um Komponenten zu importieren
    components: {
        List
    },
    
    data: {
        item: '',
        items: ['item1', 'item2']
    },
    
    methods: {
        addItem: function () {
            this.items.push(this.item);
            // this.items.unshift(this.item);
            this.item = '';
        }
    }
});