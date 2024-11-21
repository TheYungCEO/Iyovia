import { Card } from '@/components/ui/card';
import { ShoppingCart, CreditCard, Home, BrainCircuit, Video, Palette } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { memo } from 'react';

// Memoize static data
const categories = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Learn dropshipping, digital products, and building successful online stores"
  },
  {
    icon: CreditCard,
    title: "Credit & Loans",
    description: "Master credit repair, loan strategies, and financial optimization"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Explore Airbnb hosting, property management, and rental strategies"
  },
  {
    icon: BrainCircuit,
    title: "AI Tools",
    description: "Harness ChatGPT, Midjourney, and other AI tools for business growth"
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "Create engaging content across multiple social media platforms"
  },
  {
    icon: Palette,
    title: "Digital Design",
    description: "Learn graphic design, video editing, and digital asset creation"
  }
];

// Memoize category card for better performance
const CategoryCard = memo(({ category, index }: { category: any; index: number }) => (
  <m.div 
    className="scroll-reveal"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card className="bg-black/40 border-white/10 p-6 backdrop-blur-sm hover:border-[#9eff00]/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <category.icon className="h-8 w-8 text-[#9eff00]" />
        <div>
          <h3 className="font-bold text-xl mb-2 text-white">{category.title}</h3>
          <p className="text-gray-300">{category.description}</p>
        </div>
      </div>
    </Card>
  </m.div>
));

export default function LearningPreviewSection() {
  const ref = useScrollReveal();

  return (
    <LazyMotion features={domAnimation}>
      <section id="learning" ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <m.h2 
          className="section-heading text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          WHAT YOU'LL LEARN IN THE <span className="hub-gradient">IYOVIA HUB</span>
        </m.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}