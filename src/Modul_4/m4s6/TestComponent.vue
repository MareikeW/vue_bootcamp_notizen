// 1 Datei für 1 Komponente

<template>
    <div>
        Hello from Component {{ test }}
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                test: 'test hello'
            }
        }
    }
</script>

<style></style>