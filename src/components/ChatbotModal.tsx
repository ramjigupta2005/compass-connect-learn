import React, { useState, useRef, useEffect } from "react";
import { Send, Minimize2, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import ChatMessageComponent, { ChatMessage } from "./ChatMessage";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Hello! I'm your AI career guidance assistant. I can help you with career advice, educational guidance, and answer questions about different career paths. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Context-aware responses based on keywords
    if (message.includes('career') || message.includes('job') || message.includes('profession')) {
      const careerResponses = [
        "That's a great question about careers! The job market is constantly evolving, and it's important to choose a path that aligns with your interests and skills. What specific career field are you most curious about?",
        "I'd love to help you explore career options! There are so many exciting paths available today - from traditional roles to emerging fields like AI, sustainability, and digital marketing. What type of work environment appeals to you most?",
        "Career planning can feel overwhelming, but you're taking the right step by asking questions! Many successful professionals didn't have a clear path from the start. What are your main interests or passions?",
      ];
      return careerResponses[Math.floor(Math.random() * careerResponses.length)];
    }
    
    if (message.includes('college') || message.includes('university') || message.includes('education') || message.includes('degree')) {
      const educationResponses = [
        "Education is a crucial foundation for many careers! The choice between different degrees and institutions can significantly impact your career trajectory. What field of study interests you most?",
        "Great question about education! There are many paths to success - traditional four-year degrees, community colleges, trade schools, online programs, and even self-directed learning. What's your current educational background?",
        "I can help you navigate educational choices! Different careers require different educational paths. Some value hands-on experience, while others prioritize formal degrees. What career goals are you working towards?",
      ];
      return educationResponses[Math.floor(Math.random() * educationResponses.length)];
    }
    
    if (message.includes('tech') || message.includes('programming') || message.includes('software') || message.includes('coding')) {
      const techResponses = [
        "The tech industry offers incredible opportunities! Whether you're interested in software development, data science, cybersecurity, or product management, there's a path for you. What aspect of technology excites you most?",
        "Tech careers are in high demand and often offer great flexibility! You can start with online courses, bootcamps, or self-study. Many successful developers are self-taught. What programming languages or tech areas interest you?",
        "Technology is constantly evolving, making it an exciting field to enter! The key is to start building projects and gaining practical experience. Have you tried any coding languages or tech tools yet?",
      ];
      return techResponses[Math.floor(Math.random() * techResponses.length)];
    }
    
    if (message.includes('salary') || message.includes('money') || message.includes('pay') || message.includes('income')) {
      const salaryResponses = [
        "Salary is an important consideration, but it's just one factor in career satisfaction! Different fields offer varying compensation ranges. What matters most to you - financial stability, work-life balance, or making an impact?",
        "Compensation varies widely across industries and roles. Entry-level positions typically offer lower pay but provide valuable experience. What's your priority - immediate earning potential or long-term career growth?",
        "Money is important, but don't forget about other benefits like health insurance, retirement plans, and professional development opportunities. What salary range would help you meet your financial goals?",
      ];
      return salaryResponses[Math.floor(Math.random() * salaryResponses.length)];
    }
    
    if (message.includes('help') || message.includes('confused') || message.includes('lost') || message.includes('don\'t know')) {
      const helpResponses = [
        "It's completely normal to feel uncertain about your career path! Many people change directions multiple times throughout their lives. Let's start with what you enjoy doing - what activities make you lose track of time?",
        "Feeling lost is part of the journey! The best approach is to start exploring different options through internships, informational interviews, or online courses. What subjects or activities have you always been curious about?",
        "You're not alone in feeling this way! Career exploration is a process. Let's break it down - what are your strengths, and what kind of work environment would make you happy?",
      ];
      return helpResponses[Math.floor(Math.random() * helpResponses.length)];
    }
    
    // Default responses for general questions
    const defaultResponses = [
      "That's an interesting question! I'd be happy to help you explore this further. Could you tell me more about what specifically you'd like to know?",
      "I understand you're looking for guidance on this topic. Every person's situation is unique, so I'd love to learn more about your specific circumstances and goals.",
      "That's a great point to consider! There are usually multiple perspectives on this. What factors are most important to you in making this decision?",
      "I can definitely help you think through this! The key is to gather information and consider your personal values and interests. What draws you to this particular area?",
      "Excellent question! This is something many people wonder about. Let's explore this together - what aspects of this topic are you most curious about?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(userMessage.content),
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        content: "Hello! I'm your AI career guidance assistant. I can help you with career advice, educational guidance, and answer questions about different career paths. How can I assist you today?",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-2 sm:p-4 sm:items-center sm:justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-md h-[500px] sm:h-[600px] bg-background border shadow-elegant animate-in slide-in-from-bottom-4 duration-300 sm:slide-in-from-bottom-0">
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI Career Assistant</h3>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={clearChat}
              className="h-8 w-8"
              title="Clear chat"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
              title="Minimize chat"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="p-0 flex-1 flex flex-col">
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessageComponent key={message.id} message={message} />
              ))}
              {isTyping && (
                <ChatMessageComponent
                  message={{
                    id: "typing",
                    content: "",
                    sender: "ai",
                    timestamp: new Date(),
                    isTyping: true,
                  }}
                />
              )}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="p-4 border-t bg-muted/20">
            <div className="flex flex-wrap gap-2 mb-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInputValue("What career options are available in tech?")}
                className="text-xs"
              >
                Tech Careers
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInputValue("What should I study in college?")}
                className="text-xs"
              >
                Education Path
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInputValue("How do I choose a career?")}
                className="text-xs"
              >
                Career Choice
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInputValue("What skills are in demand?")}
                className="text-xs"
              >
                Skills Guide
              </Button>
            </div>
            
            {/* Input */}
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about careers..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                variant="gradient"
                className="shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatbotModal;
