import { fetchEventFromFirebase, saveEventsToFirebase } from './firebaseService';

//  `page_id` og Page Access Token
const pageId = "465818663287850";            // Facebook-side ID
const accessToken = "EAANL70Md5fYBO7zHWI9D03ZCJOf1HqEJsO5GwjkAuGxNOhebwEhpmBpu0GFjedJAyZBakZBzvLgqu2zzzlZCx2zAvSvnZCglQ5LRk7HVCS6KqleVwN3hFQ7v9FqNOTlSoPJZAZCTtdskENZB8zLPuNDgY1nLtVZAj9gQpijVIeqE9fzfKCiHol3ZBc5qBBpOgVInY9caZAq03R4RZCqa5eLYQJ7QzWWJeN0KFwZDZD";

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
