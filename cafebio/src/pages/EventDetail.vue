<template>
    <div v-if="event">
        <div class="banner-container">
            <img class="banner-image" src="/src/assets/images/event-img.png" alt="Event banner" />
        </div>
        <div class="main-details">
        <h1>{{ event.name }}</h1>
         <!-- Lokation -->
         <p v-if="event.place && event.place.name">
        <i class="fa-solid fa-location-dot"></i>
        {{ event.place.name }}
        </p>
    
      <!-- Start Dato -->
       <div class="start-day">
        <p>
        <span>
            <i class="fa-regular fa-calendar-days"></i>
            Start dato:
        </span> {{ formatDate(event.start_time) }}
        </p>
        <p>
        <span>
            <i class="fa-regular fa-clock"></i>
             Starttidspunkt:
            </span> {{ formatTime(event.start_time) }}
        </p>
    </div>

    <!-- Slut Dato -->
     <div class="end-day">
        <p>
        <span>
            <i class="fa-regular fa-calendar-days"></i>
            Slut dato:
        </span> {{ formatDate(event.end_time) }}
        </p>
        <p>
        <span>
            <i class="fa-regular fa-clock"></i>
            Sluttidspunkt:
        </span> {{ formatTime(event.end_time) }}
        </p>
     
      <p class="text-event"><em>{{ event.description }}</em></p>
       
      <!-- Tilmeld-Knap -->
      <a v-if="event.id" :href="`https://www.facebook.com/events/${event.id}`" target="_blank" class="tilmeld-knap">
      Tilmeld
      </a>
      
      </div>
    </div>
   </div>
    
    <div v-else>
    <p>Event not found. ID: {{ route.params.id }}</p> <!-- Tilføjet linje for at teste ID -->
    </div>

  </template>
  
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { syncFacebookEventsToFirebase } from '../facebookService';
import { fetchEventFromFirebase } from '../firebaseService';

const route = useRoute();
const event = ref(null);

async function loadEvent() {
  const eventId = route.params.id;  // Hent event-ID fra URL'en
  // Hent event fra Firebase og gem det i `event`
  if (eventId) {
    event.value = await fetchEventFromFirebase(eventId);
  }
}

// Funktion til at formatere datoen alene
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Funktion til at formatere tiden alene
const formatTime = (dateString) => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit",
  }).replace('.', ':');  // Skift punktum til kolon i tiden
  return `kl. ${time}`;  // Tilføj "kl." foran tiden
};


onMounted(loadEvent);

// Overvåg ændringer i route.params.id og kald loadEvent ved ændring
watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId !== oldId) {
      loadEvent();
    }
  }
);
</script>

<style scoped>
h1 {
  font-size: 3rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

span {
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
}

i {
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

.start-day {
  margin-top: 2rem;
}

.end-day {
  margin-top: 1rem;
}

.text-event {
  margin-top: 2rem;
}

.banner-container {
  width: 100%;         
  overflow: hidden;     
}

.banner-image {
  width: 100%;          
  height: 300px;        
  display: block;       
  object-fit: cover;    
}

.main-details {
  display: flex;
  flex-direction: column;  
  padding: 80px;
  width: 50%;
  margin: auto;

}


.tilmeld-knap {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 1rem;
    color: #1e1e1e;
    background-color: #F4A38A;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s;
}

.tilmeld-knap:hover {
    background-color: #AE2824;
  color: #F4A38A;
}

.fa-location-dot{
    color: #AE2824;
}
</style>