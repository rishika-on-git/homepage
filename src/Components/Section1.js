import React from 'react';
import "./Section1.css";
const ChatInterface = () => {
  return (
    <div className='body-chatt'>
      <h2>CHAT WITH RANDOM STRANGERS! <br /> </h2>
      <br /> 
      <br /> 
      <br /> 

      <div className="chat-container">
        <ul className="chat">
          <li className="message left">
            <img className="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
            <p>I'm hungry!</p>
          </li>
          <li className="message right">
            <img className="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
            <p>Hi hungry, nice to meet you. I'm Dad.</p>
          </li>
          {/* ... (repeat for other messages) ... */}
          <li className="message right">
            <img className="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
            <p>No, I'm Dad...</p>
          </li>
        </ul>
        <input type="text" className="text_input" placeholder="Message..." />
      </div>
     
    </div>
  );
};

export default ChatInterface;
