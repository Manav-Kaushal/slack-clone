import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault(); //Prevents refresh

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Manav Kaushal",
      userImage:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
