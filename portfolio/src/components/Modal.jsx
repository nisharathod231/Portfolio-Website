import React from "react";

function Modal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 z-50">
            <div className="bg-white p-8 w-4/5 h-3/5 relative">
                <button className="absolute top-2 right-2" onClick={handleClose}>
                    Close
                </button>
                <div>Projects content goes here</div>
            </div>
        </div>
    );
}

export default Modal;
