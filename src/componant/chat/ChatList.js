import React from "react";

import ChatTitle from "./ChatTitle";
import MassageList from "./MassageList";
import SendMassage from "./SendMassage";

import classes from "./ChatList.module.css";

const ChatList = (props) => {
  const title = props.userID + " chat app";
  return (
    <div className={classes.chat}>
      <ChatTitle title={title} />
      <MassageList massages={props.massages} userID={props.userID} />
      <SendMassage userID={props.userID} addMassage={props.addMassage} />
    </div>
  );
};

export default ChatList;
