import { Circle, MapContainer, TileLayer, Popup } from 'react-leaflet';
import React from 'react';

import './App.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const data = await response.json();
        console.log(data);
        const circlesData = data.map((item) => ({
          id: item.id,
          region: item.region,
          latitude: item.latitude || 0,
          longitude: item.longitude || 0,
          data: item.data,
        }));
        setCircles(circlesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getColorBasedOnValue = (value) => {
    const colorMap = {
      '0-200': '#66FF00',
      '201-400': '#32de84',
      '401-600': '#1CAC78',
      '601-800': '#018749',
      '801-1000': '#1B4D3E',
    };

    const rangeKey = Object.keys(colorMap).find((range) => {
      const [min, max] = range.split('-').map(Number);
      return value >= min && value <= max;
    });

    return rangeKey ? colorMap[rangeKey] : '#66FF00';
  };

  const MapWithCircles = () => {
    return (
      <>
        {circles.map((circle) => (
          <Circle
            key={circle.id}
            center={[circle.latitude, circle.longitude]}
            radius={Math.sqrt(circle.data) * 20000}
            pathOptions={{
              fillColor: getColorBasedOnValue(circle.data),
              fillOpacity: 1,
              color: 'transparent',
            }}
          >
            <Popup>{`Region: ${circle.region}\nData Usage: ${circle.data}`}</Popup>
          </Circle>
        ))}
      </>
    );
  };

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapWithCircles />
    </MapContainer>
  );
}
