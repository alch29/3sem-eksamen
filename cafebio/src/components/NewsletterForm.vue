<script setup>
import Button from './CTAButton.vue'
</script>

<template>
    <h4>Nyhedsbrev</h4>
    <p>Hold dig opdateret på kommende film <br>
    og arrangementer – tilmeld dig vores <br>
    nyhedsbrev i dag!</p>
    <form>
        <div>
            <p>Fornavn:</p>
            <input type="text" placeholder="Fornavn">
        </div>
        <div>
            <p>E-mail:</p>
            <input type="text" placeholder="E-mail">
        </div>
        <div class="submit-button">
            <Button hoverStyle="red-hover">Tilmeld</Button>
        </div>
    </form>
</template>

<style scoped>
    h4 {
        color: white;
    }

    p {
        color: white;
        margin-top: 10px;
    }

    input {
        height: 32px;
        width: 248px;
        border-radius: 4px;
        border: solid 1px var(--off-black);
        font-family: "gill-sans-nova", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: rgba(0, 0, 0, 0.8);
        padding-left: 8px;
        background-color: white;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
    }
    .submit-button {
        margin-top: 10px;
    }
</style>