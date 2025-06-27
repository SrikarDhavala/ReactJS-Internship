import listings from "../data/listings"
import ListingCard from "../components/ListingCard";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

function Home() {

    const [query, setQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const filteredListings = listings.filter((listing) => {
        const q = query.toLowerCase();
        return (
            listing.title.toLowerCase().includes(q) ||
            listing.location.toLowerCase().includes(q)
        );
    }).sort((a,b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
    });

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
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-cyan-600 focus:outline-none"
                    />
                </div>
                <div className="mt-4 flex justify-center">
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-cyan-600 focus:outline-none text-sm"
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </div>
            </motion.section>

            {/* Filtered Listing Grid */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-10 px-4 md:px-0 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                <AnimatePresence>
                    {filteredListings.length > 0 ? (
                        filteredListings.map((listing) => (
                            <motion.div
                                key={listing.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transform transition duration-200 border border-gray-100"
                            >
                                <ListingCard listing={listing} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            key="no-results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full text-center text-gray-500 py-10"
                        >
                            No stays match your search 😔<br />
                            Try a different city or reset your filters!
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.section>
        </div>
    );
}

export default Home