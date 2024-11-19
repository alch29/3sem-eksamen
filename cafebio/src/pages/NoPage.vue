<script setup>

</script>

<template> 
    <div class="container">
        <div class="text">
            <h1>Hov! Denne side eksisterer ikke</h1>
            <p>Da dette kun er en prototype, er flere sider stadig under konstruktion.</p>
        </div>
        <div>
            <img src="../assets/images/Sommerfugl rød.png" alt="Sommerfugl logo i rød farve.">
        </div>
    </div>
</template>

<style scoped>
    .container {
        height: 100vh;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 38px;
    }

    img {
        max-height: 180px;
    }

    .text {
        max-width: 240px;
    }

    h1 {
        margin-bottom: 8px;
    }

    @media (max-width: 680px) {
        .container {
            flex-direction: column-reverse;
        }

        img {
            margin-bottom: 18px;
        }
    }
</style>