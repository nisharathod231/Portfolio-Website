import React from "react";
import closeIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/close.png'; // Update the path to your close.png icon

function Modal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    const handleClose = () => {
        onClose();
    };

    const images = [
        "src/assets/projects/1.png",
        "src/assets/projects/2.png",
        "src/assets/projects/3.png",
        "src/assets/projects/4.png",
        "src/assets/projects/5.png",
        "src/assets/projects/6.png",
    ];

    const links = [
        "https://github.com/nisharathod231/Atya-Nidan",
        "https://github.com/nisharathod231/Sustainable-Agriculture-Practices-Recommender",
        "https://github.com/nisharathod231/Kalopsia",
        "https://github.com/nisharathod231/Translation-Using-Sequence-to-Sequence-Modelling",
        "https://github.com/nisharathod231/Modelling-Indian-Names",
        "https://github.com/nisharathod231/Contrastive-Representation"
    ];

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 z-50 overflow-y-auto">
            <div className="bg-white p-8 w-4/5 h-3/5 relative">
                <button className="absolute top-2 right-2" onClick={handleClose}>
                    <img src={closeIcon} alt="Close" className="w-16 h-16" />
                </button>
                {/* <div className="grid grid-cols-3 gap-7 mt-6 max-h-[50vh] overflow-y-auto">
                    {images.map((image, index) => (
                        <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden">
                            <img src={image} alt={`Image ${index}`} className="w-full h-auto rounded-lg border border-transparent hover:border-black hover:rounded-md hover:scale-105 transition-all duration-300" />
                        </a>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default Modal;
