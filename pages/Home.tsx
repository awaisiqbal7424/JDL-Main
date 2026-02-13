import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, BrainIcon, ChartIcon, ShieldIcon, BookIcon, HeartIcon } from '../components/Icons';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center rounded-b-[3rem] bg-jdl-red">
        {/* Abstract background */}
        <div className="absolute inset-0 bg-gradient-to-br from-jdl-red to-black opacity-90"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-black opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-900 opacity-40 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight">
              Bridging the Gap Between <span className="text-white/80 italic">Data</span>, Policy, and Impact.
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
              <Link
                to="/civic-ai"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-lg font-medium rounded-full text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Talk to Civic AI
                <ChevronRightIcon className="ml-2 w-5 h-5" />
              </Link>
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
                  Data should not be locked in PDFs. JDL introduces Pakistan’s first Civic AI—a conversational interface that allows policymakers, researchers, and citizens to query complex development data instantly.
                </p>
                <Link
                  to="/civic-ai"
                  className="inline-flex items-center text-jdl-red font-bold text-lg hover:underline decoration-2 underline-offset-4"
                >
                  Try the Beta Version <ChevronRightIcon className="ml-2 w-5 h-5" />
                </Link>
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

      {/* Core Competencies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-jdl-black mb-4">Our Core Competencies</h2>
            <p className="text-jdl-text/60 max-w-2xl mx-auto">Foundational pillars that drive our mission forward.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Research', icon: <BookIcon />, desc: 'RCTs and empirical studies understanding root causes.', color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Analytics', icon: <ChartIcon />, desc: 'Predictive modeling and big data forecasting trends.', color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Social Dev', icon: <HeartIcon />, desc: 'Scalable interventions improving community resilience.', color: 'text-rose-600', bg: 'bg-rose-50' },
              { title: 'Infrastructure', icon: <ShieldIcon />, desc: 'Robust data pipelines ensuring transparency.', color: 'text-emerald-600', bg: 'bg-emerald-50' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-ios hover:shadow-ios-hover transition-all duration-300 border border-white hover:-translate-y-1">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} mb-6`}>
                  {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold text-jdl-black mb-3">{item.title}</h3>
                <p className="text-jdl-text/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-jdl-black rounded-[3rem] p-16 relative overflow-hidden">
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