import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {

    const { isLoggedIn, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center text-cyan-600 transform hover:scale-115 transition duration-200">
                    <img src="/WanderIn_Logo.png" alt="WanderIn Logo" className="h-10 w-auto -mr-2" />
                    <span className="text-2xl font-semibold ml-2">WanderIn</span>
                </Link>

                {/* For larger screens */}
                <div className="hidden md:flex space-x-6 text-sm text-gray-700">
                    <Link to="/" className="hover:text-cyan-700 transform hover:scale-115 transition duration-200">Home</Link>
                    <Link to="/about" className="hover:text-cyan-700 transform hover:scale-115 transition duration-200">About</Link>
                    <Link to="/membership" className="hover:text-cyan-700 transform hover:scale-115 transition duration-200">Membership</Link>
                    <Link to="/contact" className="hover:text-cyan-700 transform hover:scale-115 transition duration-200">Contact Us</Link>
                    {isLoggedIn ? (
                        <button onClick={logout} className="hover:text-red-600 transform hover:scale-115 transition duration-200">Logout</button>
                    ) : (
                        <Link to="/login" className="hover:text-cyan-700 transform hover:scale-115 transition duration-200">Login</Link>
                    )}
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-cyan-600 focus:outline-none">
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* For smaller screens */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-md z-20 px-6 pt-2 pb-4 shadow-md space-y-3 text-gray-700">
                    <Link to="/" onClick={toggleMenu} className="block hover:text-cyan-700">Home</Link>
                    <Link to="/about" onClick={toggleMenu} className="block hover:text-cyan-700">About</Link>
                    <Link to="/membership" onClick={toggleMenu} className="block hover:text-cyan-700">Membership</Link>
                    <Link to="/contact" onClick={toggleMenu} className="block hover:text-cyan-700">Contact Us</Link>
                    {isLoggedIn ? (
                        <button onClick={() => { logout(); toggleMenu(); }} className="block hover:text-red-600">Logout</button>
                    ) : (
                        <Link to="/login" onClick={toggleMenu} className="block hover:text-cyan-700">Login</Link>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar