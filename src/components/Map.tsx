import React, { useEffect } from 'react';
import L from 'leaflet'; // Leaflet is a popular library for maps

const Map: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13); // Adjust the center and zoom as needed

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Example of adding a flood-prone zone (Red zone for high risk)
    L.circle([51.508, -0.11], { radius: 500, color: 'red' }).addTo(map);
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default Map;
