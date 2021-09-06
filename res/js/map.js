var map = L.map('map').setView({lon: 9.19, lat: 45.466944}, 14);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

L.control.locate(initialZoomLevel = 15).addTo(map);

/*
var geojsonFeatures = new L.GeoJSON.AJAX('/res/data/vedovelle.geojson');
geojsonFeatures.on('data:loaded', function(){
    geojsonFeatures.addTo(map);
});
*/

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ffcc00ff",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

function onEachFeature(feature, layer) {
    let url = 'http://www.google.com/maps/place/' + feature.properties.LAT_Y_4326 + ',' + feature.properties.LONG_X_4326;
    let popupContent = '<a href="' + url + '">Apri in Google Maps</a>';
    layer.bindPopup(popupContent);
}

L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: onEachFeature
}).addTo(map);