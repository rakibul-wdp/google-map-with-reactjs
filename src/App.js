import './App.css';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function App() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmFraWJ1bC13ZHAiLCJhIjoiY2w3ZDQwYnJ5MHowaTNvbnhkbDczazZnaSJ9.DRWD06dzy6vem5zu0mfrbA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
  });
  return <div id='map'>{map}</div>;
}

export default App;

/* 

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoicmFraWJ1bC13ZHAiLCJhIjoiY2w3ZDQwYnJ5MHowaTNvbnhkbDczazZnaSJ9.DRWD06dzy6vem5zu0mfrbA';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});


*/
