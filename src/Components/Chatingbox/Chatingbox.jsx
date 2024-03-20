import './Chatingbox.css';
import { useState, useEffect, useRef } from 'react';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Drawer, Box, Typography } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import Chats from './Chats';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import SideMenu from '../Sidebar/SideMenu';
import SideMenu2 from '../Sidebar/Sidemenu2'; // Import the second side menu component
import SideMenu3 from '../Sidebar/SideMenu3';
import SideMenu4 from '../Sidebar/SideMenu4';
import SideMenu5 from '../Sidebar/SideMenu5';
import { useTheme } from '../../ThemeContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Chatingbox = ({ selectedChat, setChatOpen,setScreenWidth,screenWidth }) => {
    const [message, setMessage] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [messagesDict, setMessagesDict] = useState({});
    const pickerRef = useRef(null);
    const inputRef = useRef(null); // Ref for the input box
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isSideMenu2Open, setIsSideMenu2Open] = useState(false);
    const [isSideMenu3Open, setIsSideMenu3Open] = useState(false);
    const [isSideMenu4Open, setIsSideMenu4Open] = useState(false);
    const [isSideMenu5Open, setIsSideMenu5Open] = useState(false);
    const { theme } = useTheme();
    useEffect(()=>{
        console.log(selectedChat, 'chatdsnsldn');
    },[selectedChat])

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

    const handleCloseSideMenu = () => {
        setIsSideMenuOpen(false);
        setIsSideMenu2Open(false);
        setIsSideMenu3Open(false);
        setIsSideMenu4Open(false);
        setIsSideMenu5Open(false);
    };

    useEffect(() => {
        if (selectedChat && selectedChat?.id) {
            if (!messagesDict[selectedChat?.id]) {
                setMessagesDict(prevState => ({
                    ...prevState,
                    [selectedChat?.id]: [],
                }));
            }
        }
    }, [selectedChat, messagesDict]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                pickerRef.current &&
                !pickerRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)
            ) {
                setShowPicker(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {

        setMessage(e.target.value);
        console.log(e.target.value,'e.target.value');
    };

    const handleEmojiClick = (event, emojiObject) => {
        const emoji = emojiObject ? emojiObject.emoji : ""; // Check if emojiObject is defined
        setMessage(prevMessage => prevMessage + emoji);
    };
    const handleBackButtonClick = () => {
        setScreenWidth(681);
        setChatOpen(false);
      };
    const toggleEmojiPicker = () => {
        setShowPicker(!showPicker);
    };

    const sendMessage = () => {
        if (message.trim() !== "") {
            const newMessage = {
                text: message,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            };
            const updatedMessages = [...messagesDict[selectedChat?.id], newMessage];
            setMessagesDict(prevState => ({
                ...prevState,
                [selectedChat?.id]: updatedMessages,
            }));
            setMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log(message, 'messge', messagesDict, 'messagedicr');

            sendMessage();
        }
    };

    return (
        <div className={`chat_here ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}   >

            <div className='top-chat-box'>
                <div className='left_chat_navbar'>
                {screenWidth <= 681 &&<div onClick={handleBackButtonClick} style={{margin:"0 4px 0 -10px"}}><ArrowBackIcon/></div>}

                    <Avatar sx={{ width: 45, height: 45 }} alt={selectedChat ? selectedChat.name : ""} src={selectedChat ? selectedChat.avatarSrc : ""} onClick={handleAvatarClick} />
                    <p className='name_chat'>{selectedChat ? selectedChat.name : ""}</p>
                </div>
                <div className="right-chat-navbar">
                    <div className='more'>
                        <VideocamIcon className='video' />
                        <KeyboardArrowDownIcon className='arrow' />
                    </div>
                    <SearchIcon className='icon' />
                    <MoreVertIcon className='icon' />
                </div>
            </div>

            <div className='chat-scroll'>
                <Chats
                    messages={messagesDict[selectedChat?.id] || []}
                    setMessages={messages => setMessagesDict(prevState => ({
                        ...prevState,
                        [selectedChat?.id]: messages,
                    }))}
                />
            </div>

            <div className='bottom-chat-box'>
                <AddIcon className='add' />
                <div className='different'>
                    <InsertEmoticonIcon className='add' onClick={toggleEmojiPicker} />
                    {showPicker && <EmojiPicker ref={pickerRef} className="emoji-picker"   onEmojiClick={(emojiObject)=> setMessage((prevMsg)=> prevMsg + emojiObject.emoji)}/>}

                    <input ref={inputRef} type="text" placeholder='Type a Message here' value={message} onChange={handleChange} onKeyPress={handleKeyPress} />
                </div>

                {message ? <SendIcon className='add' onClick={sendMessage} /> : <MicIcon className='add' />}

            </div>
            {/* <Drawer
                anchor="right"
                boxShadow="none"
                open={isSideMenuOpen || isSideMenu2Open || isSideMenu3Open || isSideMenu4Open || isSideMenu5Open}
                BackdropProps={{ invisible: true }}
                style={{ boxShadow: "none" }} // Set boxShadow to "none" to remove the shadow
            >
                <Box width="404px" textAlign="center" role='presentation' backgroundColor="#f2f2f2" boxShadow="none">
                    <Typography variant='h6' component='div'>
                        {isSideMenuOpen && <SideMenu onClose={handleCloseSideMenu} />}
                        {isSideMenu2Open && <SideMenu2 onClose={handleCloseSideMenu} />}
                        {isSideMenu3Open && <SideMenu3 onClose={handleCloseSideMenu} />}
                        {isSideMenu4Open && <SideMenu4 onClose={handleCloseSideMenu} />}
                        {isSideMenu5Open && <SideMenu5 onClose={handleCloseSideMenu} />}
                    </Typography>
                </Box>
            </Drawer> */}
        </div>
    );
}

export default Chatingbox