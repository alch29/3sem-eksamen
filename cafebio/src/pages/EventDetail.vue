<template>
    <div v-if="event" class="background">
        <div class="banner-container">
          <img v-if="event.cover" :src="event.cover" alt="Event banner" class="banner-image" />
        </div>
        <div class="main-details">
          <div>
            <div class="back-button">
              <router-link to="/events">
                <a href="#"><i class="fa-solid fa-arrow-left-long"></i><strong>Tilbage</strong></a>
              </router-link>
             </div>
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
            </div>
            <div>
              <p class="text-event"><em v-html="formattedDescription"></em></p>
            </div>
            <div>
              <Button :href="`https://www.facebook.com/events/${event.id}`" hoverStyle="sand-hover">Tilmeld
              </Button>
            </div>
          </div>
        </div>
   </div>
    
    <div v-else>
    <p>Event not found. ID: {{ route.params.id }}</p> <!-- Tilføjet linje for at teste ID -->
    </div>

  </template>
  
<script setup>
// Vue bibliotek
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// Firebase-related imports/ knap
import { fetchEventFromFirebase } from '../firebaseService';
import Button from '../components/CTAButton.vue';


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
// Burde ændre mellemrum
const formattedDescription = computed(() => {
  return event.value?.description.replace(/\n/g, '<br>') || '';
});
</script>

<style scoped>

.background {
        background-image: url('../assets/images/site-background.png');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        /* min-height: 100vh; */
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
  margin-bottom: 40px;
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
  object-position: center; 
  transform: scale(1.2); 
}

.main-details {
  display: flex;
  flex-direction: column;  
  padding: 20px 38px 60px 38px;
  width: 100%;
  /* margin: auto; */
}

.fa-location-dot{
    color: #AE2824;
}
.fa-arrow-left-long {
  margin-right: 0;
}
.back-button {
  margin-bottom: 28px;
}

.back-button a {
  color: var(--off-black);
  font-size: 1.2rem;
}
.back-button i {
  color: var(--off-black);
  font-size: 1.1rem;
}
.back-button a:hover {
  opacity: 0.6;
}

@media (min-width: 800px) {
  .text-event {
    max-width: 500px;
  }

  .main-details {
    align-items: center;
  }
}
</style>