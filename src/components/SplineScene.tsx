import { useState, useCallback, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function SplineScene() {
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

  if (loadError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full absolute inset-0 bg-gradient-to-br from-[#2D1B4F] via-[#1A1A1A] to-[#3C2A5F]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl">Unable to load 3D scene</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]">
          <Loader2 className="h-8 w-8 animate-spin text-[#B794F6]" />
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
  );
}