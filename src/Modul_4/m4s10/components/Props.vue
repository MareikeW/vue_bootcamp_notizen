<template>
    <div>
        <h1>Advanced Props</h1>
        <div>Views: {{ views }}</div>
        <div>Is published: {{ isPublished }}</div>
        <div>{{ id }} {{ title }}</div>
    </div>
</template>

<script>
    module.exports = {
        // gibt die Datentypen für jeden prop an
        props: {
            id: Number,
            title: String,
            isPublished: {
                // prop darf ein Boolean oder eine Zahl sein
                type: [Boolean, Number],
                default: false
            },
            views: Number,
        }
    }
</script>

<style>
    
</style>