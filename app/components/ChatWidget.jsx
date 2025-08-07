// components/ChatWidget.jsx
'use client';

import { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi 👋, how can we help?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatBodyRef = useRef(null);
  const chatIdRef = useRef(null);

  // Markdown removal function
  const removeMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/^#+\s+/gm, '')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1');
  };

  // Initialize chat ID
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let chatId = sessionStorage.getItem('chatId');
      if (!chatId) {
        chatId = 'chat_' + Math.random().toString(36).substring(2, 11);
        sessionStorage.setItem('chatId', chatId);
      }
      chatIdRef.current = chatId;
    }
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    // Add user message
    const newMessage = { text: message, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    try {
      // Replace with your actual webhook URL
      const response = await fetch('https://kirkobane.app.n8n.cloud/webhook/15988911-570e-4743-bb65-2b819b54546a/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatId: chatIdRef.current,
          message,
          route: 'general'
        })
      });

      const data = await response.json();
      
      // Remove markdown from bot response
      const cleanResponse = removeMarkdown(
        data.system_message || "Sorry, I couldn't understand that."
      );
      
      setMessages(prev => [
        ...prev, 
        { text: cleanResponse, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev, 
        { text: "Sorry, I'm having trouble connecting.", sender: 'bot' }
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-24 right-6 w-12 h-12 bg-[#854fff] text-white rounded-full flex items-center justify-center text-xl shadow-lg z-[1001]"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-[350px] h-[500px] bg-white rounded-xl shadow-lg flex flex-col z-[1000] overflow-hidden">
          {/* Header */}
          <div className="bg-[#854fff] text-white p-5 font-bold flex justify-between items-center text-lg">
            <span>AI Assistant</span>
            <button 
              onClick={closeChat} 
              className="text-white bg-transparent border-none cursor-pointer"
              aria-label="Close chat"
            >
              ✖
            </button>
          </div>

          {/* Message Body */}
          <div 
            ref={chatBodyRef}
            className="flex-1 p-5 overflow-y-auto"
          >
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`mb-3 p-3 rounded-lg text-sm break-words ${
                  msg.sender === 'user'
                    ? 'text-[#333] bg-[#f1f1f1]'
                    : 'text-white bg-[#854fff]'
                }`}
              >
                {/* Render clean text without markdown */}
                {removeMarkdown(msg.text)}
              </p>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-300 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="flex-1 p-2 border border-gray-300 rounded-lg outline-none text-black"
            />
            <button
              onClick={sendMessage}
              className="bg-[#854fff] text-white border-none py-2 px-4 rounded-lg cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;