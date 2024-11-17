<script setup>
import Button from './CTAButton.vue';
</script>

<template>
    <div class="book-table-container">
        <!-- <div>
            <img class="illustration" src="../assets/images/reserverbordillustration.png" alt="Illustration af dækket bord.">
        </div> -->
        <div>
            <div>
                <h1>Reserver bord</h1>
            </div>
            <div class="paragraphs">
                <p>Ønsker du at spise hos os? Reserver bord på <strong>66 13 16 16</strong> eller mail til <strong>bordbestilling@cafebio.dk</strong> med tidspunkt, antal og dit tlf.nr.</p>
                <br>
                <p>Bemærk, reservationen er først gyldig ved bekræftelse. Skal du til teater, koncert eller biograf? Oplys gerne sluttidspunkt, så vi kan bruge bordet flere gange.</p> 
                <br>
                <p>For selskaber over 10 personer bedes maden forudbestilles med valg mellem max. fire retter.</p>
            </div>
            <div>
                <form>
                    <div class="input-container">
                        <p>Antal personer:</p>
                        <input type="text" placeholder="2 personer">
                    </div>
                    <div class="input-container">
                        <p>Dato:</p>
                        <input type="text" placeholder="DD/MM/YYY">
                    </div>
                    <div class="input-container">
                        <p>Tidspunkt:</p>
                        <input type="text" placeholder="18:00">
                    </div>
                    <div class="input-container">
                        <p>Telefon nummer:</p>
                        <input type="text" placeholder="Indtast telefon nr.">
                    </div>
                    <div class="input-container">
                        <p>E-mal:</p>
                        <input type="text" placeholder="E-mail">
                    </div>
                    <div class="button">
                        <Button hoverStyle="sand-hover">Reserver bord</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .book-table-container {
        background-color: var(--sand);
        padding: 38px 38px 60px 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: none;
    }

    input {
        height: 32px;
        width: 100%;
        max-width: 300px;
        border-radius: 4px;
        border: solid 1px var(--off-black);
        font-family: "gill-sans-nova", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: rgba(0, 0, 0, 0.8);
        padding-left: 8px;
        background-color: white;
    }
    .input-container {
        margin-top: 10px;
    }
    .button {
        margin-top: 10px;
    }

    form {
        margin-top: 20px;
        display: grid;
    }
    .paragraphs {
        max-width: 600px;
    }

    @media (min-width: 800px) {
        form {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 30px;
        }
        .button {
        margin-top: auto;
        }
        .book-table-container {
        background-image: url('../assets/images/reserverbord.png');
        background-size: 300px;
        background-repeat: no-repeat;
        background-position: 10% center;
        }
    }
</style>