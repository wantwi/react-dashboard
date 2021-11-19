import React from 'react'
import {Box,Toolbar,IconButton,AppBar} from '@mui/material';

import * as BiIcons from 'react-icons/bi';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style={{background:"#ffffff",color:"black"}} position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <BiIcons.BiMenuAltLeft />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Header
