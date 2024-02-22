import React, { useState } from 'react';
import CustomAppBar from './CustomAppBar';
import CustomDrawer from './CustomDrawer';

const Tags = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  };

  return (
    <>
      <CustomAppBar onMenuClick={handleSidebarToggle} onLogout={handleLogout} />
      <CustomDrawer open={openSidebar} onClose={() => setOpenSidebar(false)} />
      
    </>
  );
};

export default Tags;
