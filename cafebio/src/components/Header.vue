<template>
  <nav>
    <img src="../assets/images/Logo sommerfugl hvid.png" alt="Logo" />

    <!-- Hamburger menu for små skærme -->
    <div class="hamburger-icon" @click="menuOpen = !menuOpen" v-if="isMobile">
      <i :class="menuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
    </div>

    <!-- Menu -->
    <ul :class="{ 'menu-items': true, 'menu-open': menuOpen }" v-show="menuOpen || !isMobile">
      <!-- Forside -->
      <li><a href="#">Forside</a></li>

      <!-- Om os -->
      <li><a href="#">Om os</a></li>

      <!-- Biograf -->
      <li class="dropdown">
        <div class="dropdown-header" @click="isMobile ? toggleDropdown('biograf') : null">
          Biograf
          <i :class="isMobile 
            ? (openDropdown === 'biograf' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') 
            : 'fa-solid fa-chevron-down'"></i>
        </div>
        <ul v-show="openDropdown === 'biograf'" class="under-items">
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
        <div class="dropdown-header" @click="isMobile ? toggleDropdown('cafe') : null">
          Café
          <i :class="isMobile 
            ? (openDropdown === 'cafe' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') 
            : 'fa-solid fa-chevron-down'"></i>
        </div>
        <ul v-show="openDropdown === 'cafe'" class="under-items">
          <li><a href="#">Menu kort</a></li>
          <li><a href="#">Reserver bord</a></li>
        </ul>
      </li>

      <!-- Gavekort -->
      <li><a href="#">Gavekort</a></li>

      <!-- Dynamisk dropdown for Arrangementer -->
      <li class="dropdown">
        <div class="dropdown-header" @click="isMobile ? toggleDropdown('arrangementer') : null">
          Arrangementer
          <i :class="isMobile 
            ? (openDropdown === 'arrangementer' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') 
            : 'fa-solid fa-chevron-down'"></i>
        </div>
        <ul v-show="openDropdown === 'arrangementer'" class="under-items">
          <li v-for="event in events" :key="event.id">
            <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
          </li>
        </ul>
      </li>

      <!-- Mere -->
      <li class="dropdown">
        <div class="dropdown-header" @click="isMobile ? toggleDropdown('mere') : null">
          Mere
          <i :class="isMobile 
            ? (openDropdown === 'mere' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') 
            : 'fa-solid fa-chevron-down'"></i>
        </div>
        <ul v-show="openDropdown === 'mere'" class="under-items">
          <li><a href="#">Ledige stillinger</a></li>
          <li><a href="#">Ledsagerkort</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </li>
    </ul>

    <!-- Kontakt-knap kun synlig på større skærme -->
    <Button v-if="!isMobile" hoverStyle="red-hover">Kontakt</Button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { fetchEventsFromFirebase } from '../firebaseService';
import Button from './CTAButton.vue'

const menuOpen = ref(false);
const openDropdown = ref(null);
const isMobile = ref(window.innerWidth <= 1000);
const events = ref([]);

async function loadEvents() {
  events.value = await fetchEventsFromFirebase();
}

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name;
}

function handleResize() {
  isMobile.value = window.innerWidth <= 1000;

  if (!isMobile.value) {
    menuOpen.value = false;
    openDropdown.value = null;
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
/* Generelle nav styling */
nav {
  background-color: #AE2824;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 38px;
  position: relative;
}

nav img {
  height: 40px;
}

.hamburger-icon {
  color: white;
  cursor: pointer;
  display: block; 
}

/* Menu styling */
.menu-items {
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #AE2824;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 10;
}

.menu-open {
  display: flex; /* Vis menuen, når menuOpen er true */
}

/* Hovedlistepunkter */
.menu-items li {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-items li a {
  color: white; /* Standard farve */
  text-decoration: none;
}

/* Dropdown styling */
.under-items {
  display: none; /* Skjult som standard */
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.under-items[style*="display: flex"], .under-items[style*="display: block"] {
  display: flex; /* Vis dropdown-indholdet */
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropdown-header i {
  margin-left: 10px;
  color: white;
  transition: transform 0.3s ease;
}

.dropdown .under-items li {
  padding: 5px 20px;
}

.dropdown .under-items li a {
  color: white; /* Standard dropdown farve */
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.dropdown .under-items li a:hover {
  color: #F4A38A; /* Hover farve */
  background-color: rgba(255, 255, 255, 0.1); /* Hover baggrund */
  border-radius: 5px;
}

/* Desktop styling */
/* Mobil styling */
@media (max-width: 1000px) { /* Ændret fra 768px til 1000px */
  /* På mobil vises kun "+" og "-" */
  .dropdown-header i.fa-chevron-down {
    display: none;
  }
}

/* Desktop styling */
@media (min-width: 1001px) { /* Ændret fra 769px til 1001px */
  .hamburger-icon {
    display: none; /* Skjul hamburger på større skærme */
  }

  .menu-items {
    display: flex; /* Desktop: vis altid menuen */
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
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #AE2824;
    z-index: 10;
  }

  .dropdown:hover .under-items {
    display: block; /* Vis dropdown på hover */
  }

  /* På desktop vises kun pil ned */
  .dropdown-header i.fa-plus,
  .dropdown-header i.fa-minus {
    display: none;
  }
}


</style>

