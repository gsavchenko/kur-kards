import React from "react";
import { Chat } from "./common/socket/chat/chat.component";
import { PhoenixSocketProvider } from "./common/socket/socket.context";

const App: React.FC = () => {  
  return (
    <PhoenixSocketProvider>
      <section className="phx-hero">
        <h1>Welcome to Kurd Kards with Typescript and React!</h1>
        <p>Peace-of-mind from prototype to production</p>
      </section>
      <Chat />
    </PhoenixSocketProvider>
  );
};

export default App;