import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Heart, Play, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium tracking-wider uppercase">
                Media | Emcee | Life Coach
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight">
                INFLUENCING <br />
                <span className="gold-gradient italic">PERCEPTION,</span> <br />
                ONE STORY <br />
                AT A TIME.
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
                Veteran Media Personality, Corporate Emcee, and Certified Confidence Life Coach helping you lead an authentic and powerful life.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary py-4 px-8 text-center flex items-center justify-center gap-2 group">
                  Hire for Events
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-outline py-4 px-8 text-center">
                  Explore Coaching
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Background Blob */}
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral/5 blur-[100px] rounded-full" />
              
              <div className="relative z-10 glass-card p-2 rounded-[2.5rem] overflow-hidden border-white/5">
                <img 
                  src="https://kalekyemumo.com/assets/images/banner1.jpg" 
                  alt="Kalekye Mumo Hero" 
                  className="w-full h-auto rounded-[2.2rem] grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                 loading="eager" decoding="async" fetchpriority="high" />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 lg:-left-12 glass p-6 rounded-2xl border-white/10 shadow-2xl z-20"
              >
                <p className="text-3xl font-heading font-bold text-gold">15+</p>
                <p className="text-xs text-white/60 uppercase tracking-widest font-medium">Years of Excellence</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section (Logos Marquee) */}
      <section className="py-20 bg-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-12">
            Trusted by Corporate Giants
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group">
            {['Unilever', 'Coca-Cola', 'Safaircom', 'KCB Bank', 'Standard Group'].map((name) => (
              <span key={name} className="text-2xl md:text-3xl font-heading font-bold text-white hover:text-gold transition-colors hover:grayscale-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gold uppercase tracking-widest">My Services</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">How We Can Work Together</h3>
          </div>
          <Link to="/services" className="text-gold hover:text-gold-light flex items-center gap-2 group decoration-gold underline-offset-8 underline">
            View All Services
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Corporate Emcee', 
              icon: <Mic className="text-gold" />, 
              desc: 'Premium hosting for high-stakes corporate launches, awards, and galas.',
              link: '/services'
            },
            { 
              title: 'Life Coaching', 
              icon: <Heart className="text-coral" />, 
              desc: 'Transformative confidence building for individuals ready for their true destiny.',
              link: '/services'
            },
            { 
              title: 'Digital Media', 
              icon: <Play className="text-white" />, 
              desc: 'Strategic brand storytelling and high-impact digital platform presence.',
              link: '/media'
            }
          ].map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              className="glass-card hover:border-gold/30 hover:bg-gold/5 flex flex-col items-start p-10 h-full"
            >
              <div className="p-4 bg-white/5 rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              <h4 className="text-2xl font-heading font-bold mb-4">{service.title}</h4>
              <p className="text-white/60 mb-10 leading-relaxed">{service.desc}</p>
              <Link to={service.link} className="mt-auto flex items-center gap-2 text-sm font-semibold tracking-wide text-white group">
                Learn More
                <ChevronRight size={16} className="group-hover:text-gold transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-charcoal-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 group">
                <img 
                  src="https://kalekyemumo.com/assets/images/img1.png" 
                  alt="Kalekye Mumo Story" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 loading="lazy" decoding="async" />
              </div>
              <div className="absolute -top-6 -right-6 h-32 w-32 border-t-2 border-r-2 border-gold rounded-tr-3xl" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 border-b-2 border-l-2 border-coral rounded-bl-3xl opacity-50" />
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase italic">The Journey</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">Creating Safe Spaces For <span className="gold-gradient italic">Your Voice.</span></h2>
              <p className="text-white/70 leading-relaxed text-lg">
                For over 15 years, I graced the airwaves of mainstream radio and television in Kenya. 
                What started as a media career evolved into a profound calling: creating safe spaces 
                where voices are heard, unedited and unfiltered.
              </p>
              <p className="text-white/60 leading-relaxed">
                Whether on screen, behind a microphone, or in a one-on-one coaching session, my mission 
                remains the same—to connect, to inspire, and to influence perception through truth.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2 mt-4">
                Read My Story
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
