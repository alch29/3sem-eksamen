import { fetchEventFromFirebase, saveEventsToFirebase } from './firebaseService';

//  `page_id` og Page Access Token
const pageId = "465818663287850";            // Facebook-side ID
const accessToken = "EAANL70Md5fYBOZCwEHxZA6lGZA8RZCwSyCuBXQDddSvTDtFZCG4oC5duhsZBnA3IvaIa211cfauZBsY0mNUr4Yc2i6prmA9CIioK9dTZCZA64046VeBKiXofiZCYe6DTcyJbnvMxaAert8vjJwzgnCosu4E4dRuwVc0xZAp1XYupkOeHZBK9KZAuCysmx1L5an0q5GIfr3DRGPgKHejD893gIywZDZD";

export async function fetchFacebookEvents() {
  console.log("Event er hentet fra Facebook");
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
    console.log("Events fra Facebook er synkroniseret med Firebase");
    const events = await fetchFacebookEvents();  // Hent events fra Facebook
    if (events) {
      await saveEventsToFirebase(events);  // Gem events i Firebase
    }
  }
