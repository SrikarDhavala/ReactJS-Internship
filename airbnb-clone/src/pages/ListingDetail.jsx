import { useParams, useNavigate } from "react-router-dom"
import listings from "../data/listings"
import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"

function ListingDetail() {

    const { isMember } = useAuth();

    const { id } = useParams();
    const navigate = useNavigate();
    const listing = listings.find((item) => item.id === id);

    if (!listing) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-700">Listing not found!</h2>
                <p className="text-gray-500 mt-2">Try returning to the Homepage</p>
            </div>
        )
    }

    return (
        <motion.div className="max-w-5xl mx-auto px-4 py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <img src={listing.img} alt={listing.title} className="w-full h-[400px] object-cover rounded-xl shadow-sm" />
            <div className="mt-6">
                <h1 className="text-3xl font-bold text-cyan-800">{listing.title}</h1>
                <p className="text-gray-600 text-sm mt-1">{listing.location}</p>

                <div className="flex items-center gap-2 text-emerald-600 text-sm mt-2">
                    <FaStar className="inline-block" /> {listing.rating} • Highly rated stay
                </div>

                <p className="mt4 text-gray-700">
                    Experience a beautiful getaway in {listing.location}. This listing includes all the comfort you need to relax and enjoy your trip across India. Hosted by professionals.
                </p>

                {listing.amenities && listing.amenities.length > 0 && (
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Amenities</h2>
                        <ul className="flex flex-wrap gap-2">
                            {listing.amenities.map((amenity, idx) => (
                                <li
                                    key={idx}
                                    className="bg-cyan-50 text-cyan-800 px-3 py-1 text-sm rounded-full border border-cyan-200 shadow-sm hover:bg-cyan-100 transition"
                                >
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {listing.nearbyLocations && listing.nearbyLocations.length > 0 && (
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Nearby Tourist Spots</h2>
                        <ul className="flex flex-wrap gap-2">
                            {listing.nearbyLocations.map((spot, idx) => (
                                <li
                                    key={idx}
                                    className="bg-emerald-50 text-emerald-700 px-3 py-1 text-sm rounded-full border border-emerald-200 shadow-sm hover:bg-emerald-100 transition"
                                >
                                    {spot.name} • {spot.distance}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <div className="mt-6 flex justify-between items-center">
                    <div>
                        {isMember ? (
                            <>
                                <p className="line-through text-gray-400 text-sm">₹{listing.price}</p>
                                <p className="text-emerald-600 font-bold text-lg">
                                    ₹{(listing.price * 0.9).toFixed(0)} <span className="text-sm text-gray-500">/ night</span>
                                </p>
                                <p className="text-xs text-emerald-500 mt-1">WanderIn Plus discount applied</p>
                            </>
                        ) : (
                            <p className="text-lg font-semibold text-gray-800">
                                ₹{listing.price} <span className="text-sm text-gray-500">/ night</span>
                            </p>
                        )}
                    </div>
                    <button onClick={() => navigate(`/booking/${listing.id}`)} className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg shadow-md transition cursor-pointer">
                        Book Now
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default ListingDetail