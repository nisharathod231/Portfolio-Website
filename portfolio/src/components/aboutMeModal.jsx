import React from "react";
import closeIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/close.png'; // Update the path to your close.png icon
import pfp from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/pfp.png'; // Update the path to your close.png icon

function Modal({ isOpen, onClose }) {
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
                <div className="max-h-full overflow-y-auto">
                    <div className="grid grid-cols-3 gap-7 mt-6">
                        <img src={pfp} alt="Profile" className="w-21 h-21 rounded-full" />
                    </div>
                    <div className="mt-4">
                        <p className="font-pixelify text-5xl px-7 py-1">Nisha Rathod</p>
                        <p className="font-pixelify text-4xl px-7 py-2">kaizokuō ni ore wa naru! -Luffy</p>
                        <p className="font-pixelify text-xl px-7 py-2">I am currently pursuing my Masters in Computer Science from IIIT, Bengaluru. My Btech is in Electronics & Telecommunication from KJSIT, Mumbai. I enjoy learning and collaborating with my peers. When I am not coding you'll find me playing guitar or video games. The world and its people are amazing!</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
