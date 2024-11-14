// import { ref, set } from 'firebase/database';
// import { database } from './firebaseConfig';
import { fetchEventFromFirebase, saveEventsToFirebase } from './firebaseService';

//  `page_id` og Page Access Token
const pageId = "484706954727724";            // Facebook-side ID
const accessToken = "EAAHfUOhwwBsBO7JGflH1yXumazCkE24ZAOUqfv2L99SosyZANmbvCqqf83VxnaQdYA1ffKfaNjP3wf5IxWtLzoZAH85izolKL4M2R2RoS41qVkeM55BRRe8ZAfuD4A4rU4qtIfD6gua09W24iLsYbY3R3ocuMcXPwsxoJNtyrVxUn3ohSeiqoo972gh1b3HS";   // Erstat med dit Facebook access token

export async function fetchFacebookEvents() {
    console.log("Event er hentet fra Facebook");
  try {
    const response = await fetch(`https://graph.facebook.com/v13.0/${pageId}/events?access_token=${accessToken}`);
    if (!response.ok) throw new Error('Fejl ved hentning af Facebook begivenhedsdata');
    
    const data = await response.json();
    console.log("Data hentet fra Facebook:", data);
    return data.data;  // Dette er listen af events
  } catch (error) {
    console.error("Kunne ikke hente event data fra Facebook:", error);
    return null;
  }
}
export async function syncFacebookEventsToFirebase() {
    console.log("Events fra Facebook er synkroniseret med Firebase");
    const events = await fetchFacebookEvents();  // Hent events fra Facebook
    if (events) {
      await saveEventsToFirebase(events);  // Gem events i Firebase
    }
  }
