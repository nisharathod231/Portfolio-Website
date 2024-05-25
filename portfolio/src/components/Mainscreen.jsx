import React, { useState } from "react";
import fileIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/file.png';
import hatIcon from '/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/assets/hat.png';
// import Modal from "./Modal"; // Import the Modal component here
import Modal from "./aboutMeModal";
function Mainscreen() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative h-full">
            <div className="absolute right-4 top-4 flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center">
                    <img src={fileIcon} alt="File Icon" className="w-28 h-28 cursor-pointer" onClick={openModal} />
                    <span className="mt-2 bg-white text-black px-1 py-1">READ ME</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={hatIcon} alt="Hat Icon" className="w-28 h-28 cursor-pointer" />
                    <span className="mt-2 bg-white text-black px-1 py-1">Sourcecode</span>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default Mainscreen;
