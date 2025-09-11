import React, { useState } from "react";
import { MessageCircle, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatbotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick, isOpen }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Button
        onClick={onClick}
        size="lg"
        variant="gradient"
        className={cn(
          "h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 group relative overflow-hidden",
          isOpen && "scale-95"
        )}
        aria-label={isOpen ? "Close AI Chat" : "Open AI Chat"}
      >
        <div className="relative z-10">
          {isOpen ? (
            <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <div className="flex items-center justify-center">
              <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              <Bot className="h-3 w-3 absolute -top-1 -right-1 bg-accent rounded-full p-0.5" />
            </div>
          )}
        </div>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        )}
      </Button>
      
      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-lg shadow-card border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Ask me anything!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover" />
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;
