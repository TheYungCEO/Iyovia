import { Card } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingUp, LineChart, BarChart2, ArrowUpRight, Clock, Zap, ChevronRight } from 'lucide-react';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { useState, useCallback, useRef, memo } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader2 } from 'lucide-react';

// Memoize static data
const signalTypes = [
  {
    icon: TrendingUp,
    title: "Stocks Signals",
    description: "Real-time stock market signals with precise entry and exit points",
    features: [
      "Pre-market analysis and setups",
      "Intraday trading signals",
      "Swing trading opportunities",
      "Risk management levels"
    ]
  },
  {
    icon: LineChart,
    title: "Futures Trading",
    description: "Professional futures trading signals for major markets",
    features: [
      "ES, NQ, and YM futures",
      "Commodity futures signals",
      "Multi-timeframe analysis",
      "Position sizing guidance"
    ]
  },
  {
    icon: BarChart2,
    title: "Options Flow",
    description: "Premium options flow signals and unusual activity alerts",
    features: [
      "Unusual options activity",
      "Dark pool transactions",
      "Institutional flow tracking",
      "Options chain analysis"
    ]
  }
];

const features = [
  {
    icon: Clock,
    title: "24/7 Signal Alerts",
    description: "Get real-time notifications for all trading opportunities across multiple timeframes"
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Quick-action signals with precise entry points and automated alerts"
  },
  {
    icon: ArrowUpRight,
    title: "High Accuracy",
    description: "Thoroughly analyzed setups with proven track record of success"
  }
];

// Memoize card components for better performance
const SignalCard = memo(({ type, index }: { type: any; index: number }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card className="relative bg-black/60 border-[#9eff00]/20 p-8 backdrop-blur-sm 
                   hover:border-[#9eff00]/50 transition-all duration-300 h-full
                   before:absolute before:inset-0 before:bg-gradient-to-b 
                   before:from-transparent before:via-[#9eff00]/5 before:to-transparent 
                   before:opacity-0 before:transition-opacity before:duration-300
                   hover:before:opacity-100">
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-[#9eff00]/10">
            <type.icon className="h-8 w-8 text-[#9eff00]" />
          </div>
          <h3 className="font-['Orbitron'] text-xl text-white">{type.title}</h3>
        </div>
        <p className="text-gray-300 mb-8">{type.description}</p>
        <ul className="space-y-4">
          {type.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-center gap-3 group/item">
              <ChevronRight className="h-4 w-4 text-[#9eff00] transition-transform duration-300 group-hover/item:translate-x-1" />
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  </m.div>
));

const FeatureCard = memo(({ feature, index }: { feature: any; index: number }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card className="bg-black/60 border-[#9eff00]/20 p-6 backdrop-blur-sm
                   hover:border-[#9eff00]/50 transition-all duration-300
                   hover:transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-[#9eff00]/10">
          <feature.icon className="h-6 w-6 text-[#9eff00]" />
        </div>
        <div>
          <h3 className="font-['Orbitron'] text-lg mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-300 text-sm">{feature.description}</p>
        </div>
      </div>
    </Card>
  </m.div>
));

// Memoize Spline component wrapper
const SplineScene = memo(({ onLoad, onError }: { onLoad: () => void; onError: () => void }) => (
  <Spline
    className="w-full h-full"
    scene="https://prod.spline.design/xP6DTVYQUd2Do8j6/scene.splinecode"
    onLoad={onLoad}
    onError={onError}
  />
));

export default function SignalsSection() {
  const ref = useScrollReveal();
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const hasAnimated = useRef(false);

  const onLoad = useCallback(() => {
    setIsLoading(false);
    setLoadError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setLoadError(true);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section id="signals" ref={ref} className="relative min-h-screen py-32 overflow-hidden">
        {/* Background with reduced opacity for better performance */}
        <div className="absolute inset-0">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#001a00]">
              <Loader2 className="h-8 w-8 animate-spin text-[#9eff00]" />
            </div>
          )}
          
          {loadError ? (
            <div className="absolute inset-0 bg-[#001a00]">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(158, 255, 0, 0.1) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(158, 255, 0, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
            </div>
          ) : (
            <>
              <div className="w-full h-full">
                <SplineScene onLoad={onLoad} onError={handleError} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
            </>
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <m.h2 
              className="section-heading inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              PREMIUM <span className="hub-gradient">TRADING SIGNALS</span>
            </m.h2>
          </div>

          {/* Signal Types Grid with optimized animations */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {signalTypes.map((type, index) => (
              <SignalCard key={type.title} type={type} index={index} />
            ))}
          </div>

          {/* Features Grid with optimized animations */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}