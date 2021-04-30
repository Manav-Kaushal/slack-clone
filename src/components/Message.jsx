import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 40px;
    border-radius: 50%;
  }
`;

const MessageInfoContainer = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: grey;
    font-size: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfoContainer>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfoContainer>
    </MessageContainer>
  );
}

export default Message;
