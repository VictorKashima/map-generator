var map = L.map('map').setView([-22.109832450084692, -50.19695130226564], 20);

var mapDefaultTheme = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
});

mapDefaultTheme.addTo(map);

var mapEnvironmentTheme = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

mapEnvironmentTheme.addTo(map);

var iconTheme = L.icon({
    iconUrl: 'static/image/icon.png',
    iconSize: [35, 35],
    shadowSize: [100, 100]
});

allMarker = [
    [-22.109332, -50.197183],
    [-22.109186, -50.197267],
    [-22.109041, -50.197343],
    [-22.108888, -50.197395],
    [-22.108708, -50.197439],
    [-22.108549, -50.197455],
    [-22.108584, -50.197594],
    [-22.108726, -50.197591],
    [-22.108860, -50.197586],
    [-22.108987, -50.197579],
    [-22.109113, -50.197626]
]

for (let i = 0; i < allMarker.length; i++) {
    var firstMarker = L.marker(allMarker[i], {icon: iconTheme});
    var firstPopup = firstMarker.bindPopup(
        '<b>Temperatura</b>: 24°C<br><b>Umidade</b>: 73%<br><b>Data</b>: 22/05/2023<br><b>Coordenada</b>:<br><b>LAT</b>: -22.10<br><b>LON</b>: -50.19<br><b>Sensor</b>: 01<br><b>Ambiente</b>'
        ).openPopup()
        
    firstPopup.addTo(map);
}