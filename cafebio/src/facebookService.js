import { fetchEventFromFirebase, saveEventsToFirebase } from './firebaseService';

//  `page_id` og Page Access Token
const pageId = "465818663287850";            // Facebook-side ID
const accessToken = "EAANL70Md5fYBOzgfZBM4AxppbTgOUyWt9LkrfFxVZCA38QhDZCAvI1Y3WKoBgkRtlgCiRV8zT2DGwacJhxWRyBYsIlPXZCZAdz4YTxfUGs8xV1ap0QoWHqZBEsQbrb1o24DgEcgu2w87Gb69V7vlH39KvnHOJ2pcAm26nj2SrdfD0A509Wz3LRfZBPOnmrj54zDn9izNdTmZAndODSVOdQuPqkNwVCcZD";   // Erstat med dit Facebook access token

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
