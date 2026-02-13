import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white rounded-b-[3rem] shadow-sm mb-12">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
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
            <div className="relative h-72 md:h-96 bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-ios-hover">
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Researchers discussing data"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jdl-black/90 via-transparent to-transparent p-10 flex flex-col justify-end">
                    <p className="text-white text-lg font-medium">JDL Researchers conducting field analysis in Punjab</p>
                </div>
            </div>
          </div>

          {/* Values Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-jdl-black text-white p-10 rounded-[2.5rem] shadow-2xl sticky top-32">
              <h3 className="text-3xl font-serif font-bold mb-8 text-white">Our Values</h3>
              
              <div className="space-y-10">
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