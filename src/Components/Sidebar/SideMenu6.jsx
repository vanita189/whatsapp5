import React, { useState } from 'react';
import './SideMenu6.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Import icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Import icon for light mode
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import DownloadIcon from '@mui/icons-material/Download';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from '../../ThemeContext';
const SideMenu6 = ({ onClose}) => {
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook to access theme and toggleTheme function

  const handleBackClick = () => {
    onClose();
  };

  

  return (
    <div  className={`side_menu6 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className='profile_navbar' style={{ margin: "0 0 10px 0" }}>
        <ArrowBackIcon onClick={handleBackClick} />
        <p className='prof'>Settings</p>
      </div>

      <div className='input-box2'>
        <SearchOutlinedIcon className='search2' />
        <input type="text" placeholder='Search settings' />
      </div>

      <div className='side6'>
        <div className='avatar'>
          <Avatar sx={{ height: 80, width: 80, backgroundColor: "lightgrey" }} />
          <div className='name_v'>
            <p>Vanita</p>
            <p>...</p>
          </div>
        </div>

        <div className='class6'>
          <NotificationsIcon />
          <p>Notifications</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'>
          <LockIcon />
          <p>Privacy</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'>
          <SecurityIcon />
          <p>Security</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'  onClick={toggleTheme} >
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />} {/* Render different icons based on the theme */}

          <p>Theme</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'>
          <WallpaperIcon />
          <p>Chat Wallpaper</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'>
          <DownloadIcon />
          <p>Media auto-download</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'>
          <InsertDriveFileIcon />
          <p>Request account info</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'>
          <MotionPhotosAutoIcon />
          <p>Keyboard shortcuts</p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6'>
          <HelpIcon />
          <p>Help </p>
        </div>

        <div className='horizontal_line6'></div>

        <div className='class6' style={{ color: 'red' }}>
          <LogoutIcon />
          <p>Logout </p>
        </div>

        <div className='horizontal_line6'></div>
      </div>
    </div>
  );
};

export default SideMenu6;
