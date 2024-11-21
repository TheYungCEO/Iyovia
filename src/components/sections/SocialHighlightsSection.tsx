import { Card } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Instagram, Youtube, Twitter, Tv, Users, Eye, BarChart2, Music2, Loader2 } from 'lucide-react';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { memo, useState, useCallback } from 'react';
import Spline from '@splinetool/react-spline';

// Memoize static data
const platforms = [
  {
    icon: Instagram,
    name: "Instagram",
    description: "Build a powerful personal brand",
    metrics: "1M+ followers reached"
  },
  {
    icon: Youtube,
    name: "YouTube",
    description: "Create viral video content",
    metrics: "500K+ views monthly"
  },
  {
    icon: Twitter,
    name: "Twitter",
    description: "Engage with your audience",
    metrics: "100K+ impressions"
  },
  {
    icon: Music2,
    name: "TikTok",
    description: "Master short-form content",
    metrics: "2M+ views weekly"
  }
];

const highlights = [
  {
    icon: Users,
    title: "Community Growth",
    value: "500K+",
    description: "Active followers gained"
  },
  {
    icon: Eye,
    title: "Content Reach",
    value: "5M+",
    description: "Monthly impressions"
  },
  {
    icon: BarChart2,
    title: "Engagement Rate",
    value: "8.5%",
    description: "Average engagement"
  },
  {
    icon: Tv,
    title: "Video Views",
    value: "10M+",
    description: "Monthly video views"
  }
];

const educators = [
  {
    name: "MR BANKZ",
    role: "Social Media Expert",
    followers: "500K+",
    expertise: ["Instagram Growth", "Content Strategy", "Monetization"],
    image: "https://i.ibb.co/wW8T0mJ/bankz.jpg"
  },
  {
    name: "LONDO FIRST",
    role: "Content Creator",
    followers: "300K+",
    expertise: ["TikTok Growth", "Viral Content", "Personal Branding"],
    image: "https://i.ibb.co/WVMTGtt/londo.jpg"
  },
  {
    name: "KI JOHNSON",
    role: "Social Media Strategist",
    followers: "400K+",
    expertise: ["Brand Building", "Audience Growth", "Engagement"],
    image: "https://i.ibb.co/xz187C4/ki.jpg"
  }
];

// Memoize Spline component
const SplineBackground = memo(({ onLoad }: { onLoad: () => void }) => (
  <Spline
    className="w-full h-full"
    scene="https://prod.spline.design/pdbb5S397SzEKjEX/scene.splinecode"
    onLoad={onLoad}
  />
));

// Memoize platform card component
const PlatformCard = memo(({ platform, index }: { platform: any; index: number }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card className="bg-black/40 border-white/10 p-6 backdrop-blur-sm hover:border-[#9eff00]/30 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="p-3 rounded-xl bg-[#9eff00]/10">
          <platform.icon className="h-8 w-8 text-[#9eff00]" />
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-white">{platform.name}</h3>
          <p className="text-gray-300 mb-2">{platform.description}</p>
          <p className="text-sm text-[#9eff00]">{platform.metrics}</p>
        </div>
      </div>
    </Card>
  </m.div>
));

// Memoize highlight card component
const HighlightCard = memo(({ highlight, index }: { highlight: any; index: number }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card className="bg-black/40 border-white/10 p-6 backdrop-blur-sm hover:border-[#9eff00]/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-[#9eff00]/10">
          <highlight.icon className="h-6 w-6 text-[#9eff00]" />
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-1">{highlight.title}</p>
          <h3 className="text-2xl font-bold text-white mb-1">{highlight.value}</h3>
          <p className="text-sm text-gray-300">{highlight.description}</p>
        </div>
      </div>
    </Card>
  </m.div>
));

// Memoize educator card component
const EducatorCard = memo(({ educator, index }: { educator: any; index: number }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card className="relative overflow-hidden group">
      <div className="absolute inset-0">
        <img 
          src={educator.image} 
          alt={educator.name}
          className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
      <div className="relative p-6 flex flex-col h-full justify-end">
        <p className="text-[#9eff00] text-sm font-semibold tracking-wider mb-2">{educator.role}</p>
        <h3 className="text-white text-2xl font-bold mb-2">{educator.name}</h3>
        <p className="text-gray-300 mb-4">{educator.followers} Followers</p>
        <div className="flex flex-wrap gap-2">
          {educator.expertise.map((skill: string) => (
            <span 
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-[#9eff00]/20 text-[#9eff00]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Card>
  </m.div>
));

export default function SocialHighlightsSection() {
  const ref = useScrollReveal();
  const [isLoading, setIsLoading] = useState(true);

  const handleSplineLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
        {/* Spline Background */}
        <div className="absolute inset-0 -z-10">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
              <Loader2 className="h-8 w-8 animate-spin text-[#9eff00]" />
            </div>
          )}
          <SplineBackground onLoad={handleSplineLoad} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">
              DOMINATE <span className="hub-gradient">SOCIAL MEDIA</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Build your brand, grow your following, and monetize your presence across all major platforms
            </p>
          </m.div>

          {/* Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {platforms.map((platform, index) => (
              <PlatformCard key={platform.name} platform={platform} index={index} />
            ))}
          </div>

          {/* Educators Section */}
          <div className="mb-24">
            <m.h3 
              className="section-heading text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              LEARN FROM THE <span className="hub-gradient">BEST</span>
            </m.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educators.map((educator, index) => (
                <EducatorCard key={educator.name} educator={educator} index={index} />
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <HighlightCard key={highlight.title} highlight={highlight} index={index} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}