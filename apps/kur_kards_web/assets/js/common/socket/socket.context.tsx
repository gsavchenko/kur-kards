
import React, { createContext, useEffect, useState } from 'react';
import { Socket } from 'phoenix';

interface PhonixSocketProviderProps {
  children: React.ReactNode
}

interface PhoenixSocketContextState {
  socket: Socket | null;
}

const PhoenixSocketContext = createContext<PhoenixSocketContextState>({ socket: null });

const PhoenixSocketProvider: React.FC<PhonixSocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<null | Socket>(null);

  useEffect(() => {
    const socket = new Socket('/socket');
    socket.connect();
    setSocket(socket);
  }, []);

  if (!socket) return null;

  return (
    <PhoenixSocketContext.Provider value={{ socket }}>{children}</PhoenixSocketContext.Provider>
  );
};

export { PhoenixSocketContext, PhoenixSocketProvider };