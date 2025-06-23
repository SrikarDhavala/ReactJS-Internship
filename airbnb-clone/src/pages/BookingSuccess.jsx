import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function BookingSuccess() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-center"
            >
                <FaCheckCircle className="text-emerald-500 text-7xl mb-4 drop-shadow-sm" />
                <h1 className="text-2xl font-semibold text-cyan-800 mb-2">Booking Confirmed!</h1>
                <p className="text-gray-600 mb-6">You're all set-can't wait to welcome you 🌟</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    className="bg-cyan-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-cyan-700 transition cursor-pointer"
                >
                    Return Home
                </motion.button>
            </motion.div>
        </div>
    );
}

export default BookingSuccess