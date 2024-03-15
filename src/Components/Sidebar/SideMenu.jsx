import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './SideMenu.css';
import { Avatar } from '@mui/material';
import { useTheme } from '../../ThemeContext';

const SideMenu = ({ onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileImage, setProfileImage] = useState(null); // State to store the profile image
  const { theme } = useTheme();

  const handleBackClick = () => {
    onClose();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUploadPhoto = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedImageUrl = e.target.result;
        setProfileImage(uploadedImageUrl); 
      };
      reader.readAsDataURL(uploadedFile);
    }
    handleMenuClose();
  };

  return (
    <div className={`profile ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}   >

      <div className='profile_navbar'>
        <ArrowBackIcon onClick={handleBackClick} />
        <p className='prof'>Profile</p>
      </div>

      <div className='profile_scroll'>
        <div className='profile_details'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{ width: 190, height: 190 }}
              alt="Remy Sharp"
              src={profileImage && profileImage }
              onClick={handleMenuOpen}

            />
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            style={{ top: '-60px', left: '100px' }}
          >
            <MenuItem className="menu_item">Take Photo</MenuItem>
            <label htmlFor="upload-photo">
              <MenuItem className="menu_item">Upload Photo</MenuItem>
            </label>
            <input
              id="upload-photo"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleUploadPhoto}
            />
          </Menu>
        </div>

        <div className='account_info'>
          <p className='your_name'>Your name</p>
          <div className='personal_detail'>
            <p className='me'>Vanita K</p>
          </div>
        </div>
        <div className='additonal_name'>
          <p>This is not your username or pin. This name will be visible to your Whatsapp contacts</p>
        </div>
        <div className='account_info'>
          <p className='your_name'>About</p>
          <div className='personal_detail'>
            <p className='me'>....</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
