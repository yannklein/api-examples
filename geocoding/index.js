const findThis = (address) => {

  // Translate the address into coordinates
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoieWFubmx1Y2tsZWluIiwiYSI6ImNqcnZmeHQwaDAxb2o0NGx2bG1tOWgwNGIifQ.q4zhKOCoH7nDIJNm88leXg`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {

    const coordinates = data.features[0].center // this are the new coordinates (e.g.[139.839478, 35.652832])

    // Move the map to the new coordinate point
    map.setCenter(coordinates);
    var marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    })

};


// ///////////////// Execute the code /////////////////

// Initialise the Map, already an API call to Mapbox!
mapboxgl.accessToken = 'pk.eyJ1IjoieWFubmx1Y2tsZWluIiwiYSI6ImNqcnZmeHQwaDAxb2o0NGx2bG1tOWgwNGIifQ.q4zhKOCoH7nDIJNm88leXg';
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [139.839478, 35.652832], // starting on Tokyo
  zoom: 9 // starting zoom
});

// Listen to a new address
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  // Relocate our map to the new address
  findThis(input.value);
});

