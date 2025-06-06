import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa"

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);

        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    const menuItems = [
        {id: "about", label: "About"},
        {id: "skills", label: "Skills"},
        {id: "experience", label: "Experience"},
        {id: "projects", label: "Projects"},
        {id: "education", label: "Education"},
    ];

    return(
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414]/60 backdrop-filter backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
            <div className="text-white py-5 flex justify-between items-center">
                <div className="text-lg font-semibold cursor-pointer">
                    <span className="text-blue-500">&lt;</span>
                    <span className="text-white">Advanced</span>
                    <span className="text-blue-500">/</span>
                    <span className="text-white">Portfolio</span>
                    <span className="text-blue-500">&gt;</span>
                </div>
                
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {menuItems.map((item) => (
                        <li key={item.id} className={`cursor-pointer hover:text-blue-500 ${activeSection === item.id ? "text-blue-500" : ""}`}>
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex space-x-4">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                    <FaGithub size={24}/>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                    <FaLinkedin size={24}/>
                    </a>
                </div>

                {/* Mobile menu icons */}
                <div className="md:hidden">
                    {
                        isOpen ? (
                            <FiX className="text-3xl text-blue-500 cursor-pointer" onClick={() => setIsOpen(false)}/>
                        ) : (
                            <FiMenu className="text-3xl text-blue-500 cursor-pointer" onClick={() => setIsOpen(true)} />
                        )
                    }
                </div>
            </div>

            {/* Mobile menu items */}
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/60 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item) => (
                            <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-blue-500" : ""}`}>
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaGithub size={24}/>
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaLinkedin size={24}/>
                            </a>
                        </div>
                    </ul>
                </div>
            )}

        </nav>
    );
}

export default NavBar