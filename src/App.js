import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Whatsappchat from './Components/Whatsappchat/Whatsappchat';
import Chatingbox from './Components/Chatingbox/Chatingbox';
import Chatwindow from './Components/Chatwindow/Chatwindow';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Components/Chatingbox/Product';
// Placeholder component for the root route
const Home = () => {
  return <div>This is the home page</div>;
};

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [theme, setTheme] = useState('light-theme');

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
    console.log("Selected chat:", chat);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider>
      <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <BrowserRouter>
          <Sidebar onChatSelect={handleChatSelection} toggleTheme={toggleTheme} style={{ width: "100%" }} />
          <Routes>
        <Route path="/Product" element={<Product/>}>
          <Route path=':productId' element={<Chatingbox/>}></Route>
        </Route>   </Routes>     
        </BrowserRouter>

        <div className={`chat_window ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} style={{ backgroundColor: "var(--background-color1)" }}>
          {selectedChat ? (
            <Chatingbox selectedChat={selectedChat} messages={selectedChat ? selectedChat.messages : []} setMessages={selectedChat ? selectedChat.setMessages : []} />
          ) : (
            <Chatwindow className={`chat_window2 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} />
          )}
        </div>
        
      </div>
    </ThemeProvider>
  );
}
export default App;
