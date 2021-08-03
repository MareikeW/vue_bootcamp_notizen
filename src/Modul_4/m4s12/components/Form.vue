<template>
    <form method="post" action="#">
        <input-field unique="first_name" label="First Name"></input-field>
        <input-field unique="last_name" label="Last Name"></input-field>
        <input-field unique="email" label="Email"></input-field>
        <div class="input-wrapper">
                <button>Contact Us</button>
        </div>
    </form>
</template>

<script>
    const InputField = require("./InputField");
    
    module.exports = {
        components: {
            InputField
        },
        
        props: {
            label: String,
            unique: String,
        }
    }
</script>

<style scoped>
    .input-wrapper > button {
        background: #555ae4;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
    }
</style>