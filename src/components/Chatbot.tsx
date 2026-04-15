import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/src/lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show prompt after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowPrompt(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are a helpful and professional AI assistant for Clarks Financials, a premium microfinance institution in Uganda. 
          Your goal is to help visitors understand our loan products (Salary Loans, Unsecured Loans, Agency Banking, Asset Finance) and guide them toward starting an application.`,
        }
      });

      const response = await chat.sendMessage({
        message: userMessage,
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please check your internet and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Prompt Bubble */}
      <AnimatePresence>
        {showPrompt && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-secondary text-background p-4 rounded-sm shadow-2xl mb-4 mr-2 max-w-[200px] relative"
          >
            <button 
              onClick={() => setShowPrompt(false)}
              className="absolute -top-2 -right-2 bg-background text-white rounded-full p-1 shadow-lg"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs font-bold uppercase tracking-tight">
              Need a quick loan? I'm here to help!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-surface-container-low border-t-4 border-secondary w-[350px] h-[500px] shadow-2xl rounded-sm flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-surface-container-high p-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="font-headline text-lg text-warm-cream uppercase tracking-wider">Clarks Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.length === 0 && (
                <div className="text-center py-10">
                  <MessageSquare className="w-12 h-12 text-secondary/20 mx-auto mb-4" />
                  <p className="text-on-surface-variant text-sm">How can Clarks Financials assist you today?</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div 
                  key={i}
                  className={cn(
                    "max-w-[85%] p-3 rounded-sm text-sm",
                    msg.role === 'user' 
                      ? "bg-primary-container text-white ml-auto" 
                      : "bg-surface-container-highest text-on-surface"
                  )}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-surface-container-highest text-on-surface max-w-[85%] p-3 rounded-sm text-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                  Thinking...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-surface-container-high border-t border-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our loans..."
                  className="flex-1 bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 text-white text-sm p-2"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-secondary text-background p-2 rounded-sm hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPrompt(false);
        }}
        className={cn(
          "w-14 h-14 rounded-sm flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90",
          isOpen ? "bg-surface-container-high text-white" : "bg-secondary text-background"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
