import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, BrainIcon } from '../components/Icons';
import { ChatMessage } from '../types';

export const CivicAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: "Hello. I am the JDL Civic Assistant. You can ask me things like: 'What is the literacy rate trend in Punjab over the last 5 years?' or 'Summarize the key findings of the 2024 Economic Survey.'",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI Latency and Response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: "This is a demo response. In the live beta, Civic AI queries verified datasets to provide a citation-backed answer. Currently, I see you are interested in: \"" + input + "\". Access restricted to authorized Beta partners.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-36 pb-12 px-4 sm:px-6">
      
      {/* Header Info */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-ios mb-6">
           <BrainIcon className="text-jdl-red w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-jdl-black mb-4">
          Civic AI
        </h1>
        <p className="text-jdl-subtext text-lg max-w-xl mx-auto">
          Your Personal Research Assistant. Ask questions, get verified data, visualize trends.
        </p>
      </div>

      {/* Main Interface Area */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-ios-hover overflow-hidden flex flex-col h-[650px] border border-white/50 relative">
          
          {/* Top Bar inside Chat */}
          <div className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-center absolute top-0 w-full z-10">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">JDL Secure Connection</span>
          </div>

          {/* Chat History */}
          <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6 bg-[#ffffff] pt-24">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar - Optional for iOS feel, usually just bubbles, but keeping for clarity */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm mt-auto mb-1 ${msg.role === 'user' ? 'bg-jdl-black ml-2' : 'bg-jdl-red mr-2'}`}>
                    {msg.role === 'user' ? 'YOU' : 'JDL'}
                  </div>

                  {/* Bubble */}
                  <div className={`px-5 py-3.5 text-[15px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-jdl-red text-white rounded-[1.3rem] rounded-br-sm' 
                      : 'bg-[#f2f2f7] text-jdl-black rounded-[1.3rem] rounded-bl-sm'
                  }`}>
                    <p>{msg.content}</p>
                    {msg.role === 'ai' && (
                        <div className="mt-2 pt-2 border-t border-gray-300/50 text-xs text-gray-500 font-medium">
                            Source: JDL Verified Dataset v2.4
                        </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                     <div className="bg-[#f2f2f7] px-4 py-3 rounded-[1.3rem] rounded-bl-sm ml-10">
                        <div className="flex space-x-1.5 h-4 items-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                        </div>
                     </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white/80 backdrop-blur-xl p-4 md:p-6 pb-6 md:pb-8">
            <form onSubmit={handleSend} className="relative flex items-center bg-[#f2f2f7] rounded-full p-1.5 shadow-inner">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about economic data..."
                className="w-full pl-6 pr-12 py-3.5 bg-transparent border-none focus:ring-0 outline-none text-jdl-black placeholder-gray-400 text-base"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex-shrink-0 w-10 h-10 bg-jdl-red text-white rounded-full flex items-center justify-center hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md transform active:scale-95"
              >
                <SendIcon className="w-5 h-5 ml-0.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
                { title: 'Natural Language', desc: 'Interact with complex datasets using everyday English or Urdu.' },
                { title: 'Instant Visualization', desc: 'Ask the AI to generate charts or tables directly.' },
                { title: 'Source Transparency', desc: 'Every answer includes citations to original research.' }
            ].map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm text-center border border-white">
                    <h3 className="font-bold text-jdl-black mb-2">{feature.title}</h3>
                    <p className="text-sm text-jdl-subtext">{feature.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};