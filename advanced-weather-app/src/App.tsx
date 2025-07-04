import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Setting from "./components/Setting";
import type { WeatherData, ForecastData, TemperatureUnit } from "./types";
import WeatherCard from "./components/WeatherCard";
import { motion } from "framer-motion";
import axios from "axios";
import Forecast from "./components/Forecast";

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [unit, setUnit] = useState<TemperatureUnit>('celsius');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForcast] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSearchedCity, setLastSearchedCity] = useState<string | null>(null);

  const getUnit = (selectedUnit: TemperatureUnit) => {
    return selectedUnit === "celsius" ? "metric" : "imperial";
  }

  const fetchWeatherData = async(lat: number, lon: number, selectedUnit: TemperatureUnit) => {
    try {
      setIsLoading(true);
      setError(null);
      const unit = getUnit(selectedUnit);
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`${API_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`),
        axios.get(`${API_URL}/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`),
      ])

      setWeather(weatherRes.data);
      setForcast(forecastRes.data);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again!");
      setWeather(null);
      setForcast(null);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchWeatherByCity = async(city: string, selectedUnit: TemperatureUnit) => {
    try {
      setIsLoading(true);
      setError(null);
      const unit = getUnit(selectedUnit);
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`${API_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`),
        axios.get(`${API_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`),
      ])

      setWeather(weatherRes.data);
      setForcast(forecastRes.data);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again!");
      setWeather(null);
      setForcast(null);
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleLocationRequest = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser!")
    }

    setIsLoading(true);
    setLastSearchedCity(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude, unit);
      },
      () => {
        setError("Failed to get your location. Please allow location access or search by city!");
        setIsLoading(false);
      }
    )
  }

  const handleUnitChange = (newUnit: TemperatureUnit) => {
    if (weather) {
      if (lastSearchedCity) {
        fetchWeatherByCity(lastSearchedCity, newUnit);
      } else if (weather.coord) {
        fetchWeatherData(weather.coord.lat, weather.coord.lon, newUnit);
      }
    }
    setUnit(newUnit);
  }

  const handleSearch = (city: string) => {
    fetchWeatherByCity(city, unit);
  }

  useEffect(() => {
    handleLocationRequest();
  }, []);

  return(
    <div className="min-h-screen w-full px-4 py-8 md:p-8 flex flex-col items-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <SearchBar onSearch={handleSearch} onLocationRequest={handleLocationRequest} isLoading={isLoading} />
          <Setting unit={unit} onUnitChange={handleUnitChange} />
        </div>
        
        {isLoading && (
          <div className="mt-20 text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p className="mt-4">Loading weather data...</p>
          </div>
        )}

        {error && (
          <motion.p initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} className="text-white mt-4 text-center bg-red-500/20 backdrop-blur-md px-4 py-2 rounded-full max-w-md mx-auto">
            {error}
          </motion.p>
        )}

        {weather?.alerts && (
          <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} className="mb-8">
            {weather.alerts.map((alert, index) => (
              <div key={index} className="bg-red-500/20 backdrop-blur-md rounded-lg p-4 mb-4 text-white">
                <h3 className="font-bold text-lg">{alert.event}</h3>
                <p className="mt-2 text-sm opacity-90">{alert.description}</p>
                <div>
                  <span>From: {new Date(alert.start * 1000).toLocaleString()}</span>
                  <span className="ml-4">To: {new Date(alert.end * 1000).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        <div className="mt-8 flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
          {weather && <WeatherCard data={weather} unit={unit} />}
          {forecast && <Forecast data={forecast} unit={unit} />}
        </div>

        {!weather && !error && !isLoading && (
          <div className="mt-20 text-white text-center">
            <p className="text-2xl">Welcome to Weather App</p>
            <p className="mt-2 opacity-70">Allow location access or search for a city to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
