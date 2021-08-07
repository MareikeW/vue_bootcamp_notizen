<template>
    <!-- Ein Objekt mit Daten wird direkt hier weitergegeben -->
    <button @click="$emit('my-custom-event', { id: 123, title: 'My Cool Title' })">Click Me</button>

    <!-- Das Datenobjekt wird unten gespeichert und hier gerufen -->
    <button @click="$emit('my-custom-event', info)">Click Me</button>

    <!-- Das Datenobjekt ist in einer berechneten Eigenschaft gespeichert und wird hier gerufen -->
    <button @click="$emit('my-custom-event', infoTest)">Click Me</button>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                info: { id: 123, title: 'My Cool Title' }
            }
        },

        computed: {
            infoTest: function () {
                return { id: 123, title: 'My Cool Title' };
            }
        }
    }
</script>