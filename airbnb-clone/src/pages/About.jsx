import { motion } from "framer-motion"

function About() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto py-16 px-6 text-center"
        >
            <h1 className="text-3xl font-bold text-cyan-800 mb-4">About WanderIn</h1>
            <p className="text-gray-700 leading-relaxed">
                WanderIn is your passport to India's most unique and unforgettable stays —
                from serene riversides in Varanasi to misty hills of Coorg. We're a frontend-only
                travel experience, built to celebrate the diversity and culture of India's cities.
            </p>
            <p className="mt-6 text-gray-600 text-sm">Crafted using React, Tailwind, and dreams.</p>
        </motion.div>
    );
}

export default About