import React from 'react'; // Add this import
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import DrainageManagement from './components/DrainageManagement';
import Maps from './components/Maps';
import WeatherData from './components/WeatherData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/drainage",
    element: <DrainageManagement />,
  },

  {
    path: "/map",
    element: <Maps />,
  },

  {
    path: "/weather-data",
    element: <WeatherData />
  },

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
