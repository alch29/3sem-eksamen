<script setup>

</script>

<template>
    <div class="footer">
        <div>
            <img src="../assets/images/Logo sommerfugl hvid.png" alt="logo">
            <p>Amfipladsen 13, 5000 Odense C <br>
                Telefon: +45 66 13 16 16 <br>
                Email: info@cafebio.dk
            </p>
            <p>
                <strong>Åbningstider</strong><br>
                Man-Lørdag: 9.30 -23.00 <br>
                Søndage: 9.30 - 22.30
            </p>
            <p>
                Helligdage åbner vi kl 11 <br>
                Køkkenet lukker 21.00 (søndag 20.00)
            </p>
        </div>
        <div>
            <h4>Sociale medier</h4>
            <div class="icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
        </div>
        <div>
            <h4>Info</h4>
            <ul>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Bestil billet</a></li>
                <li><a href="#">Gavekort</a></li>
            </ul>
            <img src="../assets/images/kontrolrapport.png" alt="Se kontrolrapport">
        </div>

    </div>
</template>

<style scoped>
    .footer {
        background-color: var(--red);
    }

    p {
        color: white;
        margin-top: 20px;
    }

    h4 {
        color: white;
    }

    .icons {
        display: flex;
        color: white;
        gap: 20px;
        font-size: 2rem;
        margin-top: 10px;
        cursor: pointer;
    }
    .icons i:hover {
        opacity: 0.6;
    }

    li a {
        text-decoration: none;
        font-family: "gill-sans-nova", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: white;
    }

    li a:hover {
        opacity: 0.6;
    }
</style>