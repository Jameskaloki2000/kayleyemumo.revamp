import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Heart, Star, CheckCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/ui/Testimonials';

const Services = () => {
  const emceeSkills = [
    'Corporate Product Launches',
    'Prestigious Award Ceremonies',
    'High-Level Mediations',
    'Gala Dinners & Fundraisers',
    'Brand Ambassadorship',
  ];

  const coachingFeatures = [
    'Confidence Building Methodology',
    'Personal Brand Strategy',
    'Public Speaking & Stage Presence',
    'Authentic Living Workshops',
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="space-y-4"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Collaborate</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight">
            WORK WITH <span className="gold-gradient italic">KALEKYE.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From high-energy corporate stages to intimate transformational coaching, 
            I bring 15+ years of media excellence to every engagement.
          </p>
        </motion.div>
      </section>

      {/* Emcee Section */}
      <section className="py-24 bg-charcoal-light/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-gold">
                <div className="p-3 bg-gold/10 rounded-2xl">
                  <Mic size={28} />
                </div>
                <span className="text-xl font-heading font-semibold">The Emcee</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Elevating Your Event Presence.</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Hosting an event isn't just about reading a script; it's about managing energy, 
                maintaining tempo, and ensuring your brand's message lands with impact. 
                Command the stage as a professional host or moderator with charisma and authority.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {emceeSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-white/80">
                    <CheckCircle size={18} className="text-gold" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="btn-primary px-10 flex items-center gap-3 group">
                  Book for Event
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex -space-x-3 items-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
                  <img src="https://kalekyemumo.com/assets/images/logo.png" className="h-8 w-auto invert" alt="Client 1"  loading="lazy" decoding="async" />
                  <span className="pl-6 text-xs text-white/40 font-medium">Trusted by Fortune 500 Brands</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                <img 
                  src="https://kalekyemumo.com/assets/images/banner1.jpg" 
                  alt="Kalekye Hosting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 loading="lazy" decoding="async" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-8 rounded-3xl border-white/10 shadow-xl max-w-xs animate-entrance">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-gold text-gold" />)}
                </div>
                <p className="text-sm italic text-white/80 leading-relaxed">
                  "Kalekye's energy is unmatched. She transformed our product launch into an unforgettable experience."
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gold">— Unilever Brand Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="relative lg:w-1/2">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-coral/10 blur-[100px] rounded-full" />
              <div className="relative z-10 glass-card p-4 rounded-[3rem] border-white/5">
                <img 
                  src="https://kalekyemumo.com/assets/images/img1.png" 
                  alt="Life Coaching" 
                  className="w-full h-auto rounded-[2.5rem]"
                 loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-3 text-coral">
                <div className="p-3 bg-coral/10 rounded-2xl">
                  <Heart size={28} />
                </div>
                <span className="text-xl font-heading font-semibold">The Coach</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Own Your Mic Programs.</h2>
              <p className="text-white/60 text-lg leading-relaxed italic border-l-4 border-coral/30 pl-6">
                "Master the Art of Communication. Empowering individuals to host, speak, and deliver with confidence."
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Whether you want to command a stage, build clarity in corporate presentations, or deliver the perfect 
                voice over for documentaries and commercials, the Own Your Mic programs are designed to transform you.
              </p>
              
              <div className="space-y-4">
                {[
                  'The Host Program (Moderation & Emceeing)',
                  'Public Speaking Masterclass',
                  'Voice Over Techniques & Scripting',
                  'Confidence & Personal Brand Strategy',
                ].map(f => (
                  <div key={f} className="flex items-center gap-4 text-white/80 group">
                    <div className="h-2 w-2 rounded-full bg-coral group-hover:scale-150 transition-transform" />
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary bg-coral hover:bg-coral-light shadow-coral/20 px-10 inline-flex items-center gap-3 group">
                Inquire About Coaching
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <Testimonials />

      {/* CTA Final */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <div className="glass-card bg-gold/5 border-gold/10 p-16 space-y-8 rounded-[4rem]">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Ready to make an impact?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether it's for a global event or a personal transformation, 
            let's create something extraordinary together.
          </p>
          <Link to="/contact" className="btn-primary px-12 py-4">
            Let's Talk Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
