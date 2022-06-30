import React, { createContext, useEffect, useState } from "react";
import { Socket } from "phoenix";

interface PhonixSocketProviderProps {
  children: React.ReactNode;
}

interface PhoenixSocketContextState {
  socket: Socket | null;
}

const PhoenixSocketContext = createContext<PhoenixSocketContextState>({
  socket: null,
});

const PhoenixSocketProvider: React.FC<PhonixSocketProviderProps> = ({
  children,
}) => {
  const [socket, setSocket] = useState<null | Socket>(null);

  useEffect(() => {
    const socket = new Socket("ws://localhost:4000/socket");
    socket.connect();
    setSocket(socket);
  }, []);

  if (!socket) return <div> failed to connect </div>;

  return (
    <PhoenixSocketContext.Provider value={{ socket }}>
      {children}
    </PhoenixSocketContext.Provider>
  );
};

export { PhoenixSocketContext, PhoenixSocketProvider };
