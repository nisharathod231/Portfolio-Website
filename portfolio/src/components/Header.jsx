import React, { useState } from "react";
import typingIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/typing.png';
import usersIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/users.png';
import batteryIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/battery.png';

function Header() {
    const [active, setActive] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const handleClick = (option) => {
        setActive(option);
    };

    const toggleIcon = () => {
        setIsTyping(!isTyping);
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
                {["Projects", "Volunteer", "Social"].map((option) => (
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
            <div>
                <img
                    src={batteryIcon}
                    alt="Battery Icon"
                    className="w-16 h-16"
                />
            </div>
        </div>
    );
}

export default Header;
