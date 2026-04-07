import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Radio, Tv, Users, Heart } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2006 - 2016',
      title: 'The Voice of Radio',
      description: '10+ years on Kiss FM hosting "The Rush Hour" and "The Morning Kiss". Became a household name reaching millions daily.',
      icon: <Radio size={24} className="text-gold" />,
    },
    {
      year: '2015 - Present',
      title: 'TV Star & Moderator',
      description: 'Hosting "The Couples Show" and "Talk Central" on K24TV—where real stories took center stage.',
      icon: <Tv size={24} className="text-gold" />,
    },
    {
      year: '2019',
      title: 'Live & Uncut Launch',
      description: 'Transitioned to a digital-first platform to maintain an authentic, unedited connection with the community.',
      icon: <Users size={24} className="text-gold" />,
    },
    {
      year: 'Present',
      title: 'The Destiny Phase',
      description: 'Certified Confidence Life Coach, creating safe spaces for people to discover their true power.',
      icon: <Heart size={24} className="text-gold" />,
    },
  ];

  return (
    <div className="pt-24 pb-32">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0">
          <img 
            src="https://kalekyemumo.com/assets/images/img1.jpg" 
            alt="About Kalekye Mumo" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative text-center space-y-4 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.4em] font-medium text-xs block"
          >
            Behind the Microphone
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-heading font-bold text-white tracking-tight"
          >
            MY <span className="gold-gradient italic">STORY.</span>
          </motion.h1>
        </div>
      </section>

      {/* The Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">15+ Years Of <br /> Authentic Connection.</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              For over a decade, I was the voice that woke you up, the presence that kept you 
              company through the rush hour, and the mediator of countless couples' dilemmas.
            </p>
            <p className="text-white/70 leading-relaxed">
              My journey started in the bustling studios of mainstream radio, but it was paved 
              with a singular purpose: connecting with people's truth. Every award show I emceed, 
              every brand I represented, and every story I told was about influencing how 
              we perceive ourselves and the world around us.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-0 shadow-2xl">
              <img 
                src="https://kalekyemumo.com/assets/images/img17.jpg" 
                alt="Kalekye Mumo Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative py-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} space-y-4`}>
                  <span className="text-gold font-heading font-bold text-xl">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0 inline-block">
                    {item.description}
                  </p>
                </div>
                
                <div className="relative z-10 p-4 bg-charcoal-light border border-gold/20 rounded-2xl shadow-lg">
                  {item.icon}
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative glass bg-gold/5 border-gold/20 rounded-[3rem] p-12 md:p-24 text-center max-w-5xl mx-auto overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold/5 blur-[100px]" />
          <Heart className="absolute top-12 left-12 text-gold/20 -rotate-12" size={80} />
          <Users className="absolute bottom-12 right-12 text-gold/10 rotate-12" size={100} />
          
          <p className="relative text-3xl md:text-5xl font-heading italic text-white/90 leading-tight">
            "To be alive and present to your circumstance <span className="text-gold">unedited and unfiltered</span> is one of the most relatable ways to connect with others."
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-12 rounded-full opacity-50" />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
