
function createMap(mapContainerID, lat, lng) {
    const map = L.map(mapContainerID);
    map.setView([lat, lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
    .addTo(map);
    return map;
}

// let singapore = [ 1.29,103.85]; // #1 Singapore latlng
// let map = L.map('map').setView(singapore, 13);


// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
//     maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' })
//     .addTo(map);