<template>
    <div class="header">
      <nav>
        <div>
          <RouterLink to="/"><img src="../assets/images/Logo sommerfugl hvid.png" alt="Logo"></RouterLink>
        </div>

        <!-- Hamburger menu for små skærme -->
        <div class="hamburger-icon" @click="menuOpen = !menuOpen" v-if="isMobile">
          <i :class="menuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
        </div>

        <!-- Menu -->
        <ul :class="{ 'menu-items': true, 'menu-open': menuOpen }" v-show="menuOpen || !isMobile">
          
          <!-- Forside -->
          <RouterLink to="/" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Forside</a></li></RouterLink>

          <!-- Om os -->
          <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Om os</a></li></RouterLink>
          
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
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Film program</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Kommende film</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Cinemateket</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Ret bestilling</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Baby bio</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Senior bio</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Book en biografsal</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Filmklubber</a></li></RouterLink>
              </ul>
            </div>
            <ul v-show="openDropdown === 'biograf'" class="under-items">
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Film program</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Kommende film</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Cinemateket</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Ret bestilling</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Baby bio</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Senior bio</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Book en biografsal</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Filmklubber</a></li></RouterLink>
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
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Menu kort</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Reserver bord</a></li></RouterLink>
              </ul>
            </div>
            <ul v-show="openDropdown === 'cafe'" class="under-items">
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Menu kort</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Reserver bord</a></li></RouterLink>
            </ul>
          </li>

          <!-- Gavekort -->
          <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Gavekort</a></li></RouterLink>

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
                <RouterLink to="/events" style="text-decoration: none; color: inherit;"><li><a>Alle arrangementer</a></li></RouterLink>
                <li v-for="event in headerEvents" :key="event.id">
                  <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
                </li>
              </ul>
            </div>
            <ul v-show="openDropdown === 'arrangementer'" class="under-items">
              <RouterLink to="/events" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Alle arrangementer</a></li></RouterLink>
              <li v-for="event in headerEvents" :key="event.id">
                <router-link :to="`/events/${event.id}`" @click="closeMenu()">{{ event.name }}</router-link>
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
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Ledige stillinger</a></li></RouterLink>
                <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a>Ledsagerkort</a></li></RouterLink>
                <RouterLink to="/contact" style="text-decoration: none; color: inherit;"><li><a>Kontakt</a></li></RouterLink>
              </ul>
            </div>
            <ul v-show="openDropdown === 'mere'" class="under-items">
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Ledige stillinger</a></li></RouterLink>
              <RouterLink to="/no-page" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Ledsagerkort</a></li></RouterLink>
              <RouterLink to="/contact" style="text-decoration: none; color: inherit;"><li><a @click="closeMenu()">Kontakt</a></li></RouterLink>
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
      </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { fetchEventsFromFirebase } from '../firebaseService';
import Button from './CTAButton.vue';

// Reaktive variabler
const menuOpen = ref(false);
const openDropdown = ref(null);
const isMobile = ref(window.innerWidth <= 1000);
const events = ref([]);

// Computed property til at filtrere kommende events
const upcomingEvents = computed(() => {
  const now = new Date();
  const filtered = events.value.filter(event => {
    const eventEndTime = new Date(event.end_time);
    if (isNaN(eventEndTime)) {
      console.warn(`Ugyldig end_time for event ${event.id}: ${event.end_time}`);
      return false;
    }
    const isUpcoming = eventEndTime >= now;
    console.log(`Event ${event.id} (${event.name}) - Upcoming: ${isUpcoming}`);
    return isUpcoming;
  });
  
  // Sortér efter start_time (stigende)
  filtered.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
  
  console.log("Filtrerede kommende events:", filtered);
  return filtered;
});

// Computed property til at begrænse antallet af events i headeren til 6
const headerEvents = computed(() => {
  return upcomingEvents.value.slice(0, 6);
});

// Funktion til at hente events
async function loadEvents() {
  try {
    events.value = await fetchEventsFromFirebase();
    console.log("Alle events:", events.value);
    console.log("Kommende events:", upcomingEvents.value);
  } catch (error) {
    console.error("Fejl ved hentning af events:", error);
  }
}

// Funktion til at toggler dropdown-menu
function toggleDropdown(name) {
  console.log(`Toggle dropdown for: ${name}`);
  openDropdown.value = openDropdown.value === name ? null : name;
}

// Funktion til at håndtere vinduesstørrelse
function handleResize() {
  isMobile.value = window.innerWidth <= 1000;
  console.log("Resize event, isMobile:", isMobile.value);
  if (!isMobile.value) {
    menuOpen.value = false;
    openDropdown.value = null;
  }
}

function closeMenu() {
  menuOpen.value = false;
  openDropdown.value = null; 
}

// Lifecycle hooks
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
  .header {
    background-color: var(--red);
    display: flex;
    justify-content: center;
  }

  nav {
    width: 1300px;
  }
}
</style>