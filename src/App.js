import { useState } from "react";
import "./App.css";
import ChatList from "./componant/chat/ChatList";

function App() {
  const [massagesList, setMassagesList] = useState([]);

  //massage = { senderID: "ali", text: "Hi"},
  const addMassageHandler = (massage) => {
    setMassagesList((prevMassageList) => {
      return [...prevMassageList, massage];
    });
  };

  return (
    <div className="app">
      <h2>Chat App</h2>

      <div className="Container">
        <ChatList
          massages={massagesList}
          userID="ali"
          addMassage={addMassageHandler}
        />
        <ChatList
          massages={massagesList}
          userID="ahmad"
          addMassage={addMassageHandler}
        />
      </div>
    </div>
  );
}

export default App;
