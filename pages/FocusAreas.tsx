import React from 'react';
import { FocusArea } from '../types';
import { ChartIcon, BookIcon, HeartIcon, ShieldIcon } from '../components/Icons';

const areas: FocusArea[] = [
  {
    id: 'eco',
    title: 'Economic Policy & Growth',
    description: "We analyze fiscal frameworks, labor markets, and industrial policies to identify barriers to economic growth. Our analytics help forecast the impact of policy shifts on small and medium enterprises (SMEs).",
    icon: 'chart'
  },
  {
    id: 'edu',
    title: 'Education & Skills',
    description: "Beyond enrollment numbers, JDL focuses on learning outcomes. We use data to map school infrastructure gaps and evaluate the efficacy of teacher training programs.",
    icon: 'book'
  },
  {
    id: 'health',
    title: 'Public Health Analytics',
    description: "Using spatial data and predictive analytics, we model disease vectors and healthcare facility utilization to optimize resource allocation in the public health sector.",
    icon: 'heart'
  },
  {
    id: 'social',
    title: 'Social Protection',
    description: "We evaluate social safety nets to ensure they reach the most vulnerable populations, minimizing leakage and maximizing poverty alleviation.",
    icon: 'shield'
  }
];

export const FocusAreas: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
        case 'chart': return <ChartIcon className="w-8 h-8" />;
        case 'book': return <BookIcon className="w-8 h-8" />;
        case 'heart': return <HeartIcon className="w-8 h-8" />;
        case 'shield': return <ShieldIcon className="w-8 h-8" />;
        default: return <ChartIcon className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen">
       <div className="bg-jdl-red rounded-b-[3rem] shadow-sm mb-16 relative overflow-hidden">
         {/* Abstract Bar Chart Graphic */}
         <div className="absolute bottom-0 left-0 w-full h-24 flex items-end space-x-2 px-10 opacity-10 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} 
                     className="w-full bg-white" 
                     style={{ height: `${Math.random() * 80 + 20}%`, opacity: Math.random() }} 
                />
            ))}
         </div>

         <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Areas of Expertise</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                Deep dives into the critical pillars of national development, supported by rigorous data and field research.
            </p>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
                <div key={area.id} className="bg-white rounded-[2.5rem] shadow-ios hover:shadow-ios-hover border border-white p-10 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start">
                        <div className={`flex-shrink-0 p-4 rounded-2xl mr-8 transition-colors ${
                            index % 2 === 0 ? 'bg-jdl-red/5 text-jdl-red group-hover:bg-jdl-red group-hover:text-white' : 'bg-gray-100 text-black group-hover:bg-black group-hover:text-white'
                        }`}>
                            {getIcon(area.icon)}
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-jdl-black mb-4">{area.title}</h2>
                            <p className="text-jdl-text/70 leading-relaxed mb-6">
                                {area.description}
                            </p>
                            <button className="text-sm font-bold text-jdl-red hover:text-black transition-colors uppercase tracking-widest flex items-center">
                                Read Related Research <span className="ml-2 text-lg">&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
          </div>
       </div>
    </div>
  );
};