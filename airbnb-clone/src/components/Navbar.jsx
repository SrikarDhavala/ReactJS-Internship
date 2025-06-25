import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { isLoggedIn, logout } = useAuth();

    return(
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-semibold text-cyan-600">WanderIn</Link>
                <div className="space-x-6 text-sm text-gray-700">
                    <Link to="/" className="hover:text-cyan-700">Home</Link>
                    <Link to="/about" className="hover:text-cyan-700">About</Link>
                    <Link to="/membership" className="hover:text-cyan-700">Membership</Link>
                    {isLoggedIn ? (
                        <button onClick={logout} className="text-sm text-gray-700 hover:text-red-600 transition cursor-pointer">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="hover:text-cyan-700">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar