import listings from "../data/listings"
import ListingCard from "../components/ListingCard";
import { motion } from "framer-motion"

function Home() {

    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero / Search */}
            <motion.section
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-2">
                    Explore Unique Stays Across India
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    From mountains to coasts—book your next adventure with WanderIn
                </p>

                <div className="mt-6 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search city, stay, or location..."
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-cyan-600 focus:outline-none"
                    />
                </div>
            </motion.section>

            {/* Listing Grid */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-10 px-4 md:px-0 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                {listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </motion.section>
        </div>
    );
}

export default Home