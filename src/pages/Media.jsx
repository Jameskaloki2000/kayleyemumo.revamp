import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Music, Heart, ArrowRight, ChevronRight, Share2, Download, ExternalLink } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('live');

  const tabs = [
    { id: 'podcast', label: 'Podcast', icon: <Play size={18} /> },
    { id: 'music', label: 'Music', icon: <Music size={18} /> },
    { id: 'health', label: 'Healthy Wealthy Life', icon: <Heart size={18} /> },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Media Hero */}
      <section className="py-16 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-4"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Digital Content</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight">
            MEDIA <span className="gold-gradient italic">HUB.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Exploring the crossover between media, melody, and wellness. 
            Welcome to the home of authentic storytelling.
          </p>
        </motion.div>

        {/* Tab Selection */}
        <div className="mt-12 flex justify-center sticky top-24 z-30">
          <div className="glass p-1.5 rounded-full flex gap-1 border border-white/5 shadow-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gold text-charcoal shadow-lg shadow-gold/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <AnimatePresence mode="wait">
          {activeTab === 'podcast' && (
            <motion.div
              key="podcast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              {['Season 3 (New)', 'Season 2', 'Season 1'].map((season, sIdx) => (
                <div key={season} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-heading font-bold text-white">Conversations with Kalekye</h3>
                      <p className="text-gold text-sm tracking-wide">Africa's Best Relationship Podcast 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 font-bold">10K+ Listeners</p>
                      <p className="text-white/40 text-sm flex items-center justify-end gap-1"><Heart size={12} className="text-coral" /> 4.9 Rating</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div 
                        key={item} 
                        className="group relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-white/5 flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-105"
                      >
                        <img 
                          src="https://kalekyemumo.com/assets/images/live_n_uncut.png" 
                          alt="Video Thumbnail" 
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                         loading="lazy" decoding="async" />
                        <div className="z-10 h-10 w-10 bg-gold/80 rounded-full flex items-center justify-center text-charcoal scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                          <Play size={20} className="fill-charcoal" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/80 to-transparent">
                          <p className="text-[10px] uppercase tracking-widest text-gold/80 font-bold">Episode {item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'music' && (
            <motion.div
              key="music"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-8"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
                <div className="relative z-10 glass-card p-4 rounded-[4rem] border-white/5 rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden">
                   <img 
                    src="https://kalekyemumo.com/assets/images/img12.jpg" 
                    alt="My Baby Single" 
                    className="w-full h-auto rounded-[3rem]"
                   loading="lazy" decoding="async" />
                  {/* Floating Vinyl Decor */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-10 -right-10 h-40 w-40 bg-charcoal rounded-full border-[20px] border-white/5 flex items-center justify-center"
                  >
                    <div className="h-4 w-4 bg-gold rounded-full" />
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-8">
                <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">Latest Release</span>
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight">MY <span className="gold-gradient italic">BABY.</span></h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  A soulful anthem celebrating love and connection. Explore 
                  Kalekye's musical journey and her artistic evolution beyond the microphone.
                </p>
                
                {/* Audio Player Placeholder */}
                <div className="glass p-6 rounded-2xl border-white/10 shadow-xl space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                        <Music size={24} />
                      </div>
                      <div>
                        <p className="text-white font-bold leading-tight">My Baby</p>
                        <p className="text-white/40 text-xs">Kalekye Mumo</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-white/40 hover:text-gold transition-colors"><Share2 size={18} /></button>
                        <button className="text-white/40 hover:text-gold transition-colors"><Download size={18} /></button>
                    </div>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full relative overflow-hidden group cursor-pointer">
                    <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gold group-hover:bg-gold-light transition-colors" />
                  </div>
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-white/30">
                    <span>1:24</span>
                    <span>3:45</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-8 py-3 bg-charcoal border border-white/10 rounded-full text-white/80 text-sm font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                    Listen on Spotify <ExternalLink size={14} />
                  </button>
                  <button className="px-8 py-3 bg-charcoal border border-white/10 rounded-full text-white/80 text-sm font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                    Watch on YouTube <Play size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'health' && (
            <motion.div
              key="health"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="h-1 w-24 bg-coral/30 mx-auto rounded-full" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  The <span className="text-coral italic">40 off 40</span> Journey.
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Real stories of transformation, overcoming psoriasis, and rewriting 
                  relationships with food and self-worth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Defeating Psoriasis Naturally", img: "https://kalekyemumo.com/assets/images/samsonia-56.jpg", date: "April 2024" },
                  { title: "My Relationship with Food", img: "https://kalekyemumo.com/assets/images/img8.jpg", date: "Jan 2024" },
                  { title: "Authentic Power & Wellness", img: "https://kalekyemumo.com/assets/images/img9.jpg", date: "Dec 2023" },
                ].map((post, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="glass-card group cursor-pointer border-white/5 hover:border-coral/20 hover:bg-coral/5 p-0 overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"  loading="lazy" decoding="async" />
                    </div>
                    <div className="p-8 space-y-4">
                      <p className="text-coral text-xs font-bold uppercase tracking-widest">{post.date}</p>
                      <h4 className="text-xl font-heading font-bold text-white group-hover:text-coral transition-colors">{post.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                        How I navigated the most challenging health hurdles while maintaining my media identity...
                      </p>
                      <div className="pt-4 flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                        Read Experience <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Media;
