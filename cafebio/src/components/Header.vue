<template>
    <nav @mouseleave="showDropdown = false">
      <img src="../assets/images/Logo sommerfugl hvid.png" alt="Logo" />
      <ul class="menu-items">
        <li><a href="#">Forside</a></li>
        <li><a href="#">Om os</a></li>
        <li><a href="#">Biograf</a></li>
        <li><a href="#">Café</a></li>
        <li><a href="#">Gavekort</a></li>
        <li @mouseover="showDropdown = true" class="dropdown">
          <a href="#">Arrangementer <i class="fa-solid fa-angle-down"></i></a>
          <ul v-if="showDropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false" class="under-items">
            <!-- Dropdown-menu holder sig åben, indtil musen forlader både menuen og dens elementer -->
            <li v-for="event in events" :key="event.id">
              <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
            </li>
          </ul>
        </li>
        <li><a href="#">Mere</a></li>
      </ul>
      <button class="header-button"><p><strong>Kontakt</strong></p></button>
    </nav>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';
    import { fetchEventsFromFirebase } from '../firebaseService';

    const events = ref([]);  // Definer en reaktiv variabel til events
    const showDropdown = ref(false);

    async function loadEvents() {
    events.value = await fetchEventsFromFirebase();  // Hent events fra Firebase
    }

    // Kald loadEvents, når komponenten monteres
    onMounted(loadEvents);


    // import { ref } from 'vue';
    // import useEvents from '../useEvents.js';  // Importér `useEvents` som en funktion

    // const { events } = useEvents();  // Brug `useEvents()` til at få adgang til `events`
    // const showDropdown = ref(false);
  </script>

<style scoped>
  nav {
    background-color: #AE2824;
    display: flex;
    justify-content: space-around;
    height: 90px;
    position: relative;
  }

  nav img {
    margin: 20px;
  }
  .menu-items {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .menu-items a{
    color: white;
    font-family: "gill-sans-nova", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
  }

.dropdown {
    position: relative;
}

  .under-items {
  position: absolute;
  top: 100%; /* Starter direkte under menu-punktet */
  left: 0;
  background-color: #AE2824;
  padding: 10px 0;
  list-style: none;
  display: none; /* Skjult som standard */
  min-width: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown:hover .under-items {
  display: block;
}
.under-items li {
  padding: 5px 20px;
}

.under-items a {
  color: white;
  text-decoration: none;
  display: block;
}

.under-items a:hover {
  color: rgba(250, 250, 250, 0.6);
}

/* Hover-effekt på hovedmenu-elementerne */
.menu-items > li:hover > a {
  color: rgba(250, 250, 250, 0.6);
}

.header-button {
  background-color: #F4A38A;
  border: solid 2px #F4A38A;
  border-radius: 12px;
  padding: 12px;
  height: 40px;
  display: flex;
  align-items: center;
  align-self: center;
  color: #AE2824;
  cursor: pointer;
}

.header-button:hover {
  background-color: #AE2824;
  color: #F4A38A;
}

</style>