// client/src/context/SocketContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { useAuthContext } from '../hooks/useAuth';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [newConversation, setNewConversation] = useState(null);

  const { user } = useAuthContext();

useEffect(() => {
  console.log("🔐 useAuthContext user:", user); // 👈 LOG THIS

  if (user && user._id) {
    console.log('📦 Connecting socket with userId:', user._id);

    const newSocket = io('http://localhost:4000', {
      auth: {
        userId: user._id, // 👈 This must be sent here
      },
    });

    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('✅ Socket connected:', newSocket.id);
    });

    newSocket.on('getOnlineUsers', (users) => {
      setOnlineUsers(users);
    });

    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }
}, [user]);


  return (
    <SocketContext.Provider value={{ socket, onlineUsers, newConversation }}>
      {children}
    </SocketContext.Provider>
  );
};
