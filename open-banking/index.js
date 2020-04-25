// const chooseBank = (chosenBank) => {
//   const url = `https://raw.githubusercontent.com/OpenBankingUK/opendata-api-spec-compiled/master/participant_store.json`;
//   fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//       data.data.forEach((bank) => {
//         if (bank.name.toLowerCase().includes(chosenBank.toLowerCase())) {
//           fetchMessage.insertAdjacentHTML("beforeend", `<p>We found ${bank.name} on Open Banking UK!</p>`);
//           // findATMs(bank.name, `${bank.baseUrl}/${bank.supportedAPIs.atms}/atms`);
//         }
//       });
//   });
// }

// const findATMs = (bankName, url) => {
//   // Translate the address into coordinates
//   console.log(url);
//   fetch(url, {headers: {'Accept': 'application/prs.openbanking.opendata.v2.2+json'}})
//   .then(response => response.json())
//   .then((data) => {

//     fetchMessage.insertAdjacentHTML("beforeend", `<p>We found some ATMs for ${bankName}!</p>`);
//     const atms = data.data[0].Brand[0].ATM // this are the new coordinates (e.g.[139.839478, 35.652832])

//     atms.forEach((atm) => {
//       const coordinates = atm.Location.PostalAddress.GeoLocation.GeographicCoordinates;
//       // console.log(coordinates);
//       // Move the map to the new coordinate point
//       markerArray.push(
//         new mapboxgl.Marker()
//         .setLngLat([coordinates.Longitude, coordinates.Latitude])
//         .addTo(map)
//       );
//     })
//   })
//   .catch((error) => {
//     fetchMessage.insertAdjacentHTML("beforeend", `<p>No luck for ${bankName}! You'll need to signup to use the API...</p>`);
//   });
// };





// ///////////////// Execute the code /////////////////

// const markerArray = [];

// // Initialise the Map, already an API call to Mapbox!
// mapboxgl.accessToken = 'pk.eyJ1IjoieWFubmx1Y2tsZWluIiwiYSI6ImNqcnZmeHQwaDAxb2o0NGx2bG1tOWgwNGIifQ.q4zhKOCoH7nDIJNm88leXg';
// const map = new mapboxgl.Map({
//   container: 'map', // container id
//   style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
//   center: [-3.177109, 54.029150], // starting on Tokyo
//   zoom: 5 // starting zoom
// });




// // Listen to a new address
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const fetchMessage = document.querySelector(".message");
// button.addEventListener("click", (event) => {

//   // Remove the previous markers
//   markerArray.forEach((marker) => marker.remove());
//   fetchMessage.innerText = "";

//   // Find the ATMs of the designated bank
//   chooseBank(input.value);
// });

