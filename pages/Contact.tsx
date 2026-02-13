import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    orgType: 'Govt',
    interest: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Graphic: Connectivity Nodes */}
      <svg className="absolute top-0 left-0 w-full h-[600px] text-gray-200 opacity-50 pointer-events-none -z-10" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
         <circle cx="100" cy="100" r="2" fill="currentColor" />
         <circle cx="700" cy="150" r="4" fill="currentColor" />
         <circle cx="400" cy="500" r="3" fill="currentColor" />
         <circle cx="200" cy="400" r="2" fill="currentColor" />
         <line x1="100" y1="100" x2="700" y2="150" stroke="currentColor" strokeWidth="0.5" />
         <line x1="100" y1="100" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" />
         <line x1="700" y1="150" x2="400" y2="500" stroke="currentColor" strokeWidth="0.5" />
         <line x1="200" y1="400" x2="400" y2="500" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-20">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-jdl-black mb-6">Partner with JDL</h1>
                <p className="text-xl text-jdl-subtext max-w-2xl mx-auto font-light">
                    We collaborate with governments, international donors, NGOs, and academic institutions. Let’s solve problems together.
                </p>
            </div>

            <div className="bg-white shadow-ios rounded-[3rem] overflow-hidden border border-white">
                {submitted ? (
                    <div className="p-20 text-center">
                        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-3xl font-bold text-jdl-black mb-4">Message Sent</h2>
                        <p className="text-jdl-subtext mb-8 text-lg">Thank you for contacting JDL. Our team will review your inquiry and respond shortly.</p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="px-8 py-3 bg-gray-100 text-jdl-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-jdl-text uppercase tracking-wider mb-3">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-[#f2f2f7] border-transparent rounded-2xl focus:ring-2 focus:ring-jdl-red focus:bg-white transition-all outline-none text-lg"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="orgType" className="block text-sm font-bold text-jdl-text uppercase tracking-wider mb-3">Organization Type</label>
                                <div className="relative">
                                    <select
                                        name="orgType"
                                        id="orgType"
                                        value={formData.orgType}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-[#f2f2f7] border-transparent rounded-2xl focus:ring-2 focus:ring-jdl-red focus:bg-white transition-all outline-none appearance-none text-lg"
                                    >
                                        <option value="Govt">Government</option>
                                        <option value="NGO">NGO / Non-Profit</option>
                                        <option value="Private">Private Sector</option>
                                        <option value="Academia">Academia</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="interest" className="block text-sm font-bold text-jdl-text uppercase tracking-wider mb-3">Area of Interest</label>
                                <div className="relative">
                                    <select
                                        name="interest"
                                        id="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-[#f2f2f7] border-transparent rounded-2xl focus:ring-2 focus:ring-jdl-red focus:bg-white transition-all outline-none appearance-none text-lg"
                                    >
                                        <option value="Research Partnership">Research Partnership</option>
                                        <option value="Civic AI">Civic AI Access</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-jdl-text uppercase tracking-wider mb-3">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-[#f2f2f7] border-transparent rounded-2xl focus:ring-2 focus:ring-jdl-red focus:bg-white transition-all outline-none text-lg resize-none"
                                placeholder="How can we assist you?"
                            ></textarea>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-jdl-black text-white font-bold py-5 px-8 rounded-full hover:bg-gray-900 transition-all shadow-lg text-lg transform hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};