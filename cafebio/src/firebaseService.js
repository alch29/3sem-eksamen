import { ref as firebaseRef, set, get } from 'firebase/database';
import { database } from './firebaseConfig';

// Funktion til at gemme events i Firebase
export async function saveEventsToFirebase(events) {
  console.log("Saving events to Firebase:", events);  // Tilføj logging
  for (let event of events) {
    // Check for cover-billede fra Facebook
    const updatedEvent = {
      ...event,
      cover: event.cover ? event.cover.source : null, // Gem URL'en til billedet, hvis det findes
    };

    const eventRef = firebaseRef(database, `events/${event.id}`);
    try {
      await set(eventRef, updatedEvent);
      console.log(`Event ${event.id} gemt i Firebase.`);
    } catch (error) {
      console.error(`Fejl ved gemning af event ${event.id}:`, error);
    }
  }
  console.log("Alle events er gemt i Firebase!");
}

// Hent alle events fra Firebase
export async function fetchEventsFromFirebase() {
  const eventsRef = firebaseRef(database, 'events');
  const snapshot = await get(eventsRef);
  if (snapshot.exists()) {
    return Object.values(snapshot.val());  // Konverter data til en liste af events
  } else {
    console.warn("Ingen events fundet i Firebase.");
    return [];
  }
}

// Funktion til at hente et specifikt event fra Firebase
export async function fetchEventFromFirebase(eventId) {
  const eventRef = firebaseRef(database, `events/${eventId}`);
  const snapshot = await get(eventRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.warn("Event ikke fundet i Firebase.");
    return null;
  }
}
