import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { MenuIcon, XIcon, BrainIcon, ChevronRightIcon } from './Icons';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Focus Areas', path: '/focus-areas' },
  { label: 'Publications', path: '/publications' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ref so the event listener always calls the latest toggleChat
  const toggleChatRef = React.useRef<() => void>(() => {});

  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Listen for 'toggle-civic-ai' custom event fired by Home.tsx buttons
  useEffect(() => {
    const handler = () => toggleChatRef.current();
    window.addEventListener('toggle-civic-ai', handler);
    return () => window.removeEventListener('toggle-civic-ai', handler);
  }, []);

  const openChat = () => {
    setIsMenuOpen(false);
    setIsMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  };

  const closeChat = () => {
    setIsVisible(false);
    setTimeout(() => setIsMounted(false), 240);
  };

  const toggleChat = () => {
    if (isMounted && isVisible) {
      closeChat();
    } else {
      openChat();
    }
  };

  // Keep ref in sync with latest toggleChat
  toggleChatRef.current = toggleChat;

  const isChatOpen = isMounted && isVisible;

  return (
    <div className="min-h-screen flex flex-col bg-jdl-gray">

      {/* ── Navigation ── */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center">
        <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-ios rounded-full transition-all duration-300">
          <div className="px-6">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center group">
                  <img
                    src="jdl_logo.png"
                    alt="JDL Logo"
                    className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </Link>
              </div>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center space-x-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-gray-100 text-jdl-black font-semibold'
                          : 'text-jdl-subtext hover:bg-gray-50 hover:text-jdl-text'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* Desktop CivicAI button — toggles chat */}
              <div className="hidden md:flex items-center pl-2">
                <button
                  onClick={toggleChat}
                  className={`inline-flex items-center px-6 py-2.5 text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                    isChatOpen ? 'bg-red-900' : 'bg-jdl-red hover:bg-red-900'
                  }`}
                >
                  <BrainIcon className="w-4 h-4 mr-2" />
                  {isChatOpen ? 'Close CivicAI' : 'CivicAI'}
                </button>
              </div>

              {/* Mobile hamburger */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-full text-jdl-subtext hover:bg-gray-100 focus:outline-none transition-colors"
                >
                  {isMenuOpen ? <XIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 px-4">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-ios-hover p-4 space-y-2 border border-white/20">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-gray-100 text-jdl-black'
                          : 'text-jdl-text hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                {/* Mobile CivicAI button */}
                <button
                  onClick={toggleChat}
                  className="flex items-center w-full px-4 py-3 rounded-2xl text-base font-bold bg-jdl-red text-white shadow-md mt-2"
                >
                  <BrainIcon className="w-5 h-5 mr-3" />
                  {isChatOpen ? 'Close CivicAI' : 'CivicAI'}
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* ── Floating Chat Panel ── */}
      {isMounted && (
        <div
          style={{
            position: 'fixed',
            bottom: '104px',
            right: '28px',
            zIndex: 9998,
            width: '380px',
            height: '580px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 16px 56px rgba(0,0,0,0.24)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.93) translateY(14px)',
            transformOrigin: 'bottom right',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
            pointerEvents: isVisible ? 'auto' : 'none',
          }}
        >
          {/* @ts-ignore - custom web component */}
          <chat-messenger url-allowlist="*" style={{ width: '100%', height: '100%', display: 'block' }}>
            {/* @ts-ignore */}
            <chat-messenger-container
              chat-title="CivicAI"
              chat-title-icon="https://gstatic.com/dialogflow-console/common/assets/ccai-favicons/conversational_agents.png"
              enable-file-upload
            >
              {/* @ts-ignore */}
              <chat-reset-session-button
                slot="titlebar-actions"
                title-text="Start new chat"
              />
            {/* @ts-ignore */}
            </chat-messenger-container>
          {/* @ts-ignore */}
          </chat-messenger>
        </div>
      )}

      {/* ── Floating Circle FAB ── */}
      <button
        onClick={toggleChat}
        aria-label={isChatOpen ? 'Close CivicAI Chat' : 'Open CivicAI Chat'}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          background: '#6e131a',
          boxShadow: isChatOpen
            ? '0 8px 32px rgba(0,0,0,0.35)'
            : '0 4px 24px rgba(0,0,0,0.28)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isChatOpen ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
      >
        {isChatOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* ── Main Content ── */}
      <main className="flex-grow">
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="bg-jdl-black text-white rounded-t-[3rem] mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://drive.google.com/uc?export=view&id=1IL58loUeiFr-ELQRxMIGzrZEeMcdSsgz"
                  alt="JDL Logo"
                  className="h-10 w-auto object-contain bg-white rounded-md p-1"
                />
                <span className="font-serif text-2xl font-bold">Jafri Development Lab</span>
              </div>
              <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
                Combining rigorous economic research with advanced artificial intelligence to solve complex development challenges.
              </p>
              <div className="flex space-x-4 pt-2">
                {['LinkedIn', 'Twitter', 'Facebook'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jdl-red transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Focus Areas</h3>
              <ul className="space-y-4">
                <li><Link to="/focus-areas" className="text-gray-300 hover:text-jdl-red transition-colors">Economic Policy</Link></li>
                <li><Link to="/focus-areas" className="text-gray-300 hover:text-jdl-red transition-colors">Education & Skills</Link></li>
                <li><Link to="/focus-areas" className="text-gray-300 hover:text-jdl-red transition-colors">Public Health</Link></li>
                <li><Link to="/focus-areas" className="text-gray-300 hover:text-jdl-red transition-colors">Social Protection</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Contact</h3>
              <address className="not-italic space-y-4 text-gray-300">
                <p>SOE, QAU</p>
                <p>Islamabad, Pakistan</p>
                <p>
                  <a href="mailto:jaridevelopmentlab@gmail.com" className="text-white font-medium hover:underline decoration-jdl-red underline-offset-4">
                    jaridevelopmentlab@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>&copy; 2026 Jafri Development Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};