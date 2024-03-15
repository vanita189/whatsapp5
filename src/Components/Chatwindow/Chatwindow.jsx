import React from 'react'
import './Chatwindow.css'
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useTheme } from '../../ThemeContext';
const Chatwindow = () => {
  const { theme } = useTheme();


  return (
          <div className={`Chatwindow ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}   >

        <div className='chat_image'>
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/how-to-make-a-group-video-call-on-whatsapp-for-windows.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt='image1'/>
        </div>
      <div className='chat_info'>
        <h1>Download WhatsApp for Windows</h1>
        <p className='call'>Make calls,share your screen and get a faster experience when you download the windows app</p>
        <button  className='button1'>Get the app</button>
        <p className='chat_para'><LockRoundedIcon style={{fontSize:"12px",color:"grey"}}/>Your Personal messages are end-to-end encrypted</p>
      </div>
    </div>
  )
}

export default Chatwindow
