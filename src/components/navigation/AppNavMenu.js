import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
  appBar,
  toolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile, 
} from '../../styles/styles';
import { PropaneSharp } from '@mui/icons-material';
import SearchBar from './SearchBar';
import UserProfile from '../UserProfile';

const AppNavMenu =(props) =>{
// function AppNavMenu() {
  return (
    <AppBar component="nav" sx={appBar}>
        <Toolbar>
            <Box sx={toolbarWrapper}>
                <Box sx={flexAlignCenter}>
                    <IconButton 
                    color='inherit' 
                    aria-label='open drawer' 
                    edge='start' 
                    onClick={props.handleDrawerToggle}
                    sx={{mr:2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <AiFillYoutube size={32}/>
                    <Typography variant='h6' component="div" sx={logoText}>
                       Youtube
                    </Typography>
                </Box>
                {/* <Box sx={hideOnMobile}>
                  <SearchBar/>
                </Box> */}
                {/* <Box sx={hideOnMobile}>
                  <UserProfile/>
                </Box> */}
            </Box>      
        </Toolbar>      
    </AppBar>
  )
}

export default AppNavMenu
