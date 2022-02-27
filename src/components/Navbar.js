import React from 'react'
import { AppBar, Typography } from '@mui/material'
import { Toolbar } from '@mui/material'


const Navbar = () => {
  return (
    <AppBar position="sticky"> 
        <Toolbar>
            <Typography>
                AI Image Enhancement
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar