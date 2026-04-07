import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Heart, Send, Globe, Play, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <img 
              src="https://kalekyemumo.com/assets/images/logo_white.png" 
              alt="Kalekye Mumo" 
              className="h-10 w-auto"
            />
            <p className="text-white/60 leading-relaxed text-sm">
              Influencing perception, one story at a time. Veteran media personality, 
              corporate emcee, and confidence life coach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Play size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Media', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <Mail className="text-gold shrink-0" size={18} />
                <span>info@kalekyemumo.com</span>
              </li>
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <Heart className="text-gold shrink-0" size={18} />
                <span>Based in Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white">Newsletter</h4>
            <p className="text-white/60 text-sm italic">
              Subscribe to get my latest stories and updates.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 h-8 w-8 bg-gold rounded-lg flex items-center justify-center text-charcoal hover:bg-gold-light transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
          <p>© {currentYear} Kalekye Mumo. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-gold transition-colors">Privacy Policy</button>
            <button className="hover:text-gold transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
