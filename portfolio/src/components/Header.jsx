import React, { useState } from "react";

function Header() {
    const [active, setActive] = useState("");

    const handleClick = (option) => {
        setActive(option);
    };

    return (
        <div className="bg-white p-4 flex justify-center space-x-4 border-b-8 border-black">
            {["Projects", "Volunteer" ,"Social"].map((option) => (
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
    );
}

export default Header;
