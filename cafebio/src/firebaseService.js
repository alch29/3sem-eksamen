import { ref as firebaseRef, set, get } from 'firebase/database';
import { database } from './firebaseConfig';

// Funktion til at gemme events i Firebase
export async function saveEventsToFirebase(events) {
  for (let event of events) {
    const eventRef = firebaseRef(database, `events/${event.id}`);
    await set(eventRef, event);
  }
  console.log("Events gemt i Firebase!");
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