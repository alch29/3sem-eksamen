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
      <RouterLink to="/"><li><a href="#">Forside</a></li></RouterLink>

      <!-- Om os -->
      <li><a href="#">Om os</a></li>

      <!-- Biograf -->
      <li class="dropdown">
        <div
          class="dropdown-header"
          v-if="isMobile" @click="toggleDropdown('biograf')">
          Biograf
          <i :class="isMobile 
              ? (openDropdown === 'biograf' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') 
              : 'fa-solid fa-chevron-down'"></i>
        </div>
        <div
          class="dropdown-header" v-else>
          Biograf
          <i class="fa-solid fa-chevron-down"></i>
          <ul class="under-items">
            <li><a href="#">Film program</a></li>
            <li><a href="#">Kommende film</a></li>
            <li><a href="#">Cinemateket</a></li>
            <li><a href="#">Retbestilling</a></li>
            <li><a href="#">Baby bio</a></li>
            <li><a href="#">Senior bio</a></li>
            <li><a href="#">Book en biografsal</a></li>
            <li><a href="#">Filmklubber</a></li>
          </ul>
        </div>
        <ul v-show="openDropdown === 'biograf'" class="under-items">
          <li><a href="#">Film program</a></li>
          <li><a href="#">Kommende film</a></li>
          <li><a href="#">Cinemateket</a></li> 
          <li><a href="#">Retbestilling</a></li>
          <li><a href="#">Baby bio</a></li>
          <li><a href="#">Senior bio</a></li>
          <li><a href="#">Book en biografsal</a></li>
          <li><a href="#">Filmklubber</a></li>
        </ul>
      </li>

      <!-- Café -->
      <li class="dropdown">
        <div
          class="dropdown-header"
          v-if="isMobile" @click="toggleDropdown('cafe')">
          Café
          <i :class="isMobile 
              ? (openDropdown === 'cafe' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') 
              : 'fa-solid fa-chevron-down'"></i>
        </div>
        <div
          class="dropdown-header" v-else>
          Café
          <i class="fa-solid fa-chevron-down"></i>
          <ul class="under-items">
            <li><a href="#">Menu kort</a></li>
            <li><a href="#">Reserver bord</a></li>
          </ul>
        </div>
        <ul v-show="openDropdown === 'cafe'" class="under-items">
          <li><a href="#">Menu kort</a></li>
          <li><a href="#">Reserver bord</a></li>
        </ul>
      </li>

      <!-- Gavekort -->
      <li><a href="#">Gavekort</a></li>

      <!-- Arrangementer -->
      <li class="dropdown">
        <div
          class="dropdown-header"
          v-if="isMobile" @click="toggleDropdown('arrangementer')">
          Arrangementer
          <i :class="isMobile 
              ? (openDropdown === 'arrangementer' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') 
              : 'fa-solid fa-chevron-down'"></i>
        </div>
        <div
          class="dropdown-header" v-else>
          Arrangementer
          <i class="fa-solid fa-chevron-down"></i>
          <ul class="under-items">
            <router-link to="/events" ><li>Alle arrangementer</li></router-link>
            <li v-for="event in events" :key="event.id">
              <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
            </li>
          </ul>
        </div>
        <ul v-show="openDropdown === 'arrangementer'" class="under-items">
          <router-link to="/events"><li>Alle arrangementer</li></router-link>
          <li v-for="event in events" :key="event.id">
            <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
          </li>
        </ul>
      </li>

      <!-- Mere -->
      <li class="dropdown">
        <div class="dropdown-header" v-if="isMobile" @click="toggleDropdown('mere')">
          Mere
          <i :class="isMobile ? (openDropdown === 'mere' ? 'fa-solid fa-minus' : 'fa-solid fa-plus') : 'fa-solid fa-chevron-down'"></i>
        </div>
        <div
          class="dropdown-header" v-else>
          Mere
          <i class="fa-solid fa-chevron-down"></i>
          <ul class="under-items">
            <li><a href="#">Ledige stillinger</a></li>
            <li><a href="#">Ledsagerkort</a></li>
            <RouterLink to="/contact"><li><a href="#">Kontakt</a></li></RouterLink>
          </ul>
        </div>
        <ul v-show="openDropdown === 'mere'" class="under-items">
          <li><a href="#">Ledige stillinger</a></li>
          <li><a href="#">Ledsagerkort</a></li>
          <RouterLink to="/contact"><li><a href="#">Kontakt</a></li></RouterLink>
        </ul>
      </li>
    </ul>
    <!-- Kontakt-knap kun synlig på større skærme -->
      <div class="header-button" v-if="!isMobile">
        <RouterLink to="/contact">
          <Button hoverStyle="red-hover" :to="'/contact'">Kontakt</Button>
        </RouterLink>
      </div>
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

function closeDropdown() {
  openDropdown.value = null;
}

function toggleDropdown(name) {
  console.log(`Toggle dropdown for: ${name}`);
  openDropdown.value = openDropdown.value === name ? null : name;
}

function handleResize() {
  isMobile.value = window.innerWidth <= 1000;
  console.log("Resize event, isMobile:", isMobile.value);
  if (!isMobile.value) {
    menuOpen.value = false;
    openDropdown.value = null;
  }
}

onMounted(() => {
  loadEvents();
  window.addEventListener("resize", handleResize);
  console.log("Component mounted, isMobile:", isMobile.value);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
/* Generelle nav styling */

nav {
  background-color: var(--red);
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
  font-size: 24px;
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
  background-color: var(--red);
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 10;
}

.menu-open {
    display: flex;
    flex-direction: column;
    background: var(--red);
}

/* Hovedlistepunkter */
.menu-items li {
  padding: 10px 38px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-items li a {
  color: white;
  text-decoration: none;
}

.menu-items li a:hover {
  color: rgba(250, 250, 250, 0.6);
}

/* Dropdown styling */
.under-items {
  flex-direction: column;
  background-color: var(--red);
  display: flex;
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
  list-style: none;
}

.dropdown .under-items li a {
  color: white;
  text-decoration: none;
}

.dropdown .under-items li a:hover {
  color: rgba(250, 250, 250, 0.6);
}

/* Mobil styling */
@media (max-width: 1000px) { 
  .dropdown .under-items {
    display: flex;
    flex-direction: column;
    opacity: 1;
    visibility: visible;
  }
  /* På mobil vises kun "+" og "-" */
  .dropdown-header i.fa-chevron-down {
    display: none;
  }
}

/* Desktop styling */
@media (min-width: 1001px) {
  .hamburger-icon {
    display: none;
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

  .dropdown {
  position: relative;
}

  .dropdown .under-items {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--red);
    padding: 10px 0;
    z-index: 10;
  }

  .dropdown:hover .under-items {
    opacity: 1;
    visibility: visible;
  }

  .dropdown:hover {
    color: rgba(250, 250, 250, 0.6);
  }

  .dropdown-header i.fa-plus,
  .dropdown-header i.fa-minus {
    display: none;
  }
}
</style>