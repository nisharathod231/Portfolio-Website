import React from "react";
import closeIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/close.png'; // Update the path to your close.png icon

function SocialModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    const handleClose = () => {
        onClose();
    };

    const images = [
        "src/assets/github.png",
        "src/assets/linkedin.png",
        "src/assets/medium.png",
    ];

    const links = [
        "https://github.com/nisharathod231",
        "https://www.linkedin.com/in/nisha-rathod-093a86190/",
        "https://medium.com/@nisharathod5093"
    ];

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 z-50 overflow-y-auto">
            <div className="bg-white p-8 w-4/5 h-3/5 relative">
                <button className="absolute top-2 right-2" onClick={handleClose}>
                    <img src={closeIcon} alt="Close" className="w-16 h-16" />
                </button>
                <div className="grid grid-cols-3 gap-7 mt-6 max-h-[50vh] overflow-y-auto">
                    {images.map((image, index) => (
                        <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden hover:scale-95 transition-transform duration-300">
                            <img src={image} alt={`Image ${index}`} className="w-full h-auto" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SocialModal;
