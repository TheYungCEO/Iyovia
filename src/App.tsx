import Navbar from './components/Navbar';
import Spline from '@splinetool/react-spline';
import { Loader2, ChevronDown } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import LearningPreviewSection from './components/sections/LearningPreviewSection';
import LearningDetailSection from './components/sections/LearningDetailSection';
import SignalsSection from './components/sections/SignalsSection';
import AISection from './components/sections/AISection';
import SocialHighlightsSection from './components/sections/SocialHighlightsSection';
import EducatorsSection from './components/sections/EducatorsSection';
import CredibilitySection from './components/sections/CredibilitySection';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section id="hero" className="relative h-screen">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
              <Loader2 className="h-8 w-8 animate-spin text-[#9eff00]" />
            </div>
          )}
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/9-kt2w6oIowlDCRW/scene.splinecode"
            onLoad={onLoad}
          />

          {/* Overlay Content */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-8">
            <Button 
              className="glow-button text-black text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(158,255,0,0.5)]"
              onClick={() => window.open('https://discord.gg/TmQRuBvSn4', '_blank')}
            >
              Join Our Community
            </Button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById('learning')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ChevronDown className="w-8 h-8 text-[#9eff00]" />
            </motion.div>
          </div>
        </section>

        {/* Other Sections */}
        <div className="relative">
          <LearningPreviewSection />
          <SignalsSection />
          <LearningDetailSection />
          <AISection />
          <SocialHighlightsSection />
          <EducatorsSection />
          <CredibilitySection />
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}