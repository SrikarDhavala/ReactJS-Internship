import { useParams, useNavigate } from "react-router-dom"
import listings from "../data/listings"
import { motion } from "framer-motion"

function Booking() {

    const { id } = useParams();
    const navigate = useNavigate();
    const listing = listings.find((l) => l.id === id);

    if (!listing) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-700">Stay not found!</h2>
                <p className="text-gray-500 mt-2">Please go back and try again</p>
            </div>
        )
    }

    return (
        <motion.div className="max-w-3xl mx-auto px-4 py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <h1 className="text-2xl font-bold text-cyan-800 mb-2">Book Your Stay</h1>
            <p className="text-gray-600 mb-6">{listing.title} — {listing.location}</p>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/success"); // redirects to success screen
                }}
                className="space-y-4 bg-white p-6 rounded-lg shadow-md"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-cyan-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-cyan-500 focus:outline-none"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Check-In</label>
                        <input
                            type="date"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Check-Out</label>
                        <input
                            type="date"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-cyan-500 focus:outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md transition cursor-pointer"
                >
                    Confirm Booking
                </button>
            </form>
        </motion.div>
    );
}

export default Booking