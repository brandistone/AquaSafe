import  { useState, useEffect } from 'react';

const API_DRAINAGE_SYSTEM = "your_drainage_system_api_url_here";

const DrainageManagement = () => {
  const [drainageData, setDrainageData] = useState<any>(null);

  useEffect(() => {
    fetch(API_DRAINAGE_SYSTEM)
      .then(response => response.json())
      .then(data => {
        setDrainageData(data);
      })
      .catch(error => {
        console.error("Error fetching drainage system data: ", error);
      });
  }, []);

  if (!drainageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Drainage System Status</h2>
      <p>Capacity: {drainageData.capacity}%</p>
      <p>Flow Rate: {drainageData.flowRate} m³/s</p>
      <p>Area of Concern: {drainageData.areasOfConcern.join(", ")}</p>
    </div>
  );
};

export default DrainageManagement;
