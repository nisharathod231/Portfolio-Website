import React, { useState } from 'react';
import Header from './components/Header';
import Mainscreen from './components/Mainscreen';
import Modal from './components/Modal'; // Import the Modal component here

function App() {
  const [bgColor, setBgColor] = useState('#5d6169');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className='App h-screen overflow-hidden' style={{ backgroundColor: bgColor }}>
      <Header />
      <Mainscreen />
      <Modal />
      <div className="fixed bottom-4 left-4 flex space-x-2">
        <button
          className="w-8 h-8 bg-[#4793AF] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#4793AF')}
        ></button>
        <button
          className="w-8 h-8 bg-[#FFC470] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#FFC470')}
        ></button>
        <button
          className="w-8 h-8 bg-[#DD5746] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#DD5746')}
        ></button>
        <button
          className="w-8 h-8 bg-[#43766C] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#43766C')}
        ></button>
        <button
          className="w-8 h-8 bg-gray-500 rounded-full border-b-4 border-black"
          onClick={() => changeColor('gray')}
        ></button>
      </div>
    </div>
  );
}

export default App;
