import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, ShieldIcon, CopyIcon, CheckIcon } from '../components/Icons';
import { ChatMessage } from '../types';

// --- Sub-component: AuditResult Card ---
const AuditResult: React.FC<{ content: string }> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  // 1. Extract Score
  const scoreMatch = content.match(/Score: (\d+)/);
  const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;
  
  // 2. Split sections based on the '---' separator
  const sections = content.split('---').map(s => s.trim());
  const auditSection = sections[0] || "";
  const improvedSection = sections[1] || "";
  const actionSection = sections[2] || "";

  // Helper regex to extract values
  const getField = (text: string, label: string) => {
    const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    const regex = new RegExp(`\\* \\*\\*${escapedLabel}:\\*\\* (.*)`);
    const match = text.match(regex);
    return match ? match[1].trim() : "";
  };
  
  // Audit Details
  const violationProb = getField(auditSection, "Violation Probability");
  const section = getField(auditSection, "Specific PECA Section");
  const reasoning = getField(auditSection, "Reasoning");
  const penalty = getField(auditSection, "Penalty Mention");

  // Improved Details
  const rephrasedContent = getField(improvedSection, "Rephrased") || getField(improvedSection, "Rephrased Content");
  const whySafer = getField(improvedSection, "Why it's Safer");

  // Action Plan
  const actionItems = actionSection.split('\n').filter(line => line.match(/^\d+\./));

  const isHighRisk = score > 50;
  const scoreColor = isHighRisk ? 'text-jdl-red' : 'text-green-600';
  const riskBg = isHighRisk ? 'bg-red-50' : 'bg-green-50';
  const riskBorder = isHighRisk ? 'border-red-100' : 'border-green-100';

  const handleCopy = () => {
    if (rephrasedContent) {
        navigator.clipboard.writeText(rephrasedContent.replace(/"/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full space-y-6 pt-2">
      {/* 1. Risk Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
           <h3 className="font-serif font-bold text-xl text-jdl-black flex items-center">
             🚨 Legal Risk Audit
           </h3>
           <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">PECA 2025 Compliance Check</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm rounded-xl p-3 min-w-[80px]">
          <div className={`text-3xl font-black ${scoreColor} leading-none`}>{score}</div>
          <div className="text-[9px] font-bold text-gray-400 uppercase mt-1 tracking-wider">Risk Score</div>
        </div>
      </div>

      {/* 2. Violation Details */}
      <div className={`${riskBg} rounded-2xl p-5 border ${riskBorder} space-y-4`}>
         <div className="flex flex-wrap gap-2 items-center justify-between">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${isHighRisk ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
               {violationProb || "Low"} Probability
            </span>
            {section && (
                <span className="text-xs font-mono font-bold bg-white/60 px-2 py-1 rounded text-jdl-black border border-black/5">
                {section}
                </span>
            )}
         </div>
         <div className="text-sm text-jdl-text leading-relaxed">
            <span className="font-bold text-jdl-black">Analysis:</span> {reasoning}
         </div>
         {penalty && (
            <div className="flex items-start text-xs text-jdl-red bg-white/50 p-3 rounded-xl border border-red-100/50">
               <span className="mr-2 text-lg">⚖️</span>
               <span className="mt-0.5 font-medium">{penalty}</span>
            </div>
         )}
      </div>

      {/* 3. Recommended Rephrasing (Highlighted) */}
      {(rephrasedContent) && (
        <div className="relative group transform transition-all hover:scale-[1.01] duration-300">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center text-emerald-700">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-800">Recommended Rephrasing</h4>
                            <p className="text-[10px] text-emerald-600/70 font-medium">Legally Safe Version</p>
                        </div>
                    </div>
                    {/* Copy Button */}
                    <button 
                        onClick={handleCopy}
                        className="flex items-center space-x-1 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold transition-colors"
                    >
                        {copied ? <CheckIcon className="w-3 h-3" /> : <CopyIcon className="w-3 h-3" />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                </div>
                
                <div className="bg-emerald-50/30 p-5 rounded-xl border-l-4 border-emerald-400 text-jdl-black italic mb-4 font-medium text-[15px] leading-relaxed">
                    "{rephrasedContent.replace(/"/g, '')}"
                </div>
                
                <div className="flex items-start">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mt-2 mr-2"></div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        <span className="font-bold text-emerald-700">Why it's safer:</span> {whySafer}
                    </p>
                </div>
            </div>
        </div>
      )}

      {/* 4. Action Plan */}
      {actionItems.length > 0 && (
          <div className="pt-2">
            <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-4 flex items-center ml-1">
                <ShieldIcon className="w-3 h-3 mr-2" /> Civic Action Plan
            </h4>
            <ul className="space-y-3">
                {actionItems.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <span className="flex-shrink-0 w-6 h-6 bg-jdl-black text-white rounded-full flex items-center justify-center text-[10px] font-bold mr-3 mt-0.5">
                            {idx + 1}
                        </span>
                        <span className="leading-relaxed" dangerouslySetInnerHTML={{ 
                            __html: item.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-jdl-black">$1</strong>') 
                        }} />
                    </li>
                ))}
            </ul>
          </div>
      )}
    </div>
  );
};

