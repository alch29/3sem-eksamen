<script setup>
import Header from './components/Header.vue';
import { onMounted } from 'vue';
import { fetchFacebookEvents } from './facebookService';  // Følger den vores sti?
import { syncFacebookEventsToFirebase } from './facebookService';
import Footer from './components/Footer.vue';

onMounted(async () => {
  const events = await fetchFacebookEvents();
  console.log("Events hentet fra Facebook:", events);  

  console.log("Starter synkronisering af Facebook events til Firebase...");
  await syncFacebookEventsToFirebase();
});
</script>

<template>
    <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>