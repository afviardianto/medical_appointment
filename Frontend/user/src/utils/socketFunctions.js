import io from 'socket.io-client';
import { commonApi, addMessage, getMessages } from '../configs/axios.config';

//const socket = io(commonApi);
const socket = io(import.meta.env.VITE_APP_SERVER_URL);

const socketFunctions = {
    connectSocket: (user, setOnlineUsers) => {
        socket.emit("addUser", user._id);
        socket.on("allUsers", (users) => {
          setOnlineUsers(users);
        });
    
        const handleFocus = () => {
          socket.emit("addUser", user._id);
        };
    
        const handleBlur = () => {
          if (user) {
            socket.emit("offline");
          }
        };
    
        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);
    
        return () => {
          window.removeEventListener("focus", handleFocus);
          window.removeEventListener("blur", handleBlur);
        };
    },

    receiveMessageFrom: (receivedMessage, chat, setMessages, currentUser, messages) => {
        console.log("Message Arrived: ", receivedMessage);
        if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
          setMessages([...messages, receivedMessage]);
          
          socket.emit("messageseenstatus", receivedMessage);
        }
    },

    sendTyping: (user, chat, currentUser) => {
        const receiver = chat.members.find((id) => id !== currentUser);
        socket.emit("typing", {
          typer: user.firstname,
          receiverId: receiver,
        });
    },
    
    handleFileSelect: async (event, chat, setSelectedFile, setMessages, currentUser, setNewMessage, messages) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        
        const receiverId = chat.members.find((id) => id !== currentUser);
        socket.emit("upload", {
          file,
          receiverId,
          chatId: chat._id,
          createdAt: new Date(),
        });
    
        try {
            const { data } = await addMessage({
                chatId: chat._id,
                senderId: currentUser,
                file: file,
            });
            setMessages([...messages, { ...data, createdAt: new Date() }]);
            setNewMessage("");
        } catch {
            console.log("error");
        }
    },

    fetchMessages: async (user, chat, setMessages, currentUser) => {
        try {
          if(chat) {
            const { data } = await getMessages(chat._id);
            setMessages(data);

            var lastMessage = data[data.length - 1];
            if (lastMessage?.senderId !== currentUser) {
                socket.emit("messageseenstatus", {
                    chatId: chat._id,
                    userId: user._id,
                    status: "",
                });      
            }
          }
        } catch (error) {
          console.log(error);
        }
    },

    fetchTyping: (setTyping) => {
        socket.on("gettyping", (data) => {
            setTyping(data.typer + " is typing..");
    
          // Clear the typing status after 2 seconds
          setTimeout(() => {
            setTyping("");
          }, 2000);
        });
    },




    sendMessage: (message) => {
        if (message) {
            socket.emit("sendMessage", message);
        }
    },

    receiveMessage: (setReceivedMessage, chatId) => {
        socket.on("recievemessage", (data) => {
            if (data.chatId === chatId) {
                setReceivedMessage(data);
            }
        });
    },

    receiveUpload: (setReceivedMessage, chatId) => {
        socket.on("receive-upload", (data) => {
            if (data.chatId === chatId) {
                setReceivedMessage(data);
            }
        });
    },
};

export default socketFunctions;