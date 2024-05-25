import React, { useState } from "react";
import "/Users/nisharathod/Desktop/Notes/Portfolio-Website/portfolio/src/index.css"; // Ensure to import the CSS file

function Intro() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="h-screen bg-custom flex items-center justify-center">
            <div className="flex h-5/6 w-5/6 max-w-screen-lg bg-white shadow-lg rounded-lg overflow-hidden border-[1px] border-[#000000]">
                {/* Left Panel */}
                <div className="flex flex-col w-2/3 bg-[#FFA3FD] p-6">
                    <div className="flex-1 flex items-center justify-center">
                        <img src="src/assets/myimg.png" alt="Nisha Rathod" className="rounded-full h-48 w-48" />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                        </p>
                    </div>
                </div>
                {/* Partition Line */}
                <div className="w-1 bg-[#865DFF]"></div>
                {/* Right Panel */}
                <div className="flex w-1/3 items-center justify-center bg-[#865DFF]">
                    <h1
                        className="text-center text-3xl md:text-6xl mb-1 md:mb-3 font-bold text-black"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {hovered ? "01001110 01101001 01110011 01101000 01100001" : "Nisha Rathod"}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Intro;
