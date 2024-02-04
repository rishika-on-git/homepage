import React, { useState } from 'react';
import './Chat.css';

const ChatComponent = () => {
  const [focusedPerson, setFocusedPerson] = useState(null);

  const handlePersonClick = (index) => {
    setFocusedPerson(index);
  };

  return (
    <div className="body-chat">
    <div className="container-chat">
      <div className="chatbox-chat">
        <div className="top-bar-chat">
          <div className="avatar-chat"><p>V</p></div>
          <div className="name-chat">Voldemort</div>
          <div className="icons-chat">
            <i className="fas fa-phone"></i>
            <i className="fas fa-video"></i>
          </div>
          <div className="menu-chat">
            <div className="dots-chat"></div>
          </div>
        </div>
        <div className="middle-chat">
          <div className={`voldemort-chat ${focusedPerson === null ? 'focused-chat' : ''}`}>
            {/* Incoming Messages */}
            <div className="incoming-chat">
              {/* ... (Incoming messages content) */}
            </div>

            {/* Outgoing Messages */}
            <div className="outgoing-chat">
              {/* ... (Outgoing messages content) */}
            </div>

            {/* Typing Indicator */}
            <div className="typing-chat">
              {/* ... (Typing indicator content) */}
            </div>
          </div>
        </div>
        <div className="bottom-bar-chat">
          <div className="chat-chat">
            <input type="text" placeholder="Type a message..." />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>

      {/* Messages and Profile */}
      <div className="messages-chat"></div>
      <div className="profile-chat">
        <div className="avatar-chat"><p>H</p></div>
        <div className="name2-chat">Harry<p className="email-chat">Harry@potter.com</p></div>
      </div>

      {/* People List */}
      <ul className="people-chat">
        <li
          className={`person-chat ${focusedPerson === 0 ? 'focus-chat' : ''}`}
          onClick={() => handlePersonClick(0)}
        >
          {/* ... (Person content) */}
        </li>
        <li
          className={`person-chat ${focusedPerson === 1 ? 'focus-chat' : ''}`}
          onClick={() => handlePersonClick(1)}
        >
          {/* ... (Person content) */}
        </li>
        <li
          className={`person-chat ${focusedPerson === 2 ? 'focus-chat' : ''}`}
          onClick={() => handlePersonClick(2)}
        >
          {/* ... (Person content) */}
        </li>
      </ul>
    </div>
    </div>
  );
};

export default ChatComponent;
