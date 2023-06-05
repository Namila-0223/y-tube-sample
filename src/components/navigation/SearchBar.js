import { Box } from '@mui/system';
import { BsFillMicFill } from 'react-icons/bs';
import { Button } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { flexAlignCenter, searchBar } from '../../styles/styles';

const SearchBar = () => {
  return (
    <Box sx={flexAlignCenter}>
        <Paper component="form" sx={searchBar}>
            <InputBase sx={{ ml:1, flex: 1, pl: 1}} placeholder='Search...'/>
                <IconButton 
                sx={{ backgroundColor: '#eee', borderRadius: 10, p: '10px' }} 
                type="submit" 
                aria-label="search"
                >
                    <SearchBar/>
                </IconButton>
        </Paper>
        <Button sx={{minWidth: 'auto'}}>
            <BsFillMicFill size={18}/>
        </Button>
    </Box>
  )
}

export default SearchBar
