import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Learning', href: '#learning' },
  { label: 'Signals', href: '#signals' },
  { label: 'AI Tools', href: '#ai' },
  { label: 'Educators', href: '#educators' },
  { label: 'Results', href: '#results' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        top: document.getElementById(item.href.substring(1))?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + 100;
      const current = sections.reduce((acc, section) => {
        return scrollPosition >= section.top ? section.id : acc;
      }, sections[0].id);

      setActiveSection(current);

      // Update navbar background
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.div 
      className={`fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'pt-2' : 'pt-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`${
        isScrolled 
          ? 'backdrop-blur-md border-white/5' 
          : 'backdrop-blur-sm border-transparent'
        } rounded-full border transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </motion.div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className={`text-gray-200 hover:text-[#34A773] hover:bg-white/5 transition-all duration-300 font-['Orbitron'] tracking-wider ${
                        activeSection === item.href.substring(1) ? 'text-[#34A773]' : ''
                      }`}
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="glow-button text-black hover:shadow-[0_0_30px_rgba(158,255,0,0.3)] transition-all duration-300"
                    onClick={() => window.open('https://discord.gg/TmQRuBvSn4', '_blank')}
                  >
                    Join Now
                  </Button>
                </motion.div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="backdrop-blur-md rounded-2xl border border-white/5 px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={`w-full text-left text-gray-200 hover:text-[#34A773] hover:bg-white/5 transition-all duration-300 font-['Orbitron'] tracking-wider ${
                      activeSection === item.href.substring(1) ? 'text-[#34A773]' : ''
                    }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button 
                  className="w-full glow-button text-black hover:shadow-[0_0_30px_rgba(158,255,0,0.3)] transition-all duration-300"
                  onClick={() => window.open('https://discord.gg/TmQRuBvSn4', '_blank')}
                >
                  Join Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}