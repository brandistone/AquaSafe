import { useState, useEffect } from 'react';

const API_FLOOD_PREDICTION = "your_flood_prediction_api_url_here";

const FloodPrediction = () => {
  const [floodRisk, setFloodRisk] = useState<any>(null);

  useEffect(() => {
    fetch(API_FLOOD_PREDICTION)
      .then(response => response.json())
      .then(data => {
        setFloodRisk(data);
      })
      .catch(error => {
        console.error("Error fetching flood prediction data: ", error);
      });
  }, []);

  if (!floodRisk) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Flood Risk Prediction</h2>
      <p>Flood Risk: {floodRisk.level}</p>
      <p>Area: {floodRisk.area}</p>
      <p>Predicted Rainfall: {floodRisk.predictedRainfall} mm</p>
    </div>
  );
};

export default FloodPrediction;
