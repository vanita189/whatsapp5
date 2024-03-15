import React, { useRef, useEffect } from "react";
import './Chats.css'
import LockIcon from '@mui/icons-material/Lock';
import { useTheme } from "../../ThemeContext";

const Chats = ({ selectedChat }) => {
    const { theme } = useTheme();
    const chatsContainerRef = useRef(null);

    const singleLineThreshold = 50;

    useEffect(() => {
        if (chatsContainerRef.current) {
            chatsContainerRef.current.scrollTop = chatsContainerRef.current.scrollHeight;
        }
    }, [selectedChat]);

    return (
        <div className={`chats-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} ref={chatsContainerRef}>
            {selectedChat && (
                <>
                    <div className="upper_portion">
                        <p className="date">28/11/2023</p>
                        <div className="lock">
                            <LockIcon style={{ fontSize: "13px" }} />
                            <p className="encryption">Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more</p>
                        </div>
                        <p className="date">01/12/2023</p>
                    </div>
                    {selectedChat.messages.map((message, index) => (
                        <div
                            className={index % 2 === 0 ? "hello-message-right" : "hello-message-left"}
                            key={index}
                            style={{ borderBottom: "none" }}
                        >
                            {message.text} <sub className={message.text.length <= singleLineThreshold ? "subscript1" : "subscript"}>{message.timestamp}</sub>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Chats;
