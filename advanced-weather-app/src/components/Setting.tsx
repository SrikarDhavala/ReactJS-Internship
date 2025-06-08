import { motion } from "framer-motion"
import { Thermometer } from "lucide-react"
import type { TemperatureUnit } from "../types"
import type React from "react";

interface SettingProps {
    unit: TemperatureUnit;
    onUnitChange: (unit: TemperatureUnit) => void;
}

const Setting : React.FC<SettingProps> = ({unit, onUnitChange}) => {

    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-white" />
            <select value={unit} onChange={(e) => onUnitChange(e.target.value as TemperatureUnit)} className="bg-blue-400 backdrop-blur-md text-white rounded-lg px-3 py-2 text-sm outline-none cursor-pointer">
                <option value="celcius" className="">Celsius</option>
                <option value="fahrenheit" className="">Fahrenheit</option>
            </select>
        </motion.div>
    );
}

export default Setting