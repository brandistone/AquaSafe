import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [floodRisk, setFloodRisk] = useState<any>(null);

  useEffect(() => {
    // Fetch weather data (Replace with your weather API or real-time data source)
    fetchWeatherData();

    // Fetch flood risk data (Replace with real flood risk API)
    fetchFloodRiskData();
  }, []);

  const fetchWeatherData = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Location');
    const data = await response.json();
    setWeatherData(data);
  };

  const fetchFloodRiskData = async () => {
    const response = await fetch('https://api.example.com/flood-risk');
    const data = await response.json();
    setFloodRisk(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome to the Smart Flood Management System</h1>
          <nav className="space-x-4">
            <Link to="/flood-prediction" className="hover:underline">Flood Predictions</Link>
            <Link to="/drainage" className="hover:underline">Drainage Management</Link>
            <Link to="/settings" className="hover:underline">Settings</Link>
          </nav>
        </div>
      </header>

      <main className="p-6">
        <div className="space-y-8">
          {/* Weather Overview */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
            {weatherData ? (
              <div>
                <p><strong>Temperature:</strong> {weatherData.current.temp_c}°C</p>
                <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
                <p><strong>Rainfall:</strong> {weatherData.current.precip_mm} mm</p>
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
          </section>

          {/* Flood Risk */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Flood Risk Overview</h2>
            {floodRisk ? (
              <div>
                <p><strong>Current Risk:</strong> {floodRisk.riskLevel}</p>
                <p><strong>Risk Areas:</strong> {floodRisk.riskAreas.join(', ')}</p>
              </div>
            ) : (
              <p>Loading flood risk data...</p>
            )}
          </section>

          {/* Alerts */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Upcoming Alerts</h2>
            <ul className="list-disc pl-5">
              <li>Flood risk in Zone 3 within the next 24 hours.</li>
              <li>Heavy rainfall expected tomorrow.</li>
              <li>Drainage system maintenance in Zone 1.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
