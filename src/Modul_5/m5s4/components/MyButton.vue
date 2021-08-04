<template>
    <button v-on:click="handleButton" v-text="clicked ? 'CLICKED' : 'CLICK ME'"></button>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                clicked: false,
            }
        },
        
        methods: {
            handleButton: function () {
                this.clicked = true;
                
                // wird ausgesendet (emitted) an html-Datei
                this.$emit('got-clicked');
            }
        }
    }
</script>