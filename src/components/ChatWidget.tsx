import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'react-feather';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState('');

  const webhookUrl = 'https://thayneautomations.app.n8n.cloud/webhook/ai-agent-path-Ava-User-prompt';
  const MAX_CONTEXT_MESSAGES = 10;

  // IronForge themed loading messages
  const loadingMessages = [
    "Heating up the forge...",
    "Forging the perfect response...",
    "Automating response protocols...",
    "Striking while the iron's hot...",
    "Hammering out solutions...",
    "Streamlining data pathways...",
    "Tempering your automation strategy...",
    "Calibrating efficiency algorithms...",
    "Cooling down the red-hot data...",
    "Training neural networks..."
  ];

  const suggestions = [
    "What types of automation solutions do you offer?",
    "How can you help streamline my manufacturing processes?",
    "What's your approach to implementing AI in traditional businesses?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Dynamic textarea resizing with border radius adjustment
  const adjustTextareaHeight = () => {
    const textarea = inputRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate the new height
    const scrollHeight = textarea.scrollHeight;
    const minHeight = 48; // Base height for single line
    const maxHeight = 120; // Maximum height before scrolling
    
    let finalHeight;
    if (scrollHeight <= maxHeight) {
      // If content fits within max height, resize to fit content
      finalHeight = Math.max(scrollHeight, minHeight);
      textarea.style.height = `${finalHeight}px`;
      textarea.style.overflowY = 'hidden';
    } else {
      // If content exceeds max height, set to max and enable scrolling
      finalHeight = maxHeight;
      textarea.style.height = `${maxHeight}px`;
      textarea.style.overflowY = 'auto';
    }

    // Dynamic border radius based on height
    // Start with 22px radius at minHeight, decrease to 12px at maxHeight
    const radiusRange = 22 - 12; // 10px range
    const heightRange = maxHeight - minHeight; // 72px range
    const heightProgress = Math.min((finalHeight - minHeight) / heightRange, 1); // 0 to 1
    const currentRadius = 22 - (radiusRange * heightProgress);
    
    textarea.style.borderRadius = `${currentRadius}px`;
  };

  // Handle input change with dynamic resizing
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    // Use setTimeout to ensure the DOM is updated before calculating height
    setTimeout(() => {
      adjustTextareaHeight();
    }, 0);
  };

  // Reset textarea height and border radius when input is cleared
  useEffect(() => {
    if (inputValue === '') {
      const textarea = inputRef.current;
      if (textarea) {
        textarea.style.height = '48px';
        textarea.style.overflowY = 'hidden';
        textarea.style.borderRadius = '22px'; // Reset to full rounding
      }
    }
  }, [inputValue]);

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: 'Welcome to IronForge Automations! ⚒️ I\'m here to help you learn about our automation solutions and how we can streamline your business processes. What can I help you with today?'
      }]);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
    // Adjust height after setting the suggestion
    setTimeout(() => {
      adjustTextareaHeight();
    }, 0);
  };

  const getConversationHistory = (): Message[] => {
    const startIndex = Math.max(0, messages.length - MAX_CONTEXT_MESSAGES);
    return messages.slice(startIndex);
  };

  // Loading message rotation effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLoading) {
      let messageIndex = 0;
      setCurrentLoadingMessage(loadingMessages[messageIndex]);
      
      interval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        setCurrentLoadingMessage(loadingMessages[messageIndex]);
      }, 2500); // Change message every 2.5 seconds
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isLoading, loadingMessages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputValue.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Reset textarea height and border radius
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = '48px';
      textarea.style.overflowY = 'hidden';
      textarea.style.borderRadius = '22px'; // Reset to full rounding
    }

    try {
      const conversationHistory = getConversationHistory();
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          query: userMessage.content,
          message: userMessage.content,
          sender: "user",
          type: "message",
          timestamp: new Date().toISOString(),
          conversationHistory: conversationHistory
        }),
      });

      const data = await response.json();
      console.log('Response data:', data);
      
      let botResponse = '';
      
      if (Array.isArray(data) && data.length > 0 && data[0].text) {
        botResponse = data[0].text;
      } else if (data?.aiResponse) {
        botResponse = data.aiResponse;
      } else if (data?.response) {
        botResponse = data.response;
      } else if (data?.text) {
        botResponse = data.text;
      } else {
        console.error('Unexpected response format:', data);
        botResponse = "I've received your message but I'm having trouble processing it. Please try again.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  };

  const showSuggestions = messages.length <= 1 && !inputValue.trim();

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Chat Button */}
      <button
        onClick={handleOpen}
        className={`w-15 h-15 rounded-full bg-orange-500 hover:bg-orange-600 text-white p-3 shadow-lg transition-all duration-300 border-2 border-orange-600 hover:scale-105 ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
        aria-label="Open chat"
      >
        <MessageCircle size={30} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed md:absolute bottom-20 md:bottom-0 right-0 md:right-0 w-full h-full md:w-96 md:h-[600px] bg-slate-800 rounded-none md:rounded-xl shadow-2xl flex flex-col border-2 border-orange-500 z-50">
          {/* Header */}
          <div className="bg-slate-900 border-b-2 border-orange-500 p-4 flex justify-between items-center">
            <h3 className="text-orange-400 font-bold text-lg tracking-wide">Chat with IronForge AI</h3>
            <button
              onClick={handleClose}
              className="text-orange-400 hover:text-white transition-colors text-2xl leading-none"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto bg-slate-800 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-lg shadow-sm ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white ml-auto rounded-tr-sm'
                    : 'bg-slate-900 text-white border border-orange-500 rounded-tl-sm'
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: formatMessage(message.content)
                  }}
                  className="text-sm leading-relaxed"
                />
              </div>
            ))}
            
            {isLoading && (
              <div className="bg-slate-900 text-white border border-orange-500 p-3 rounded-lg rounded-tl-sm max-w-[85%]">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-orange-300">{currentLoadingMessage}</span>
                  <div className="flex space-x-1 ml-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {showSuggestions && (
            <div className="px-5 pb-3 space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left bg-blue-600 hover:bg-slate-900 hover:border-orange-500 border border-blue-600 text-white p-3 rounded-lg text-sm transition-all duration-200 shadow-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="bg-slate-900 border-t-2 border-orange-500 p-4 flex items-end space-x-3">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-slate-700 border border-slate-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 text-white px-4 py-3 text-sm resize-none transition-all duration-200 ease-in-out"
              rows={1}
              style={{
                minHeight: '48px',
                maxHeight: '120px',
                lineHeight: '1.4',
                borderRadius: '22px' // Initial rounding, will be dynamically adjusted
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-200 flex-shrink-0"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
