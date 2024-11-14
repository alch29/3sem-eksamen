<template>
    <div>
      <h1>Facebook Events</h1>
      <ul>
        <li v-for="event in events" :key="event.id">
          <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted, watchEffect } from 'vue';
    import { fetchEventsFromFirebase } from '../firebaseService';  // Importér funktionen fra firebaseService

    const events = ref([]);  // Opret en reaktiv liste til at gemme events

    async function loadEvents() {
      events.value = await fetchEventsFromFirebase();  // Hent events fra Firebase og gem i `events`
    }

    onMounted(loadEvents);  // Kald loadEvents, når komponenten monteres
    
     // Overvåg ændringer og genindlæs events
    watchEffect(async () => {
      events.value = await fetchEventsFromFirebase();
    });
      
  </script>
  
  <style scoped>

  </style>