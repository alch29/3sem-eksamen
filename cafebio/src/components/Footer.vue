<script setup>
import NewsletterForm from './NewsletterForm.vue';
</script>

<template>
    <div class="footer">
        <div>
            <img class="logo" src="../assets/images/Logo sommerfugl hvid.png" alt="logo">
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
                <div class="instagram-icon">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div class="facebook-icon">
                    <i class="fa-brands fa-facebook"></i>
                </div>
            </div>
        </div>
        <div>
            <h4>Info</h4>
            <ul>
                <RouterLink to="/contact" style="text-decoration: none; color: inherit;"><li><a>Kontakt</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Menu kort</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Film program</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Gavekort</a></li></RouterLink>
            </ul>
            <img class="kontrolrapport" src="../assets/images/kontrolrapport.png" alt="Se kontrolrapport">
        </div>
        <div>
            <NewsletterForm></NewsletterForm>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Cafe biografen · Amfipladsen 13 · 5000 Odense C  
        Tlf: 66 13 16 16 · info@cafebio.dk · CVR 54104510</p>
    </div>
</template>

<style scoped>
    .footer {
        background-color: var(--red);
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 38px
    }

    p {
        color: white;
        margin-top: 20px;
    }

    h4 {
        color: white;
    }
    .logo {
        height: 90px; 
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

    .facebook-icon {
        font-size: 1.8rem;
    }

    ul {
        list-style: none;
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
    .kontrolrapport {
        height: 40px;
        margin-top: 10px;
        cursor: pointer;
        box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
    .kontrolrapport:hover {
        opacity: 0.8;
    }
    .footer-bottom {
        display: flex;
        height: 100px;
        background-color: var(--wine);
        text-align: center;
        padding: 0 38px 0 38px;
        align-items: center;
    }

    .footer-bottom p {
        margin: 0;
    }

    @media (min-width: 800px) {
        .footer {
            flex-direction: row-reverse;
            justify-content: space-around;
            align-items: flex-end;
        }
        .footer-bottom {
            justify-content: center;
            height: 80px;
        }
    }
</style>