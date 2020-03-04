const chooseBank = (chosenBank) => {
  const url = `https://raw.githubusercontent.com/OpenBankingUK/opendata-api-spec-compiled/master/participant_store.json`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {
      data.data.forEach((bank) => {
        if (bank.name.toLowerCase().includes(chosenBank.toLowerCase())) {
          findATMs(`${bank.baseUrl}/${bank.supportedAPIs.atms}/atms`);
        }
      });
  });
}

const findATMs = (url) => {
  // Translate the address into coordinates
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then((data) => {

    const atms = data.data[0].Brand[0].ATM // this are the new coordinates (e.g.[139.839478, 35.652832])

    atms.forEach((atm) => {
      const coordinates = atm.Location.PostalAddress.GeoLocation.GeographicCoordinates;
      // console.log(coordinates);
      // Move the map to the new coordinate point
      markerArray.push(
        new mapboxgl.Marker()
        .setLngLat([coordinates.Longitude, coordinates.Latitude])
        .addTo(map)
      );
    })
  });
};


// ///////////////// Execute the code /////////////////

const markerArray = [];

// Initialise the Map, already an API call to Mapbox!
mapboxgl.accessToken = 'pk.eyJ1IjoieWFubmx1Y2tsZWluIiwiYSI6ImNqcnZmeHQwaDAxb2o0NGx2bG1tOWgwNGIifQ.q4zhKOCoH7nDIJNm88leXg';
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-3.177109, 54.029150], // starting on Tokyo
  zoom: 5 // starting zoom
});

// Listen to a new address
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", (event) => {

  // Remove the previous markers
  markerArray.forEach((marker) => marker.remove());

  // Find the Lloyds ATMS
  // const url = `https://api.lloydsbank.com/open-banking/v2.2/atms`;
  // findATMs();

  // Find the ATMs of the designated bank
  chooseBank(input.value);
});

