<script setup>
import BookTable from '@/components/BookTable.vue';
import Map from '@/components/Map.vue';
</script>

<template>
    <div>
        <div class="container">
            <div>
                <img class="map-illustration" src="../assets/images/cafebio-kort.jpg" alt="illustreret kort af Café Biografens lokation.">
            </div>
            <div>
                <h1>Kontakt</h1>
                <p>Amfipladsen 13, 5000 Odense C</p>
                <p>Telefon: +45 66 13 16 16 <br>
                E-mail: info@cafebio.dk</p>
                <h4><strong>Åbningstider</strong></h4>
                <p>Man-Lørdag: 9.30 -23.00 <br>
                Søndage: 9.30 - 22.30</p>
                <p>Helligdage åbner vi kl 11. <br>
                Køkkenet lukker 21.00 (søndag 20.00)</p>
            </div>
        </div>
        <BookTable></BookTable>
        <Map></Map>
    </div>
</template>

<style scoped>
 .map-illustration {
    width: 100%;
 }
 .container {
    padding: 38px;
 }

 h4 {
    margin-top: 12px;
 }

 p {
    margin-bottom: 10px;
 }
</style>