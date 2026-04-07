import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Globe, Play, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="py-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-4"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest italic">Get In Touch</span>
          <h1 className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tight">
            LET'S <span className="gold-gradient italic">WORK.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your event or transform your life? 
            Send me a message and let's begin the conversation.
          </p>
        </motion.div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Direct Contact</h2>
              <p className="text-white/60 leading-relaxed max-w-md">
                Whether you're booking me for a corporate gala or interested in 
                personalized coaching, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-gold" />, label: 'Email Me', value: 'info@kalekyemumo.com', link: 'mailto:info@kalekyemumo.com' },
                { icon: <Globe className="text-gold" />, label: 'Official Site', value: 'www.kalekyemumo.com', link: 'https://www.kalekyemumo.com' },
                { icon: <MapPin className="text-gold" />, label: 'Location', value: 'Nairobi, Kenya', link: '#' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-gold/30 hover:bg-gold/5 group transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-gold/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                    <p className="text-lg font-heading text-white">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="space-y-6 pt-4">
               <h3 className="text-xl font-heading font-bold text-white">Social Presence</h3>
               <div className="flex gap-4">
                  {[Globe, Play, User, MessageCircle].map((Icon, i) => (
                    <button key={i} className="h-14 w-14 glass-card border-white/5 p-0 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition-all" aria-label="Social link">
                      <Icon size={24} />
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
            <div className="relative z-10 glass-card bg-white/5 p-10 md:p-16 rounded-[4rem] border-white/5 space-y-10 shadow-2xl">
              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-bold text-white">Send a Message</h3>
                <p className="text-white/40 text-sm italic">Inquiries are usually answered within 24 hours.</p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60 pl-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60 pl-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60 pl-2">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all appearance-none">
                    <option className="bg-charcoal">Corporate Emcee</option>
                    <option className="bg-charcoal">Life Coaching</option>
                    <option className="bg-charcoal">Media Collaboration</option>
                    <option className="bg-charcoal">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/60 pl-2">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-all resize-none"
                  />
                </div>

                <button 
                   type="submit"
                  className="w-full btn-primary py-5 rounded-3xl flex items-center justify-center gap-3 group text-lg"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
