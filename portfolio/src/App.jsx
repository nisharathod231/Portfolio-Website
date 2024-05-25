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
          className="w-8 h-8 bg-[#f59fc0] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#f59fc0')}
        ></button>
        <button
          className="w-8 h-8 bg-[#79a8f2] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#79a8f2')}
        ></button>
        <button
          className="w-8 h-8 bg-[#f5c49f] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#f5c49f')}
        ></button>
        <button
          className="w-8 h-8 bg-[#c6f59f] rounded-full border-b-4 border-black"
          onClick={() => changeColor('#c6f59f')}
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
