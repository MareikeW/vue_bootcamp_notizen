<template>
    <div class="card">
        <div class="card-title">Your Instructor</div>
        <user-circle :name="name"></user-circle>
        <div class="card-name">
            <div class="light-font">{{ splitName[0] }}</div>
            <div>{{ splitName[1] }}</div>
        </div>
        <div class="card-company">{{ company }}</div>
    </div>
</template>

<script>
    // Zugriff auf Komponente UserCircle in Card Komponente
    const UserCircle = require('./UserCircle');
    
    // Zugriff auf Komponente UserCircle in Card Komponente
    module.exports = {
        components: {
            UserCircle
        },
        
        props: ['name', 'company'],
        
        computed: {
            // teilt den Namen auf, damit sie unterschiedliche styles bekommen können
            splitName: function () {
                return this.name.split(' ');
            }
        }
    }
</script>

<style>
    .card {
        background: rgb(4, 84, 104);
        color: #dff1f5;
        padding: 15px;
        border-radius: 0 0 15px 15px;
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-title {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .card-name {
        display: flex;
        text-transform: uppercase;
        margin-top: 15px;
    }
    .light-font {
        color: #7dd2d5;
        margin-right: 5px;
    }
    .card-company {
        font-size: 14px;
        font-style: italic'
    }
</style>