var map = L.map('map').setView({lon: 9.19, lat: 45.466944}, 14);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 24,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

L.control.locate().addTo(map);

var geojsonFeatures = new L.GeoJSON.AJAX('/res/data/vedovelle.geojson');
geojsonFeatures.on('data:loaded', function(){
    geojsonFeatures.addTo(map);
});