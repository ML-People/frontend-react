import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Getputbuttons from './components/Getputbuttons';

function App() {
  return (
    <div className='App'>
      <Getputbuttons />
      <Navbar /> 
    </div>
  );
}

export default App;
