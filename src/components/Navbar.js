import React from 'react'
import { Tabs, Tab, AppBar } from '@mui/material'
import Home from './pages/Home';
import Upload from './pages/Upload';
import About from './pages/About';


const Navbar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };


  return (
    <>
      <AppBar position='sticky'>
        <h2>AI Image Enhancement</h2>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Upload" />
          <Tab label="About" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Home />}
      {selectedTab === 1 && <Upload />}
      {selectedTab === 2 && <About />}
    </>
  )
}

export default Navbar