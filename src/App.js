import React from 'react'
import './App.css';
import Home from './components/pages/Home'
import Upload from './components/pages/Upload'
import About from './components/pages/About'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Upload />
      <About />
    </div>
  );
}

export default App;
