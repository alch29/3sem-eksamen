import { fetchEventFromFirebase, saveEventsToFirebase } from './firebaseService';

//  `page_id` og Page Access Token
const pageId = "465818663287850";            // Facebook-side ID
const accessToken = "EAANL70Md5fYBOwdOrMHrXy20RaLfx51hFhrYKs2ip8pYM5wkOTtx77LdjUMqgq8zXoSOMUBMrE1RYy2VruuA0vSqGg4f2xbT9bC2AemDOJRAiasIgBjHap8KsHYBTopBJap8SNXHYjRBlFvXGsL3OqLZAwTZCco4oJQpw6hJuczmhWytI6CJiSYzjNptZAINretyiQ0gc5B68qxEFxWGVZCEm6kZD";

export async function fetchFacebookEvents() {
  console.log("Henter events fra Facebook");
  try {
    const response = await fetch(`https://graph.facebook.com/v13.0/${pageId}/events?fields=id,name,description,place,start_time,end_time,cover&access_token=${accessToken}`);
    if (!response.ok) throw new Error('Fejl ved hentning af Facebook begivenhedsdata');

    const data = await response.json();
    console.log("Data hentet fra Facebook:", data);
    return data.data; // Dette er listen af events med billeder (cover)
  } catch (error) {
    console.error("Kunne ikke hente event data fra Facebook:", error);
    return null;
  }
}

export async function syncFacebookEventsToFirebase() {
  console.log("Synkroniserer Facebook events til Firebase");
  const events = await fetchFacebookEvents();  // Hent events fra Facebook
  if (events) {
    await saveEventsToFirebase(events);  // Gem events i Firebase
  }
}
