import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Setting from "./components/Setting";
import type { TemperatureUnit } from "./types";

function App() {
  const [unit, setUnit] = useState<TemperatureUnit>('celsius');

  const handleSearch = (city: string) => {

  }

  const handleUnitChange = (unit: string) => {

  }
  
  return(
    <>
      <div className="bg-blue-500 h-screen py-8">
        <SearchBar onSearch={handleSearch} onLocationRequest={() => {}} isLoading={false} />
        <Setting unit={unit} onUnitChange={handleUnitChange} />
      </div>
    </>
  );
}

export default App
