import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mt-15 p-8 text-gray-700"
        >
            <h1 className="text-3xl font-bold mb-6 text-cyan-700">Contact Us</h1>
            <p className="text-sm mb-4">
                We'd love to hear from you! Whether you're dreaming up your next getaway or just want to say hello!
            </p>

            <form onSubmit={(e) => {
                e.preventDefault();
                navigate("/")
            }} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1" htmlFor="name">Name</label>
                    <input id="name" type="text" required className="w-full border border-gray-300 px-4 py-2 rounded outline-cyan-500" />
                </div>
                <div>
                    <label className="block text-sm mb-1" htmlFor="email">Email</label>
                    <input id="email" type="email" required className="w-full border border-gray-300 px-4 py-2 rounded outline-cyan-500" />
                </div>
                <div>
                    <label className="block text-sm mb-1" htmlFor="message">Message</label>
                    <textarea id="message" rows="4" required className="w-full border border-gray-300 px-4 py-2 rounded outline-cyan-500"></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition cursor-pointer"
                >
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
}

export default Contact