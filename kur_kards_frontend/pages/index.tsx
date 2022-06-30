import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useChannel from "../common/socket/useChannel.hook";

const Home: NextPage = () => {
  const [gameRoom] = useChannel("game_room:lobby");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState<{ name: string; message: string }[]>(
    []
  );

  // listening for messages from the channel
  useEffect(() => {
    if (!gameRoom) return;

    gameRoom.on("shout", (response) => {
      setMessages((prevState) => [...prevState, response]);
    });

    // stop listening to this message before the component unmounts
    return () => {
      gameRoom.off("shout");
    };
  }, [gameRoom, messages, setMessages]);

  // pushing messages to the channel
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter" && gameRoom !== undefined) {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        gameRoom.push("shout", { name, message });
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [name, message, gameRoom]);

  const handleMessageSend = (event: React.ChangeEvent<HTMLInputElement>) => {
    const message = event.target.value;
    setMessage(message);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
  };

  return (
    <>
      <div id="message-list" className="row">
        {messages.map((payload, index) => {
          return (
            <div className="row" key={index}>
              {payload.name || "Anonymous"}:{payload.message}
              <br />
            </div>
          );
        })}
      </div>

      <div className="row form-group">
        <div className="col-md-3">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-md-9">
          <input
            type="text"
            id="message"
            className="form-control"
            placeholder="Message"
            onChange={handleMessageSend}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
