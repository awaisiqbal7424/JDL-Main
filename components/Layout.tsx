import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { MenuIcon, XIcon, BrainIcon } from './Icons';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Civic AI', path: '/civic-ai' },
  { label: 'Focus Areas', path: '/focus-areas' },
  { label: 'Publications', path: '/publications' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-jdl-gray">
      {/* Navigation - iOS Style Floating Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center">
        <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-ios rounded-full transition-all duration-300">
          <div className="px-6">
            <div className="flex justify-between items-center h-16">
              
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-jdl-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <span className="text-white font-serif font-bold text-xl">J</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-jdl-text text-lg leading-none">JDL</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-jdl-red text-white shadow-md'
                          : 'text-jdl-subtext hover:bg-gray-100 hover:text-jdl-text'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* CTA Button (Desktop) */}
              <div className="hidden md:flex items-center pl-2">
                 {/* This space intentionally left blank or for secondary actions if needed, 
                     but main nav items cover it. If specific CTA is needed distinct from nav: */}
              </div>

              {/* Mobile menu button */}
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

          {/* Mobile Menu Dropdown */}
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
                          ? 'bg-jdl-red text-white'
                          : 'text-jdl-text hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Main Content - Add top padding to account for fixed floating nav */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-jdl-black text-white rounded-t-[3rem] mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                 <div className="w-8 h-8 bg-jdl-red rounded-full flex items-center justify-center">
                    <span className="text-white font-serif font-bold text-lg">J</span>
                 </div>
                 <span className="font-serif text-2xl font-bold">Jafri Development Lab</span>
              </div>
              <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
                Combining rigorous economic research with advanced artificial intelligence to solve complex development challenges.
              </p>
              <div className="flex space-x-4 pt-2">
                {['LinkedIn', 'Twitter', 'Facebook'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jdl-red transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    {/* Simple placeholder icon for socials */}
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
                <p><a href="mailto:jaridevelopmentlab@gmail.com" className="text-white font-medium hover:underline decoration-jdl-red underline-offset-4">jaridevelopmentlab@gmail.com</a></p>
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