import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, BrainIcon, ChartIcon, ShieldIcon, BookIcon, HeartIcon } from '../components/Icons';

// Helper: fires a custom event that Layout.tsx listens to in order to toggle the chat panel
const openCivicAI = () => {
  window.dispatchEvent(new CustomEvent('toggle-civic-ai'));
};

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[95vh] flex items-center rounded-b-[3rem] bg-jdl-red">
        {/* Abstract background */}
        <div className="absolute inset-0 bg-gradient-to-br from-jdl-red via-[#500e13] to-black opacity-95"></div>
        
        {/* Animated Data Grid Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
                 backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* Abstract SVG Graphic: Data Network */}
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] text-white opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" viewBox="0 0 100 100" fill="none" stroke="currentColor">
           <path d="M10 50 Q 25 25 50 50 T 90 50" strokeWidth="0.5" fill="none" />
           <path d="M10 60 Q 25 35 50 60 T 90 60" strokeWidth="0.5" fill="none" />
           <path d="M10 40 Q 25 15 50 40 T 90 40" strokeWidth="0.5" fill="none" />
           <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
           <circle cx="50" cy="50" r="15" strokeWidth="0.2" />
           <circle cx="50" cy="50" r="10" strokeWidth="0.2" />
           <circle cx="80" cy="20" r="2" fill="currentColor" />
           <circle cx="20" cy="80" r="2" fill="currentColor" />
           <line x1="50" y1="50" x2="80" y2="20" strokeWidth="0.2" />
           <line x1="50" y1="50" x2="20" y2="80" strokeWidth="0.2" />
        </svg>

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-jdl-red/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 pt-48 pb-24 relative z-10 w-full">
          <div className="flex flex-col items-center">
            
            {/* Floating Data Element - Decorative */}
            <div className="hidden md:flex absolute top-40 right-10 lg:right-20 w-64 h-40 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 flex-col justify-between transform rotate-6 shadow-2xl animate-pulse">
                <div className="flex justify-between items-center mb-2">
                    <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-2">
                    <div className="w-full h-12 bg-white/10 rounded-lg relative overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full text-blue-300 opacity-50" preserveAspectRatio="none">
                             <polyline points="0,50 20,40 40,45 60,20 80,30 100,10" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="flex justify-between text-[10px] text-white/40 font-mono">
                        <span>DATA_INGEST</span>
                        <span>98%</span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight">
                Bridging the Gap Between <span className="text-white/80 italic relative inline-block">
                    Data
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>, Policy, and Impact.
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                Jafri Development Lab combines rigorous economic research with advanced artificial intelligence to solve the region's most complex development challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/focus-areas"
                  className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-jdl-red bg-white hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-ios"
                >
                  Explore Our Research
                </Link>

                {/* ── Opens the floating CivicAI chat panel ── */}
                <button
                  onClick={openCivicAI}
                  className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-lg font-medium rounded-full text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  Talk to Civic AI
                  <ChevronRightIcon className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Teaser */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-ios border border-white">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
              <div className="mb-12 lg:mb-0">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-jdl-red/10 text-jdl-red text-sm font-bold mb-8 uppercase tracking-wider">
                  <BrainIcon className="w-4 h-4 mr-2" />
                  New Technology
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-jdl-black mb-6 leading-tight">
                  Introducing Civic AI:<br />The Future of Policy Intelligence.
                </h2>
                <p className="text-lg text-jdl-text/70 mb-10 leading-relaxed">
                  Data should not be locked in PDFs. JDL introduces Pakistan's first Civic AI—a conversational interface that allows policymakers, researchers, and citizens to query complex development data instantly.
                </p>

                {/* ── Opens the floating CivicAI chat panel ── */}
                <button
                  onClick={openCivicAI}
                  className="inline-flex items-center text-jdl-red font-bold text-lg hover:underline decoration-2 underline-offset-4"
                >
                  Try the Beta Version <ChevronRightIcon className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-jdl-red/20 rounded-[2.5rem] transform translate-x-6 translate-y-6 blur-md"></div>
                <div className="relative bg-jdl-black rounded-[2.5rem] p-8 shadow-2xl overflow-hidden border border-white/10">
                   {/* Chat UI Simulation */}
                   <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-full bg-jdl-red flex-shrink-0 flex items-center justify-center text-white text-xs font-bold border-2 border-jdl-black">AI</div>
                          <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-4 text-gray-200 text-sm leading-relaxed shadow-lg">
                              I analyzed 5 years of literacy data for Punjab. Trends show a 12% increase in rural districts.
                          </div>
                      </div>
                      <div className="flex items-start space-x-4 flex-row-reverse space-x-reverse">
                          <div className="w-10 h-10 rounded-full bg-gray-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold border-2 border-jdl-black">You</div>
                          <div className="bg-white rounded-2xl rounded-tr-sm p-4 text-jdl-black text-sm font-medium shadow-lg">
                              Generate a chart comparing this to healthcare spending.
                          </div>
                      </div>
                      <div className="h-40 bg-gray-800/50 rounded-3xl border border-gray-700 flex items-center justify-center backdrop-blur-sm">
                           <div className="text-center">
                             <ChartIcon className="text-gray-500 w-12 h-12 mx-auto mb-2" />
                             <span className="text-gray-500 text-xs uppercase tracking-widest">Chart Generated</span>
                           </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies - Modern Redesign */}
      <section className="py-24 bg-jdl-gray/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-jdl-black mb-6">Our Core Competencies</h2>
              <p className="text-xl text-jdl-subtext font-light leading-relaxed">
                We blend academic rigor with startup agility. Here is how we drive systemic change across the public sector.
              </p>
            </div>
            <Link to="/about" className="hidden md:inline-flex items-center text-jdl-red font-bold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity">
              View Methodology <ChevronRightIcon className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Research', 
                subtitle: 'Field & Empirical',
                icon: <BookIcon />, 
                desc: 'Conducting large-scale Randomized Control Trials (RCTs) to identify the root causes of socio-economic stagnation.', 
                color: 'text-blue-600', 
                bg: 'bg-blue-50',
                tags: ['RCTs', 'Survey Design', 'Policy Analysis']
              },
              { 
                title: 'Analytics', 
                subtitle: 'Data & Prediction',
                icon: <ChartIcon />, 
                desc: 'Utilizing predictive modeling and satellite imagery to forecast trends in public health and urban expansion.', 
                color: 'text-purple-600', 
                bg: 'bg-purple-50',
                tags: ['Big Data', 'Machine Learning', 'Forecasting']
              },
              { 
                title: 'Social Dev', 
                subtitle: 'Impact & Welfare',
                icon: <HeartIcon />, 
                desc: 'Designing scalable, evidence-based interventions that improve quality of life and build community resilience.', 
                color: 'text-rose-600', 
                bg: 'bg-rose-50',
                tags: ['Intervention', 'Welfare', 'Community']
              },
              { 
                title: 'Infrastructure', 
                subtitle: 'Tech & Governance',
                icon: <ShieldIcon />, 
                desc: 'Building robust digital pipelines that ensure transparency, accountability, and real-time governance.', 
                color: 'text-emerald-600', 
                bg: 'bg-emerald-50',
                tags: ['GovTech', 'Open Data', 'Security']
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white overflow-hidden flex flex-col h-full">
                
                {/* Decorative background blur */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 ${item.bg} rounded-[1.2rem] flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm`}>
                        <ChevronRightIcon className="w-5 h-5 text-jdl-black" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-auto">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${item.color.replace('text-', 'text-').replace('600', '500')}`}>{item.subtitle}</p>
                    <h3 className="text-2xl font-serif font-bold text-jdl-black mb-4 group-hover:text-jdl-red transition-colors">{item.title}</h3>
                    <p className="text-jdl-text/70 text-[15px] leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-gray-50">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-full border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile only link */}
           <div className="mt-10 text-center md:hidden">
            <Link to="/about" className="inline-flex items-center text-jdl-red font-bold uppercase tracking-widest text-sm">
                View Methodology <ChevronRightIcon className="ml-2 w-4 h-4" />
              </Link>
           </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-jdl-black rounded-[3rem] p-16 relative overflow-hidden">
             {/* Data Points visualization in footer stats */}
             <div className="absolute inset-0 opacity-10"
                style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-jdl-red opacity-20 rounded-full blur-[80px]"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 opacity-20 rounded-full blur-[80px]"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
              <div className="space-y-2">
                <p className="text-6xl font-serif font-bold text-white">30+</p>
                <p className="text-white/50 font-medium tracking-widest uppercase text-xs">Research Projects</p>
              </div>
              <div className="space-y-2">
                <p className="text-6xl font-serif font-bold text-white">5M+</p>
                <p className="text-white/50 font-medium tracking-widest uppercase text-xs">Data Points Analyzed</p>
              </div>
              <div className="space-y-2">
                <p className="text-6xl font-serif font-bold text-white">1</p>
                <p className="text-white/50 font-medium tracking-widest uppercase text-xs">Unified Civic AI Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};