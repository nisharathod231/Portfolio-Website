import React from 'react';
import Header from './components/Header';
import Mainscreen from './components/Mainscreen';
import Modal from './components/Modal'; // Import the Modal component here


function App() {
  return (
    <div className='App h-screen bg-[#5d6169]'>
      <Header />
      <Mainscreen />
      <Modal />
    </div>
  );
}

export default App;
