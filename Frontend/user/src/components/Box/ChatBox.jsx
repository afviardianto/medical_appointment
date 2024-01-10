import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Buffer } from "buffer";

//import { addMessage } from "../../api/message.requests";
//import { getUser } from "../../api/user.requests";
import socketFunctions from "../../utils/socketFunctions";
import "./ChatBox.css";

import EmojiImg from "../../assets/img/emoji.png";
import userImg from "../../assets/img/user.png";
import attach from "../../assets/img/attach.png";
import phoneImg from "../../assets/img/phone.png";
import searchImg from "../../assets/img/search.png";
import menuImg from "../../assets/img/menu.png";

const ChatBox = ({
    chat,
    currentUser,
    setSendMessage,
    receivedMessage,
    navWidth,
}) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [typing, setTyping] = useState("");
    const [selectedFile, setSelectedFile] = useState(null); // maybe i'll do a 'preview selected files' feature one day
    
    const scroll = useRef();
    const imageRef = useRef();

    const handleChange = (newMessage) => {
        setNewMessage(newMessage.target.value);
    };

    // fetching data for header
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser);
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };
        
        if (chat !== null) getUserData();
    }, [chat, currentUser]);
    
    useEffect(() => {
        socketFunctions.fetchMessages(user, chat, setMessages, currentUser);
    }, [chat]);
    
    useEffect(() => {
        socketFunctions.fetchTyping(setTyping);
    }, []);

    useEffect(() => {
        socketFunctions.receiveMessageFrom(
            receivedMessage,
            chat,
            setMessages,
            currentUser,
            messages
        );
    }, [receivedMessage]);

    const handleKeyDown = () => {
        socketFunctions.sendTyping(user, chat, currentUser);
      };
      
    const handleFileSelect = (event) => {
        socketFunctions.handleFileSelect(
            event,
            chat,
            setSelectedFile,
            setMessages,
            currentUser,
            setNewMessage,
            messages
        );
    };

    // scroll to bottom
    useEffect(() => {
        var chatDiv = document.getElementById("chat-body");
        chatDiv?.scrollTo({ top: chatDiv.scrollHeight, behavior: "smooth" });
    }, [messages]);

    // Send Message
    const handleSend = async (e) => {
        e.preventDefault();
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
            status: "",
        };
        
        const receiverId = chat.members.find((id) => id !== currentUser);
        // send message to socket server
        setSendMessage({ ...message, receiverId, createdAt: new Date() });
        setSelectedFile(null);

        // send message to database
        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage("");
        } catch {
            console.log("error");
        }
    };

    const formatDate = (createdAt) => {
        const date = new Date(createdAt);
        const today = new Date();
        const diffTime = Math.abs(today - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
        if (diffDays === 0) {
          return "Today";
        } else if (diffDays === 1) {
          return "Yesterday";
        } else if (diffDays < 7) {
          return date.toLocaleDateString("EN", { weekday: "long" });
        } else {
          return date.toLocaleDateString();
        }
    };

    const isSameDay = (date1, date2) => {
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
    
        return (
          firstDate.getFullYear() === secondDate.getFullYear() &&
          firstDate.getMonth() === secondDate.getMonth() &&
          firstDate.getDate() === secondDate.getDate()
        );
    };

    const renderMessage = (message, index, messages) => {
        if (message) {
            const previousMessage = messages[index - 1];
            
            const showDate = !previousMessage || !isSameDay(message.createdAt, previousMessage?.createdAt);
            let messageElement;

            if (message?.file) {
                const imageSrc = `data:image/jpeg;base64,${Buffer.from( message.file ).toString("base64")}`;
                messageElement = (
                    <React.Fragment key={index}>
                        <div className={ message.senderId === currentUser ? "message own" : "message" }>
                            <img src={imageSrc} alt="received image" />
                        </div>
                        <div className={ message.senderId === currentUser ? "time time-own" : "time" }></div>
                    </React.Fragment>
                );
            }else if (message?.chatId && !message?.file) {
                messageElement = (
                    <React.Fragment key={index}>
                        <div className={ message.senderId === currentUser ? "message own" : "message" } >
                            <span>{message.text}</span>
                        </div>
                        <div className={ message.senderId === currentUser ? "time time-own" : "time" } ></div>
                    </React.Fragment>
                );
            } else if (message.type === "img") {
                console.log("IMAGE", message);
                messageElement = (
                <React.Fragment key={index}>
                    <div className={ message.senderId === currentUser ? "message own" : "message" } >
                        <img src={message.props.src} alt="received image" />
                    </div>
                    <div className={ message.senderId === currentUser ? "time time-own" : "time" } ></div>
                </React.Fragment>
                );
            } else {
                console.log("Unknown message type:", message.type);
                messageElement = <p>Unknown message type</p>;
            }

            if (showDate) {
                return (
                    <React.Fragment key={index}>
                        <div className="message-date">{formatDate(message.createdAt)}</div>
                        {messageElement}
                    </React.Fragment>
                );
            } else {
                return messageElement;
            }
        }
    };

    return (
       <>
       { chat && (
        <div className="chat-header" style={{ width: `calc(100% - ${navWidth}px)` }} >
            {" "}
            {/* chat-header */}
            <div className="profile">
                <img src={ userData?.profilePicture? process.env.REACT_APP_PUBLIC_FOLDER + 
                userData.profilePicture : userImg } alt="Profile"/>
                <span className="name">{userData?.firstname}</span>
          </div>
          <div className="menu">
            <img src={searchImg} alt="search" />
            <img src={phoneImg} alt="phone" /> {/* onClick={sendCall} */}
            <img src={menuImg} alt="menu" />
          </div>
        </div>
        )}
        
        <div className="ChatBox-container">
        {chat ? (
            <>
            {/* chat-body */}
            <div className="chat-body" id="chat-body" ref={scroll}>
                {messages.map(renderMessage)}
            </div>
            {/* chat-sender */}
            <p style={{ color: "white" }}>{typing}</p>
            <div className="input-body">
                <div className="chat-sender">
                    <img className="emoji" src={EmojiImg} alt="emoji" />
                    <input id="inputMessage" value={newMessage} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Message" />
                    <input type="file" name="" id="" style={{ display: "none" }} ref={imageRef} onChange={handleFileSelect} accept="image/*" />
                    
                    <div onClick={() => imageRef.current.click()}>
                        <img src={attach} alt="attach" />
                    </div>
                </div>
                <div className="send-button button" onClick={handleSend}></div>
            </div>
          </>
        ) : (
            <span className="chatbox-empty-message">Start a conversation</span>
        )}
      </div>
      </> 
    );
};

export default ChatBox;