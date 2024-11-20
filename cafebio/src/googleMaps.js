// export function loadGoogleMapsApi() {
//     return new Promise((resolve, reject) => {
//       if (window.google && window.google.maps) {
//         resolve(); // API'en er allerede indlæst
//         return;
//       }
  
//       const script = document.createElement('script');
//       script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBt_VfaL84otfW44aYWlyZebO8DJzNbVl4&libraries=places";
//       script.async = true;
//       script.defer = true;
  
//       script.onload = resolve; // Scriptet er færdigt med at indlæse
//       script.onerror = reject; // Håndter fejl
  
//       document.head.appendChild(script);
//     });
//   }
  