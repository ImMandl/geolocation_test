mapboxgl.accessToken = 'pk.eyJ1IjoiaW1tYW5kZWwiLCJhIjoiY2s1M2x1amkzMDg3YTNqbnJuOGQ4ZjNtMSJ9._gMNaPwFio3wiDprexoZKg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

let marker;

const followMe = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;

    map.jumpTo({
        center: [lng, lat],
        zoom: 18
    })

    marker = new mapboxgl.Marker();
    marker.setLngLat([lng, lat]);
    marker.addTo(map);
}

navigator.geolocation.watchPosition(followMe);