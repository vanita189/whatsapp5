import React, { useState } from 'react';
import './Whatsappchat.css';
import { chats } from './Data';
import Chatingbox from '../Chatingbox/Chatingbox';
import { Avatar, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '../../ThemeContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Whatsappchat = ({ onChatSelect }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const { theme } = useTheme();
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = (id) => {
    const selected = chats.find(chat => chat.id === id);
    setSelectedChat(selected);
    setMessages(selected.messages);
    if (onChatSelect) {
      onChatSelect(selected);
    }

    // Navigate to the chat page when screen width is less than 700px
    if (window.innerWidth < 700) {
      navigate(`/chats/${id}`); // Use navigate to navigate to the chat page
    }
  };

  const handleArrow = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget); // Set anchor element for menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <div className='whatsapp-container'>
      <div className='whatsapp-sidebar'>
        {chats.map((chat, index) => (
          <div key={chat.id} onClick={() => handleClick(chat.id)} className={`chat-item ${selectedChat && selectedChat.id === chat.id ? 'active' : ''}`}>

            <div className='chat1'>
              <Avatar sx={{ width: 45, height: 45 }} alt={chat.name} src={chat.avatarSrc} />
              <div className='chat2'>
                <div className='name_section'>
                  <p className='name'>{chat.name}</p>
                  <p className='time'>{chat.time}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p className='message'>{chat.message}</p>
                  <KeyboardArrowDownIcon style={{ color: "grey" }} className="down" onClick={handleArrow} />
                </div>
              </div>
            </div>
            <div className='horizontal_line12'></div>
          </div>
        ))}
      </div>
      <Menu className={`menu ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <div style={{ backgroundColor: 'var(--background-color1)', color: 'var(--color1)', margin: "-8px 0" }}>
          <MenuItem onClick={handleMenuClose} className="menuItem">Archive chat</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menuItem">Mute notifications</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menuItem">Delete chat</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menuItem">Pin chat</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menuItem">Mark as unread</MenuItem>
          <MenuItem onClick={handleMenuClose} className="menuItem">Block</MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default Whatsappchat;
