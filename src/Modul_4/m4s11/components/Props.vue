<template>
    // wennn visible === false, dann wird die Komponente nicht angezeigt (gelöscht)
    <div v-if="visible">
        <h1>My Show</h1>
        
        <p><strong>Title</strong> {{ title }}</p>
        <p><strong>Episode #</strong> {{ episodeNumber }}</p>
        <p><strong>Published</strong> {{ published }}</p>
    </div>
</template>

<script>
    module.exports = {
        props: {
            title: {
                type: String,
                default: 'Untitled'
            },
            episodeNumber: {
                type: Number,
                default: 0
            },
            published: {
                type: [Boolean, Number],
                default: false
            },
            visible: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style>
    
</style>