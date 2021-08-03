<template>
    <div class="card-circle">{{ initials }}</div>
</template>

<script>
    module.exports = {
        props: ['name'],
        
        computed: {
            // Egal wie viele Namen in Card.vue eingegeben werden, 
            // es werden immer nur die ersten beiden Initialen ausgewählt.
            initials: function () {
                return this.name.match(/[A-Z]/g).slice(0, 2).join('');
            }
        }
    }
</script>

<style>
    .card-circle {
        background: linear-gradient(to right, #da4453, #89216b);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 75px;
        font-size: 24px;
        font-weight: bold;
        border-radius: 100%;
        padding: 5px;
        border: 3px solid #fff;
    }
</style>