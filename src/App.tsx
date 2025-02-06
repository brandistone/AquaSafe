import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FloodPrediction from './components/FloodPrediction';

import SettingsPage from './components/WeatherData';
import DrainageManagement from './components/DrainageManagement';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flood-prediction" element={<FloodPrediction />} />
          <Route path="/drainage" element={<DrainageManagement />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
