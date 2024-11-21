import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Eye, BarChart, Image, DollarSign, LineChart, PieChart, ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

const socialStats = [
  {
    icon: Users,
    label: "Active Followers",
    value: "3M+",
    description: "Combined across platforms"
  },
  {
    icon: Eye,
    label: "Monthly Reach",
    value: "50M+",
    description: "Total monthly impressions"
  },
  {
    icon: BarChart,
    label: "Engagement",
    value: "100M+",
    description: "Monthly video views"
  },
  {
    icon: TrendingUp,
    label: "Growth Rate",
    value: "227%",
    description: "Average monthly growth"
  }
];

const tradingStats = [
  {
    icon: DollarSign,
    label: "Trading Volume",
    value: "$500M+",
    description: "Monthly trading volume"
  },
  {
    icon: LineChart,
    label: "Success Rate",
    value: "89%",
    description: "Profitable trades"
  },
  {
    icon: PieChart,
    label: "Portfolio Growth",
    value: "312%",
    description: "Average yearly return"
  },
  {
    icon: ArrowUpRight,
    label: "Student Success",
    value: "93%",
    description: "Student satisfaction rate"
  }
];

const gallery = [
  {
    url: "https://i.ibb.co/MRb2P74/stats1.jpg",
    title: "Trading Performance"
  },
  {
    url: "https://i.ibb.co/MP7X8qs/stats2.jpg",
    title: "Account Growth"
  },
  {
    url: "https://i.ibb.co/zm3G4hR/stats3.jpg",
    title: "Trading Results"
  },
  {
    url: "https://i.ibb.co/J5Dqcwb/stats4.jpg",
    title: "Market Analysis"
  },
  {
    url: "https://i.ibb.co/NpDY6xT/stats5.jpg",
    title: "Portfolio Performance"
  }
];

export default function CredibilitySection() {
  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [tradingRef, tradingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="results" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <h2 className="section-heading text-center mb-16">
        OUR TRACK RECORD
      </h2>

      {/* Social Media Stats */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          SOCIAL MEDIA IMPACT
        </h3>
        <div ref={socialRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={socialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-white/10 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <stat.icon className="h-8 w-8 text-[#9eff00]" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-300">{stat.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trading Stats */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          TRADING PERFORMANCE
        </h3>
        <div ref={tradingRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tradingStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={tradingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-white/10 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <stat.icon className="h-8 w-8 text-[#9eff00]" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-300">{stat.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Results Gallery */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          RECENT WINS GALLERY
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {gallery.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Image className="w-8 h-8 text-white" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black/95 border-white/10">
                <DialogTitle className="sr-only">
                  {item.title}
                </DialogTitle>
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}