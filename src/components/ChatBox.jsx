import React, { useState } from 'react';
import { IoSend, IoDocumentText, IoImage } from "react-icons/io5";
import TransactComp from './TransactComp';
import axios from 'axios';
import './ChatBox.css';

function ChatBox() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  // const HTTP = "http://localhost:8080/chat"

  const handleInputChange = (e) => setInput(e.target.value);

  const fetchAIResponse = () => {
    // axios
    //   .post(`${HTTP}`, { prompt })
    //   .then((res) => {
    //     setResponse(res.data);
    //     console.log(prompt);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setInput("");
  }

  return (
    <div className='inputz'>
      {/* <IoDocumentText />
      <IoImage /> */}
      <div className="response">
        <p className="aires">{response}</p>
      </div>
      <input
        type="text"
        name="chat"
        id="chatbox"
        onChange={handleInputChange}
        value={input} // Reflect input in the text box
        placeholder='Prompt BASE AI'
      />
      {/* <button onClick={fetchAIResponse}>
        <IoSend />
      </button> */}
      <TransactComp />
    </div>
  );
}

export default ChatBox;
