<script setup>
    import { ref, onMounted, watchEffect } from 'vue';
    import { fetchEventsFromFirebase } from '../firebaseService';  // Importér funktionen fra firebaseService
    import { useRoute } from 'vue-router';
    import Button from '../components/CTAButton.vue';

    const events = ref([]);  // Opret en reaktiv liste til at gemme events

    async function loadEvents() {
      events.value = await fetchEventsFromFirebase();  // Hent events fra Firebase og gem i `events`
    }

    onMounted(loadEvents);  // Kald loadEvents, når komponenten monteres
    
     // Overvåg ændringer og genindlæs events
    watchEffect(async () => {
      events.value = await fetchEventsFromFirebase();
    });

    const route = useRoute();
    const event = ref(null);

    // Funktion til at formatere datoen alene
    const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("da-DK", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    };

</script>

<template>
    <div>
        <div>
            <h1>Arrangementer</h1>
        </div>
        <div class="events-container">
            <div class="event" v-for="event in events" :key="event.id">
                <div class="banner-container">
                    <img class="banner-image" src="/src/assets/images/event-img.png" alt="Event banner" />
                </div>
                <div class="event-text">
                    <div>
                        <h4><strong>{{ event.name }}</strong></h4>
                    </div>
                        <!-- Start Dato -->
                        <div>
                        <div class="start-day">
                        <p>
                        <span>
                            <i class="fa-regular fa-calendar-days"></i>
                            Start dato:
                        </span> {{ formatDate(event.start_time) }}
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
                        </div>
                    </div>
                    <div class="description">
                        <p><em>{{ event.description }}</em></p>
                    </div>
                    <div class="events-button">
                        <Button hoverStyle="sand-hover">Læs mere</Button>
                    </div>
                </div>

            <router-link :to="`/events/${event.id}`"></router-link>

            </div>
        </div>
    </div>
</template>

<style scoped>
    
    .events-container {
        display: grid;
        gap: 40px;
        margin: 38px;
    }
    .event {
        height: auto;
        width: 100%;
        box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        overflow: hidden; 
    }
    .event-text {
        margin: 10px 10px 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    h1 {
        text-align: center;
        margin-top: 38px;
    }

    .banner-container {
        width: 100%;
        height: 90px;
        overflow: hidden; /* Sikrer at billedet bliver beskåret til containerens størrelse */
        border-radius: 4px 4px 0 0;
    }

    .banner-image {
        width: 100%; /* Sørg for at billedet fylder hele containerens bredde */
        height: 100%; /* Fylder hele containerens højde */
        object-fit: cover; /* Billedet bliver beskåret for at dække hele containeren uden at strække */
        object-position: center; /* Centrerer billedet i containeren */
    }

    .description {
        position: relative;
        max-height: 60px; /* Bestem den synlige højde på beskrivelsen */
        overflow: hidden;
    }

    .description p {
        margin: 0;
        max-width: 300px;
        width: 100%;
        word-wrap: break-word;
    }

    /* Overlayet som skaber den slørede effekt */
    .description::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px; /* Højde på overlay */
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }

    h4 {
        white-space: nowrap;       /* Forhindrer teksten i at gå til næste linje */
        overflow: hidden;          /* Skjuler den tekst, der går ud over elementets bredde */
        text-overflow: ellipsis;   /* Tilføjer tre prikker (...) efter teksten, når den bliver for lang */
        width: 100%;               /* Sikrer at teksten tager hele bredden af containeren */
        display: block;            /* Gør det sikkert at anvende disse egenskaber på h4 */
    }

    .events-button {
        align-self: flex-end;
        justify-self: flex-end;
    }

    @media (min-width: 800px) {
        .events-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

</style>