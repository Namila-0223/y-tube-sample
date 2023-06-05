import './App.css';
import NavBar from './components/Navbar';
import SideNav from './components/SideNav';

import React from 'react';
import AppNavMenu from './components/navigation/AppNavMenu';
import { Box } from '@mui/material';
import {appWrapper} from '../src/styles/styles'
import AppContentArea from './components/AppContentArea';



function App() {
  const [mobileOpen, setMobileOpen]= React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((v) => !v);
  };

  return (
    <Box sx={appWrapper}>
      <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
      <AppContentArea isOpen={mobileOpen}/>
    </Box>
    
    // <>
    // <NavBar/>
    //  {/* <SideNav/> */}
    // </>
  );
}

export default App;
