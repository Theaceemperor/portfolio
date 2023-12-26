'use client'
import React, { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';

const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [messageTime, setMessageTime] = useState(new Date().toLocaleTimeString());

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user', time: messageTime }]);
      setNewMessage('');
    }
  };

  const timeSent = new Date()

  return (
    <div className="chat-container">
      <div className={`chat-icon ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        <FaCommentAlt />
      </div>
      {isChatOpen && (
        <div className="chat-window">
          <div>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender} p-2 rounded mt-2 max-w-[60%]     text-left text-amber-600 flex flex-col shadow shadow-[#888888]`}>
                <small className='font-bold flex justify-between'>{msg.sender}<span className='text-xs font-normal text-gray-600'>{msg.time}</span></small>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className='mt-4'>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className='p-2 focus:outline-none border rounded border-[#333333]/40 mr-2'
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;