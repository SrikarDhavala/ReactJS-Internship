import { useState } from "react"
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        navigate('/');
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center min-h-screen bg-white px-4"
        >
            <form className="bg-gray-50 shadow-lg rounded-lg p-8 w-full max-w-md border" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-cyan-800 text-center mb-6">Log In</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition cursor-pointer"
                >
                    Sign In
                </button>
            </form>
        </motion.div>
    );
}

export default Login