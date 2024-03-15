import React, { useState,useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton, Drawer, Box, Typography, Menu, MenuItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Whatappchat from '../Whatsappchat/Whatsappchat';
import Chatingbox from '../Chatingbox/Chatingbox';
import SideMenu from './SideMenu';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Import the toggle button icon
import { useTheme } from '../../ThemeContext';
import SideMenu2 from './Sidemenu2';
import SideMenu3 from './SideMenu3';
import SideMenu4 from './SideMenu4';
import SideMenu5 from './SideMenu5';
import SideMenu6 from './SideMenu6';

const Sidebar = ({ onChatSelect,toggleTheme}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSideMenu2Open, setIsSideMenu2Open] = useState(false);
  const [isSideMenu3Open, setIsSideMenu3Open] = useState(false);
  const [isSideMenu4Open, setIsSideMenu4Open] = useState(false);
  const [isSideMenu5Open, setIsSideMenu5Open] = useState(false);
  const [isSideMenu6Open, setIsSideMenu6Open] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();


  const handleAvatarClick = () => {
    setIsSideMenuOpen(true);
  };

  const handleMenu2Click = () => {
    setIsSideMenu2Open(true);
  };

  const handleMenu3Click = () => {
    setIsSideMenu3Open(true);
  };

  const handleMenu4Click = () => {
    setIsSideMenu4Open(true);
  };

  const handleMenu5Click = () => {
    setIsSideMenu5Open(true);
  };

  const handleMenu6Click = () => {
    setIsSideMenu6Open(true);
    // Close the dropdown menu when Sidemenu6 opens
    setIsMenuOpen(false);
  };

  const handleCloseSideMenu = () => {
    setIsSideMenuOpen(false);
    setIsSideMenu2Open(false);
    setIsSideMenu3Open(false);
    setIsSideMenu4Open(false);
    setIsSideMenu5Open(false);
    setIsSideMenu6Open(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };








  return (
    <div   className={`sidebar ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} >

        <div className='navbar_sidebar'>
          <div className='navbar'>
            <div className='left_navbar'>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleAvatarClick}>
                <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src="https://cdn4.sharechat.com/compressed_gm_40_img_749687_19114326_1695627746781_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=781_sc.jpg" />
              </IconButton>
            </div>
            <div className='right_navbar'>
            {/* <IconButton className='theme-toggle-btn' style={{marginTop:"-14px",marginRight:"8px",color:"var(--color1)"}} onClick={toggleTheme}>
        <Brightness4Icon  />
      </IconButton> */}
              <PeopleIcon className='icon' onClick={handleMenu2Click} />
              <DataUsageOutlinedIcon className='icon' onClick={handleMenu3Click} />
              <MapsUgcRoundedIcon className='icon' onClick={handleMenu4Click} />
              <AddCommentOutlinedIcon className='icon' onClick={handleMenu5Click} />
              <MoreVertOutlinedIcon className='icon' edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen} />
            </div>
          </div>
          <div className='navbar2'>
            <div className='input-box' style={{color:"var(--color2)"}}>
              <SearchOutlinedIcon className='search'/>
              <input type="text" placeholder='Search or start new chat'  />
            </div>
            <div className='filter_icon'>
              <FilterListOutlinedIcon className='fliter' />
            </div>
          </div>
          <div className='horizontal_line'></div>
        </div>
        <div className='wt' >
          <Whatappchat onChatSelect={onChatSelect} />
        </div>
        <Drawer
          anchor="left"
          boxShadow="none"
         className={`drawer ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}   

          open={isSideMenuOpen || isSideMenu2Open || isSideMenu3Open || isSideMenu4Open || isSideMenu5Open || isSideMenu6Open}
          BackdropProps={{ invisible: true }}
          style={{ boxShadow: "none", height: "100%" }} // Set boxShadow to "none" to remove the shadow
        >
          <Box width="414px" textAlign="center" role='presentation'          className={`drawer ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}   
 boxShadow="none" style={{ backgroundColor: 'var(--background-color1)', height: "100%" }}>
            <Typography variant='h6' component='div'    style={{ backgroundColor: 'var(--background-color1)', height: "100%" }}>
              {isSideMenuOpen && <SideMenu onClose={handleCloseSideMenu} />}
              {isSideMenu2Open && <SideMenu2 onClose={handleCloseSideMenu} />}
              {isSideMenu3Open && <SideMenu3 onClose={handleCloseSideMenu} />}
              {isSideMenu4Open && <SideMenu4 onClose={handleCloseSideMenu} />}
              {isSideMenu5Open && <SideMenu5 onClose={handleCloseSideMenu} />}
              {isSideMenu6Open && <SideMenu6 onClose={handleCloseSideMenu} />}
            </Typography>
          </Box>
        </Drawer>
        <Menu  className={`menu ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}

          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          getContentAnchorEl={null}
          sx={{
            right: 'calc(100% - 300px)',
            margin: '35px 0 20px 40px ',
            fontSize: "15px",
        
          
          }}
        >
          <div style={{backgroundColor: 'var(--background-color1)', // Apply white background color
    color: 'var(--color1)',margin:"-8px 0"}}>
          <MenuItem >New Group</MenuItem>
          <MenuItem>New Community</MenuItem>
          <MenuItem>Starred Messages</MenuItem>
          <MenuItem>Select Chats</MenuItem>
          <MenuItem onClick={handleMenu6Click}>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Get WhatsApp for Windows</MenuItem></div>
        </Menu>
   
      
      </div>
  );
};

export default Sidebar;
