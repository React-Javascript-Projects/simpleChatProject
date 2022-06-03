import React from "react";
import "./SendMassage.module.css";

const SendMassage = (props) => {
  let massageInput = React.createRef(null);

  const addMassage = (e) => {
    e.preventDefault();
    if (massageInput.current.value.trim() != 0) {
      const massage = {
        text: massageInput.current.value,
        senderID: props.userID,
      };
      props.addMassage(massage);
      massageInput.current.value = "";
    }
  };

  return (
    <form onSubmit={addMassage}>
      <input
        ref={massageInput}
        placeholder=" Type Your massage and hit ENTER"
      ></input>
    </form>
  );
};

export default SendMassage;
