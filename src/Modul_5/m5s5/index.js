import Vue from 'vue';
import List from './components/List';

new Vue({
    el: '#app',
    
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
        },
        // index (key) wird von List-Komponente durchgegeben und dann aus dem obigen Array items entfernt
        removeItem: function (itemKey) {
            this.items.splice(itemKey, 1);
        }
    }
});