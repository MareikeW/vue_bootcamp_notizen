<template>
    <div class="input-wrapper">
        <label :for="unique">{{ label }}</label>
        <input type="text" :id="unique" />
    </div>
</template>

<script>
    module.exports = {
        props: {
            label: String,
            unique: String,
        }
    }
</script>

<style scoped>
    .input-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }
    .input-wrapper > label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .input-wrapper > input {
        background: transparent;
        border: 1px solid #555ae4;
        border-radius: 5px;
        padding: 5px;
    }
</style>