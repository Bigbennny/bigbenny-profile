import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const AIChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome. I am Reuben's architectural assistant. Ask me about his 15+ years of senior engineering experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse([...messages, userMsg]);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      {/* Bubble Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-[22px] flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-brand-pink rotate-90 scale-90' : 'bg-brand-mint hover:bg-brand-pink hover:scale-110 shadow-brand-mint/20'}`}
      >
        {isOpen ? <X className="text-brand-dark w-7 h-7" /> : <MessageSquare className="text-brand-dark w-7 h-7" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] md:w-[420px] h-[550px] bg-brand-dark rounded-[32px] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 border border-white/5">
          {/* Header */}
          <div className="p-7 bg-brand-navy/30 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-brand-mint flex items-center justify-center">
                <Bot className="w-6 h-6 text-brand-dark" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-mint leading-none mb-1.5">Strategic AI</div>
                <div className="text-lg font-black tracking-tighter text-white">Assistant Node</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-7 space-y-6 bg-brand-dark/40">
            {messages.map((msg: Message, i: number) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-4 max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 ${msg.role === 'user' ? 'bg-brand-pink' : 'bg-brand-mint'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-brand-dark" /> : <Bot className="w-4 h-4 text-brand-dark" />}
                  </div>
                  <div className={`p-5 rounded-2xl text-sm leading-relaxed shadow-lg ${msg.role === 'user' ? 'bg-brand-navy/60 text-white rounded-tr-none' : 'bg-white/5 text-brand-light rounded-tl-none border border-white/5'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 bg-white/5 p-5 rounded-2xl rounded-tl-none border border-white/5 shadow-lg">
                  <Loader2 className="w-4 h-4 text-brand-mint animate-spin" />
                  <span className="text-[10px] text-brand-mint font-black uppercase tracking-widest">Processing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-7 bg-brand-navy/30 border-t border-white/5">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                placeholder="Query experience database..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm text-white placeholder:text-brand-light/20 focus:outline-none focus:border-brand-mint transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-14 h-14 rounded-xl bg-brand-mint flex items-center justify-center text-brand-dark hover:bg-brand-pink disabled:opacity-50 transition-all shadow-xl shadow-brand-mint/10"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBubble;