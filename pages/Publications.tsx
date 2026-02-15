import React from 'react';
import { Publication } from '../types';
import { DownloadIcon } from '../components/Icons';

const publications: Publication[] = [
  {
    id: '1',
    title: "The Digital Divide: Internet Access and Economic Mobility in 2025",
    type: 'Report',
    date: 'Oct 2025',
    description: "A comprehensive analysis of how broadband penetration correlates with household income growth across 36 districts.",
    link: '#'
  },
  {
    id: '2',
    title: "Reimagining Urban Transport: A Data-Driven Approach",
    type: 'Policy Brief',
    date: 'Sep 2025',
    description: "Recommendations for integrating informal transit networks into the Metro bus system using GPS trace data.",
    link: '#'
  },
  {
    id: '3',
    title: "How Civic AI Helped Local Governments Allocate Budget Efficiently",
    type: 'Case Study',
    date: 'Aug 2025',
    description: "A pilot program in Sialkot demonstrating 15% improvement in resource utilization using JDL's tools.",
    link: '#'
  },
  {
    id: '4',
    title: "Education Outcomes Post-COVID: The Long Tail",
    type: 'Blog',
    date: 'July 2025',
    description: "Survey results from 500 public schools indicating persistent learning gaps in mathematics.",
    link: '#'
  }
];

export const Publications: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-jdl-red pt-40 pb-20 rounded-b-[3rem] shadow-lg mb-16 relative overflow-hidden">
        {/* Document/Grid Pattern Graphic */}
        <div className="absolute inset-0 opacity-10"
             style={{
                 backgroundImage: `linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), 
                                   linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)`,
                 backgroundSize: '50px 50px'
             }}
        />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Publications & Insights</h1>
            <p className="text-white/70 text-lg">Research that drives conversation and policy.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub) => (
                <div key={pub.id} className="group bg-white rounded-[2rem] p-8 shadow-ios hover:shadow-ios-hover transition-all duration-300 border border-white hover:border-gray-100 flex flex-col relative overflow-hidden">
                    {/* Subtle corner graphic */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-[4rem] -mr-10 -mt-10 transition-colors group-hover:bg-red-50"></div>

                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <span className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest ${
                            pub.type === 'Report' ? 'bg-blue-50 text-blue-700' : 
                            pub.type === 'Policy Brief' ? 'bg-amber-50 text-amber-700' :
                            'bg-gray-100 text-gray-700'
                        }`}>
                            {pub.type}
                        </span>
                        <span className="text-jdl-subtext text-xs font-medium">{pub.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-jdl-black mb-4 group-hover:text-jdl-red transition-colors leading-tight relative z-10">
                        {pub.title}
                    </h3>
                    <p className="text-jdl-text/70 mb-8 text-sm leading-relaxed flex-grow relative z-10">
                        {pub.description}
                    </p>
                    <a href={pub.link} className="inline-flex items-center text-sm font-bold text-jdl-black hover:text-jdl-red transition-colors mt-auto relative z-10">
                        {pub.type === 'Report' ? (
                             <>Download PDF <DownloadIcon className="ml-2 w-4 h-4" /></>
                        ) : (
                             <>Read More <span className="ml-1 text-lg">&rarr;</span></>
                        )}
                    </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};