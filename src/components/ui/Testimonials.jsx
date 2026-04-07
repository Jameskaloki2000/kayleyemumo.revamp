import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const testimonials = [
  {
    name: "Xile Gabantu",
    program: "Host Program Testimonials",
    video: "https://kalekyemumo.netlify.app/assets/OYM-HOST-PROGRAM-C70u2o-e.mp4",
    desc: "Also featuring Mutheu Mbathi, Sandra Ruong'o, and Hope Mutua."
  },
  {
    name: "Ann Mwongela",
    program: "Public Speaking Testimonials",
    video: "https://kalekyemumo.netlify.app/assets/OYM-PUBLIC-SPEAKING-QcywKXGN.mp4",
    desc: "Also featuring Mao Mukuria."
  },
  {
    name: "Hildah Njama",
    program: "Voiceover Program Testimonials",
    video: "https://kalekyemumo.netlify.app/assets/OYM-VOICEOVER-BlLPC85s.mp4",
    desc: "Also featuring Shyro Ogolla and Juliana Nthenya."
  }
];

const VideoCard = ({ testimonial }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden group">
      <div className="relative aspect-[4/5] bg-black">
        <video 
          ref={videoRef}
          src={testimonial.video}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          playsInline
          loop
          onEnded={() => setIsPlaying(false)}
        />
        <button 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center text-charcoal hover:scale-110 transition-transform">
            {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current ml-1" />}
          </div>
        </button>
      </div>
      <div className="p-6">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">{testimonial.program}</p>
        <h4 className="text-2xl font-heading font-bold text-white mb-2">{testimonial.name}</h4>
        <p className="text-white/60 text-sm">{testimonial.desc}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-charcoal-light/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-coral text-sm font-medium tracking-[0.2em] uppercase">Student Success</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6">See the Transformation.</h2>
          <p className="text-white/70 text-lg">
            Hear directly from individuals who have elevated their voices, mastered their craft, and unlocked their confidence through the Own Your Mic programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <VideoCard testimonial={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
