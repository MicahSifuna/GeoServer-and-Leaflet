// initialize the map

var map = L.map('map').setView([-1.2921, 36.8219], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let popup = L.popup();

function onMapClick(e){
      popup
      .setLatLng(e.latlng)
      .setContent("You have clicked the map at" + e.latlng.toString())
      .openOn(map);
}

map.on("click", onMapClick);
// L.marker([-1.2921, 36.8219]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();

// definition of the layers

let Embu_county = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:embu",
      transparent: true,
      format:"image/png",
});
let embusublocs = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:embusublocs",
      transparent: true,
      format:"image/png",
});
let Embuschools = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:Embuschools",
      transparent: true,
      format:"image/png",
});
let KrbRoads = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:KRBRoads",
      transparent: true,
      format:"image/png",
});
let institutes = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:institutes",
      transparent: true,
      format:"image/png",
});
let primary_schools = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:primary_schools",
      transparent: true,
      format:"image/png",
});
let towns = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:towns",
      transparent: true,
      format:"image/png",
});
let counties = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: "GEOSPATIAL:counties",
      transparent: true,
      opacity: 0.5,
      format:"image/png",
});

// overlay maps

let overlayMaps = {
      "Counties": counties,
      "Embu Schools": Embuschools,
      "KrbRoads": KrbRoads,
      "embusublocs": embusublocs,
      "Institutes": institutes,
      "Embu_county": Embu_county,
      "Primary Schools": primary_schools,
      "Towns":towns,
};


// adding the base maps
//adding google hybrid as base_map
let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//adding google streets as base_map

let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//adding google satellite as base_map

let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//adding google terrain as base_map

let googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//adding carto_db as base_map

let cartoDB = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', {
   attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
   subdomains: 'abcd',
   maxZoom: 20,
   minZoom: 0
});

// intitalization of basemaps

// Initializing baseMaps
let baseMaps = {
      "Google Hybrid":googleHybrid,
      "Google Streets": googleStreets,
      "Google Satellite":googleSat,
      "Google Terrain":googleTerrain,
      "CartoDB": cartoDB,
}

let layerControl = L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map)
  
L.Control.geocoder().addTo(map);
