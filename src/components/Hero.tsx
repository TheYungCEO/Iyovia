import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useState, useCallback, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { Loader2 } from 'lucide-react';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const splineRef = useRef<Application>();

  const onLoad = useCallback((splineApp: Application) => {
    splineRef.current = splineApp;
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setLoadError(true);
    setIsLoading(false);
  }, []);

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Spline Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]">
            <Loader2 className="h-8 w-8 animate-spin text-[#9eff00]" />
          </div>
        )}
        
        <div className="w-full h-full [&>canvas]:w-full [&>canvas]:h-full">
          <Spline 
            scene="https://prod.spline.design/8Dam26a2TOGLEIvN/scene.splinecode"
            onLoad={onLoad}
            onError={handleError}
          />
        </div>
      </motion.div>

      {/* Fallback Background */}
      {loadError && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a00] via-black to-black">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundSize: '50px 50px',
                backgroundImage: `linear-gradient(to right, rgba(0,255,0,0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(0,255,0,0.1) 1px, transparent 1px)`
              }}
            />
          </div>
        </div>
      )}
      
      {/* Light Effects */}
      <div className="absolute inset-0 z-[1]">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-[#9eff00]/10 via-transparent to-transparent" />
        
        {/* Center Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] rounded-full radial-pulse opacity-20" />
        
        {/* Side Lights */}
        <div className="absolute top-0 left-0 w-[50vw] h-full bg-gradient-to-r from-[#34A773]/20 to-transparent" />
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-[#9eff00]/20 to-transparent" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[1200px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative px-4 sm:px-6 md:px-8"
          >
            {/* Text Glow Effects */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#34A773]/30 via-[#9eff00]/30 to-[#34A773]/30 opacity-60" />
            
            <motion.h1 
              className="mega-text mb-2 text-glow whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              NEVER BEFORE
            </motion.h1>
            <motion.span 
              className="opportunities-text text-white block mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              SEEN OPPORTUNITIES!
            </motion.span>
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto font-light tracking-wide font-['Space_Grotesk'] drop-shadow-lg px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Learn how to create things like this site in our community of content creators and million dollar educators
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4"
          >
            <Button 
              className="glow-button text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(158,255,0,0.5)]"
              onClick={() => window.open('https://discord.gg/TmQRuBvSn4', '_blank')}
            >
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}