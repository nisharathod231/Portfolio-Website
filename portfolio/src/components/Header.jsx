import React, { useState } from "react";
import typingIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/typing.png';
import usersIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/users.png';
import batteryIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/battery.png';
import location from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/location.png';

import Modal from "./Modal";
import SocialModal from "./SocialModal";
import ContactModal from "./ContactModal";
import Projects from "./aboutMeModal";

function Header() {
    const [active, setActive] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSocialOpen, setIsSocialOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleClick = (option) => {
        console.log("Opening modal");
        setActive(option);
        if (option === "projects") {
            setIsModalOpen(true);
        }
        if (option === "social") {
            setIsSocialOpen(true);
        }
    };

    const toggleIcon = () => {
        setIsTyping(!isTyping);
        setIsContactOpen(true);  // Open the modal when the icon is clicked
    };

    const closeModal = () => {
        console.log("Closing modal");
        setIsModalOpen(false);
    };

    const closeSocialModal = () => {
        console.log("Closing modal");
        setIsSocialOpen(false);
    };

    const closeContactModal = () => {
        console.log("Closing modal");
        setIsContactOpen(false);
    };

    return (
        <div className="bg-white p-4 flex justify-between items-center border-b-4 border-black">
            <div className="flex items-center space-x-4">
                <img
                    src={isTyping ? typingIcon : usersIcon}
                    alt="Toggle Icon"
                    className="w-16 h-16 cursor-pointer"
                    onClick={toggleIcon}
                />
                {["Projects", "Social"].map((option) => (
                    <button
                        key={option}
                        className={`font-pixelify text-6xl px-4 py-2 transition-colors duration-300 ${
                            active === option.toLowerCase()
                                ? "bg-black text-white"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                        onClick={() => handleClick(option.toLowerCase())}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="flex items-center space-x-4">
                <img src={location} alt="Location Icon" className="w-16 h-16" />
                <p className="font-pixelify text-6xl">Bengaluru</p>
                <img src={batteryIcon} alt="Battery Icon" className="w-16 h-16" />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <SocialModal isOpen={isSocialOpen} onClose={closeSocialModal} />
            <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />

        </div>
    );
}

export default Header;
