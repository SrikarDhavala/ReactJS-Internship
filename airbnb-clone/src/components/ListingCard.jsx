import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { useAuth } from "../context/AuthContext";

function ListingCard({ listing }) {

    const { isMember } = useAuth();

    return (
        <Link to={`/listing/${listing.id}`} className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transform transition duration-200 border border-gray-100">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-800">{listing.title}</h3>
                        <p className="text-sm text-gray-500">{listing.location}</p>
                    </div>
                    <div className="flex items-center text-emerald-500 text-sm font-medium">
                        <FaStar className="mr-1" /> {listing.rating}
                    </div>
                </div>
                <div className="mt-2">
                    {isMember ? (
                        <>
                            <p className="line-through text-gray-400 text-sm">₹{listing.price}</p>
                            <p className="text-emerald-600 font-bold">
                                ₹{(listing.price * 0.9).toFixed(0)} <span className="text-sm text-gray-400">/night</span>
                            </p>
                        </>
                    ) : (
                        <p className="font-semibold text-gray-700">
                            ₹{listing.price} <span className="text-sm text-gray-400">/night</span>
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default ListingCard