export const CivicAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: "Welcome to CivicAI, how can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const processResponse = (userText: string) => {
      setIsTyping(true);
      // Mock Logic
      setTimeout(() => {
        const text = userText.toLowerCase();
        const isQuestion = text.length < 60 && (text.includes('?') || text.includes('why') || text.includes('help') || text.includes('what') || text.includes('peca'));

        let aiResponseContent = '';

        if (isQuestion) {
            if (text.includes('peca')) {
                 aiResponseContent = "**PECA (Prevention of Electronic Crimes Act) 2016** is Pakistan's primary cybercrime law. The **2025 Amendments** have introduced stricter penalties for:\n\n1. **Fake News (Sec 26A):** Spreading false info likely to cause panic.\n2. **Aspersion (Sec 2(iiia)):** Damaging reputation.\n3. **Unlawful Content:** Anti-state/institution content.\n\nI can audit your posts against these specific sections.";
            } else if (text.includes('evaluate') || text.includes('audit')) {
                 aiResponseContent = "To evaluate a post, simply **paste the draft text here** in the chat box. I will analyze it for:\n\n*   Risk Score\n*   Specific PECA Violations\n*   Safe Rephrasing Suggestions";
            } else {
                 aiResponseContent = "As a conversational agent, I can refine my previous suggestions. If you'd like the text to be more formal, casual, or focused on a specific legal nuance, just let me know! Otherwise, please paste a new draft for a full legal audit.";
            }
        } else {
            // Post Audit Logic (Same as before)
            const mockRiskScore = Math.floor(Math.random() * 30) + 60;
            aiResponseContent = `### 🚨 Legal Risk Audit [Score: ${mockRiskScore}]
* **Violation Probability:** High
* **Specific PECA Section:** Section 26A - False/Fake Information
* **Reasoning:** The phrase "creating panic" or spreading unverified information aligns with Section 26A, which prohibits disseminating information likely to cause unrest.
* **Penalty Mention:** Imprisonment extending up to 3 years or fine up to 2 million PKR.

---

### ✨ Improved & Legally Safe Version
* **Rephrased Content:** "We are hearing reports regarding this situation and are waiting for verified updates from official channels."
* **Why it's Safer:** This version attributes the info to "reports" and avoids stating unverified rumors as fact, removing the risk of creating panic.

---

### 🛡️ Civic Action Plan
1. **Source Verification:** Verify this claim with official government handouts before sharing.
2. **Authority:** Note that the **Social Media Protection and Regulatory Authority (SMPRA)** monitors this content.`;
        }

        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'ai',
          content: aiResponseContent,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1500);
  };

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
    processResponse(input);
  };

  const handleSuggestion = (text: string) => {
    const userMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: text,
        timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    processResponse(text);
  }

  const suggestions = [
    "What is PECA?",
    "Help me evaluate the post",
    "What are the penalties?",
    "How to stay safe?"
  ];

  return (
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 bg-[#f2f2f7]">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Chat Interface */}
        <div className="w-full">
            <div className="bg-white rounded-[2.5rem] shadow-ios-hover overflow-hidden flex flex-col h-[80vh] border border-white/50 relative">
            
            {/* Top Bar - Replaced with Floating Pill */}
            <div className="absolute top-6 left-0 right-0 flex justify-center z-10 pointer-events-none">
                <div className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-full px-5 py-2 flex items-center shadow-sm">
                    <ShieldIcon className="w-3 h-3 text-jdl-red mr-2" />
                    <span className="text-[10px] font-bold text-jdl-text uppercase tracking-widest">PECA 2025 Database AI</span>
                </div>
            </div>

            {/* Chat History */}
            <div className="flex-grow overflow-y-auto p-4 md:p-8 space-y-8 bg-[#f9f9fc] pt-24 scroll-smooth">
                {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`flex w-full ${msg.role === 'user' ? 'md:max-w-[70%] justify-end' : 'md:max-w-[85%] justify-start'}`}>
                        {msg.role === 'ai' && (
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-jdl-red flex items-center justify-center text-[10px] font-bold text-white shadow-sm mr-3 mt-1">
                                AI
                            </div>
                        )}

                        <div className={`shadow-sm overflow-hidden ${
                            msg.role === 'user' 
                            ? 'bg-white text-jdl-black rounded-[1.5rem] rounded-tr-sm border border-gray-100 px-6 py-4' 
                            : 'bg-white text-jdl-text rounded-[1.5rem] rounded-tl-sm border-l-4 border-l-jdl-red shadow-md w-full'
                        }`}>
                            {msg.role === 'ai' ? (
                                msg.content.includes("### 🚨 Legal Risk Audit") ? (
                                    <div className="px-6 py-5">
                                        <AuditResult content={msg.content} />
                                    </div>
                                ) : (
                                    <div className="px-6 py-5 whitespace-pre-wrap leading-relaxed">
                                        {msg.content.split('\n').map((line, i) => (
                                           <p key={i} className={`mb-2 ${line.startsWith('**') ? 'font-bold' : ''}`}>
                                              {line.replace(/\*\*/g, '')}
                                           </p>
                                        ))}
                                    </div>
                                )
                            ) : (
                                <p className="leading-relaxed">{msg.content}</p>
                            )}
                        </div>

                        {msg.role === 'user' && (
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-jdl-black flex items-center justify-center text-[10px] font-bold text-white shadow-sm ml-3 mt-1">
                                ME
                            </div>
                        )}
                    </div>
                </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start items-center ml-12">
                        <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-jdl-red rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-jdl-red rounded-full animate-bounce delay-100"></div>
                            <div className="w-1.5 h-1.5 bg-jdl-red rounded-full animate-bounce delay-200"></div>
                            <span className="text-xs font-bold text-jdl-red ml-2 uppercase tracking-wide">Analysing</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Relative for floating suggestions */}
            <div className="bg-white p-4 md:p-6 pb-6 md:pb-8 border-t border-gray-100 relative">
                
                {/* Floating Suggestions Section */}
                <div className="absolute -top-14 left-0 right-0 px-4 md:px-6 overflow-hidden pointer-events-none">
                    <div className="flex gap-2 overflow-x-auto pb-2 pointer-events-auto no-scrollbar">
                        {suggestions.map((s, i) => (
                            <button 
                                key={i}
                                onClick={() => handleSuggestion(s)}
                                className="flex-shrink-0 px-4 py-2 bg-white/90 backdrop-blur-xl border border-gray-200 text-jdl-black text-xs font-bold rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSend} className="relative flex items-center bg-[#f2f2f7] rounded-[2rem] p-2 shadow-inner transition-shadow focus-within:shadow-md border border-transparent focus-within:border-gray-200">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste draft post or ask: 'Why is this risky?'"
                    className="w-full pl-6 pr-16 py-4 bg-transparent border-none focus:ring-0 outline-none text-jdl-black placeholder-gray-400 text-base"
                />
                <button
                    type="submit"
                    disabled={!input.trim()}
                    className="absolute right-2 w-12 h-12 bg-jdl-red text-white rounded-full flex items-center justify-center hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md transform active:scale-95 group"
                >
                    <SendIcon className="w-5 h-5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                </form>
                <div className="flex justify-center mt-3 space-x-4">
                     <p className="text-[10px] text-gray-400 flex items-center">
                        <ShieldIcon className="w-3 h-3 mr-1" /> Confidential Audit
                     </p>
                     <p className="text-[10px] text-gray-400">
                        Not Legal Advice
                     </p>
                </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  );
};