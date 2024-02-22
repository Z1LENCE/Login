import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

function CustomAppBar({ onMenuClick, onLogout }) {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button
          variant="contained"
          onClick={onLogout}
          sx={{ borderRadius: '2rem', fontSize: '14px'}}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
