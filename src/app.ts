import axios from 'axios'

const MAP_BOX_API_KEY = "putAPikey"

const apiKey = MAP_BOX_API_KEY
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const mapIndex = document.getElementById('map')! as HTMLInputElement;

declare var mapboxgl: any;

function searchAdressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios.get(
    //`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(enteredAddress)}.json?access_token=${apiKey}`
  ).then(data => {
    const coordinates = data.data.features[0].geometry.coordinates

    new mapboxgl.Map({
      container: mapIndex, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [coordinates[0], coordinates[1]], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }).catch(err => console.log(err))
}

form.addEventListener('submit', searchAdressHandler);
