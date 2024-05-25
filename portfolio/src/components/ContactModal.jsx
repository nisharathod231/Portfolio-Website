import React from "react";
import closeIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/close.png'; // Update the path to your close.png icon
import mailIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/envelope.png'; // Update the path to your close.png icon
import caution from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/caution.png'; // Update the path to your close.png icon

function ContactModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    const handleClose = () => {
        onClose();
    };

    

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 z-50 overflow-y-auto">
            <div className="bg-white p-8 w-4/5 h-3/5 relative">
                <button className="absolute top-2 right-2" onClick={handleClose}>
                    <img src={closeIcon} alt="Close" className="w-16 h-16" />
                </button>
                <div className="flex items-center space-x-4">
                     <img src={mailIcon} alt="Close" className="w-16 h-16" />
                     <p className="font-pixelify text-4xl px-7 py-2">rathod.nisha@iiitb.ac.in</p>
                </div>
                <div className="flex items-center space-x-4">
                     <img src={caution} alt="Close" className="w-16 h-16" />
                     <p className="font-pixelify text-4xl px-7 py-2">Telepathy (if known)</p>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
