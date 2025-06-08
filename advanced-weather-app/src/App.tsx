import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Setting from "./components/Setting";
import type { WeatherData, ForecastData, TemperatureUnit } from "./types";
import WeatherCard from "./components/WeatherCard";
import { motion } from "framer-motion";
import axios from "axios";
import Forecast from "./components/Forecast";

function App() {
  const [unit, setUnit] = useState<TemperatureUnit>('celsius');

  const API_URL = "https://api.openweathermap.org/data/2.5";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSearch = (city: string) => {

  }

  const handleUnitChange = (unit: string) => {

  }
  
  return(
    <>
      <div className="bg-blue-500 h-screen py-8">
        <SearchBar onSearch={handleSearch} onLocationRequest={() => {}} isLoading={false} />
        <Setting unit={unit} onUnitChange={handleUnitChange} />
        <div className="py-8">
          <WeatherCard data={{} as any} unit={unit} />
        </div>
      </div>
    </>
  );
}

export default App
