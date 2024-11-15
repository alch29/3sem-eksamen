<template>
  <nav>
    <img src="../assets/images/Logo sommerfugl hvid.png" alt="Logo" />

    <!-- Hamburger menu for små skærme -->
    <div class="hamburger-icon" @click="menuOpen = !menuOpen" v-if="isMobile">
      <i :class="menuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
    </div>

    <!-- Menu -->
    <ul v-show="menuOpen || !isMobile" class="menu-items">
      <!-- Forside -->
      <li><a href="#">Forside</a></li>

      <!-- Om os -->
      <li><a href="#">Om os</a></li>

      <!-- Biograf -->
      <li class="dropdown">
        <div @click="toggleDropdown('biograf')">
          Biograf <i :class="openDropdown === 'biograf' ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
        </div>
        <ul v-if="openDropdown === 'biograf'" class="under-items">
          <li><a href="#">Film program</a></li>
          <li><a href="#">Kommende film</a></li>
          <li><a href="#">Cinemateket i Cafébiografen</a></li>
          <li><a href="#">Retbestilling</a></li>
          <li><a href="#">Baby bio</a></li>
          <li><a href="#">Senior bio</a></li>
          <li><a href="#">Book en biografsal</a></li>
          <li><a href="#">Filmklubber</a></li>
        </ul>
      </li>

      <!-- Café -->
      <li class="dropdown">
        <div @click="toggleDropdown('cafe')">
          Café <i :class="openDropdown === 'cafe' ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
        </div>
        <ul v-if="openDropdown === 'cafe'" class="under-items">
          <li><a href="#">Menu kort</a></li>
          <li><a href="#">Reserver bord</a></li>
        </ul>
      </li>

      <!-- Gavekort -->
      <li><a href="#">Gavekort</a></li>

      <!-- Dynamisk dropdown for arrangementer -->
      <li class="dropdown">
        <div @click="toggleDropdown('arrangementer')">
          Arrangementer <i :class="openDropdown === 'arrangementer' ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
        </div>
        <ul v-if="openDropdown === 'arrangementer'" class="under-items">
          <li v-for="event in events" :key="event.id">
            <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
          </li>
        </ul>
      </li>

      <!-- Mere -->
      <li class="dropdown">
        <div @click="toggleDropdown('mere')">
          Mere <i :class="openDropdown === 'mere' ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
        </div>
        <ul v-if="openDropdown === 'mere'" class="under-items">
          <li><a href="#">Ledige stillinger</a></li>
          <li><a href="#">Ledsagerkort</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </li>
    </ul>

    <!-- Kontakt-knap kun synlig på større skærme -->
    <button v-if="!isMobile" class="header-button"><p><strong>Kontakt</strong></p></button>
  </nav>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { fetchEventsFromFirebase } from '../firebaseService';

const menuOpen = ref(false); // Styrer menuens synlighed
const openDropdown = ref(null);
const isMobile = ref(window.innerWidth <= 768);
const events = ref([]);

async function loadEvents() {
  events.value = await fetchEventsFromFirebase();
}

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name;
}

function handleResize() {
  isMobile.value = window.innerWidth <= 768;

  // Luk menuen automatisk, når skærmen bliver stor
  if (!isMobile.value) {
    menuOpen.value = false;
  }
}

onMounted(() => {
  loadEvents();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
nav {
  background-color: #AE2824;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
}

nav img {
  height: 40px;
}

.hamburger-icon {
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: block; /* Mobil først: hamburger synlig som standard */
}

.menu-items {
  display: none;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #AE2824;
  position: absolute;
  top: 60px; /* Placeret under headeren */
  left: 0;
  width: 100%;
  z-index: 10;
}

.menu-items[style*="display: flex"] {
  display: flex;
}

.menu-items li {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-items li a {
  color: white;
  text-decoration: none;
}

.under-items {
  display: none;
  flex-direction: column;
  padding-left: 20px;
}

.dropdown .under-items li {
  padding: 5px 20px;
}

/* Desktop styling */
@media (min-width: 769px) {
  .hamburger-icon {
    display: none; /* Skjul hamburger på større skærme */
  }

  .menu-items {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    background: none;
  }

  .menu-items li {
    padding: 0 20px;
    border: none;
  }

  .under-items {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #AE2824;
    display: none;
    z-index: 10;
  }

  .dropdown:hover .under-items {
    display: block; /* Vis dropdown på hover på større skærme */
  }
}
</style scoped>