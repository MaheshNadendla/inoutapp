import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function InOutNavBar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333', top: 0, left: 0 }}>
      <Toolbar>
        {/* Show Menu Icon only on Mobile */}
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
        
        {/* Center: Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Campus Flow
        </Typography>
      </Toolbar>
      
      {/* Drawer Menu */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default InOutNavBar;
