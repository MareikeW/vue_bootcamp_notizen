<template>
    <div class="wrapper">
        <a href="#">Link</a>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                
            }
        }
    }
</script>

// ohne "scoped" würden die Styles für alle Komponenten zugänglich sein
<style scoped>
    .wrapper {
        background: #ccc;
        margin: 15px;
    }

    .wrapper > a {
        font-size: 100px;
    }
</style>