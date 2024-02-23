// CustomLayout.js
import React from 'react';
import CustomAppBar from './CustomAppBar';
import CustomDrawer from './CustomDrawer';

const CustomLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

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
      {children}
    </>
  );
};

export default CustomLayout;
