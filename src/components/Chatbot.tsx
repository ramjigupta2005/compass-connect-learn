import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotModal from "./ChatbotModal";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatbotButton onClick={toggleChatbot} isOpen={isOpen} />
      <ChatbotModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Chatbot;
