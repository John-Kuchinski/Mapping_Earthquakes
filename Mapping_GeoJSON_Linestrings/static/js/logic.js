// Add console.log to check to see if our code is working.
console.log("working");

// We create the street view that will be the background of our map.

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the darl view tile layer that will be an optoion on our map

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  light: light,
  Dark: dark
};

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [44.0, -80.0],
  zoom: 2
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/John-Kuchinski/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json"



// Grabbing our GeoJSON data.

d3.json(torontoData).then(function(data) {
  console.log(data);

// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data,{
  color: "F3FC30",
  weight: 2,
  onEachFeature: function(Feature, layer) {
    layer.bindPopup("<h3> Airline: " + Feature.properties.airline + "</h3> <hr><h3> Destination: " + Feature.properties.dst + "</h3>");
  }
}).addTo(map);
});

















