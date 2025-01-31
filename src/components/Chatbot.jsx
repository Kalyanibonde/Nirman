import React, { useState } from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = (newMessage) => {
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    // Add bot's response
    setMessages([
      ...messages,
      { text: 'Hello! How can I assist you today?', sender: 'bot' },
    ]);
  };

  return (
    <div style={{ marginLeft: '250px', paddingTop: '20px' }}>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chat with us"
        subtitle="We're here to help!"
      />
    </div>
  );
};

export default Chatbot;
