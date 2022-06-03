import React from "react";
import classes from "./MassageList.module.css";

const MassageList = (props) => {
  return (
    <div className={classes.list}>
      {props.massages &&
        props.massages.map((massage) => (
          <li
            key={Math.random()}
            style={{
              textAlign: massage.senderID === props.userID && "end",
            }}
          >
            <div className={classes.name}>{massage.senderID}</div>
            <p
              className={classes.massage}
              style={{
                backgroundColor:
                  massage.senderID === props.userID ? "#2dcee4" : "grey",
              }}
            >
              {massage.text}
            </p>
          </li>
        ))}
    </div>
  );
};

export default MassageList;
