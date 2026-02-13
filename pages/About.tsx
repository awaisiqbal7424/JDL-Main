import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white rounded-b-[3rem] shadow-sm mb-12 relative overflow-hidden">
        {/* SVG Graphic: Topographic Data Map */}
        <svg className="absolute top-0 left-0 w-full h-full text-gray-100 opacity-40 pointer-events-none" viewBox="0 0 800 300" preserveAspectRatio="none">
             <path d="M0,150 Q200,50 400,150 T800,150" fill="none" stroke="currentColor" strokeWidth="2" />
             <path d="M0,180 Q200,80 400,180 T800,180" fill="none" stroke="currentColor" strokeWidth="2" />
             <path d="M0,210 Q200,110 400,210 T800,210" fill="none" stroke="currentColor" strokeWidth="2" />
             <path d="M0,240 Q200,140 400,240 T800,240" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-jdl-black mb-6">Evidence-Based.<br/>Technology-Enabled.</h1>
          <div className="w-24 h-1.5 bg-jdl-red rounded-full mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Text */}
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-ios border border-white">
                <p className="text-xl text-jdl-text leading-relaxed font-light mb-6">
                <span className="font-bold text-jdl-black">Jafri Development Lab (JDL)</span> is a research and analytics organization dedicated to promoting evidence-based policy. In a world awash with data but starving for insight, we act as the bridge.
                </p>
                <p className="text-lg text-jdl-subtext leading-relaxed">
                Unlike traditional think tanks, JDL does not just publish papers; we build tools. By integrating social science with software engineering, we ensure that our findings lead to actionable, scalable solutions for the public sector.
                </p>
             </div>
            
            {/* Team Image Placeholder */}
            <div className="relative h-72 md:h-96 bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-ios-hover group">
                {/* Overlay graphic for research theme */}
                <div className="absolute inset-0 bg-jdl-black/10 z-10"></div>
                <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-mono border border-white/30">
                   FIELD_OPS_V2
                </div>
                
                <img 
                  src="https://picsum.photos/seed/jdl-research/800/600?grayscale" 
                  alt="Researchers discussing data"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jdl-black/90 via-transparent to-transparent p-10 flex flex-col justify-end z-20">
                    <p className="text-white text-lg font-medium">JDL Researchers conducting field analysis in Punjab</p>
                </div>
            </div>
          </div>

          {/* Values Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-jdl-black text-white p-10 rounded-[2.5rem] shadow-2xl sticky top-32 overflow-hidden relative">
              {/* Graphic in black card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full opacity-20 transform translate-x-10 -translate-y-10"></div>
              
              <h3 className="text-3xl font-serif font-bold mb-8 text-white relative z-10">Our Values</h3>
              
              <div className="space-y-10 relative z-10">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-jdl-red">Rigor</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We adhere to the highest academic standards in our research, ensuring every data point is verified and every conclusion is sound.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-jdl-red">Innovation</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We leverage AI and modern tech stacks to democratize access to information, moving beyond static reports.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-jdl-red">Impact</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We measure success by lives improved and policies changed, not just by the number of papers we publish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};