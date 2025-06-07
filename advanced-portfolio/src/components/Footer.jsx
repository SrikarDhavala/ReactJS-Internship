import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {

    const handleScroll = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-semibold text-blue-500">
                    Srikar
                </h2>

                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-2">
                    {[
                        { name: "About", id: "about" },
                        { name: "Skills", id: "skills" },
                        { name: "Experience", id: "experience" },
                        { name: "Projects", id: "projects" },
                        { name: "Education", id: "education" },
                    ].map((item, index) => (
                        <button key={index} onClick={() => handleScroll(item.id)} className="hover:text-blue-500 text-sm sm:text-base my-1 cursor-pointer">{item.name}</button>
                    ))}
                </nav>

                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        {icon: <FaGithub />, link: "#"},
                        {icon: <FaLinkedin />, link: "#"},
                        {icon: <FaInstagram />, link: "#"},
                        {icon: <FaYoutube />, link: "#"},
                        {icon: <FaTwitter />, link: "#"},
                    ].map((social, index) => (
                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition-transform transform hover:scale-140">
                            {social.icon}
                        </a>
                    ))}
                </div>

                <p className="text-sm text-gray-400 mt-2">
                    &copy; 2025 Srikar. All rights are not reserved, but please dont use it ^_^
                </p>
            </div>
        </footer>
    );
}

export default Footer