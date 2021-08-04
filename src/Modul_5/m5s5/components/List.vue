<template>
    <ul>
        <li v-for="(item, key) in items">
            <div>{{ item }}</div>
            // sendet "remove-item" Methode plus Index (key) des geklickten items aus
            <button v-on:click="$emit('remove-item', key)">X</button>
        </li>
    </ul>
</template>

<script>
    module.exports = {
        props: ['items']
    }
</script>

<style></style>