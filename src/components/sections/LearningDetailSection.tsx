import { Card } from '@/components/ui/card';
import { ShoppingCart, Video, BrainCircuit, CreditCard, Palette } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { memo } from 'react';

// Memoize static data
const tradingCategories = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Do you want to sell products or services online and reach customers all over the world? Do you want to take advantage of the booming e-commerce market and create a passive income stream? We'll teach you everything you need to know from finding products, dropshipping warehouses, building an online store, and promoting it."
  },
  {
    icon: Video,
    title: "Copywriting",
    description: "Copywriting is a trillion-dollar industry. Mastering the art of writing engaging, persuading, and converting copies is key to helping any brands generate more sales. We will teach you everything from email marketing, landing page copywriting, e-commerce product description, etc."
  },
  {
    icon: BrainCircuit,
    title: "Cryptocurrencies",
    description: "Cryptocurrencies are real and will be a vital part of our ever-changing world. You'll get to learn the basics about cryptos, and different ways to make money from this market such as Trading and Investing. Some subjects you will learn are Bitcoin, Ethereum, etc."
  },
  {
    icon: CreditCard,
    title: "Stock Market",
    description: "Stock is a financial asset that would give you ownership (partially) of the company it represents. We'll teach you about analyzing a stock, analyzing the market, trading platforms, and the mindset of a successful investor."
  },
  {
    icon: Video,
    title: "Freelancing",
    description: "Freelancing is a form of self-employment where you offer your skills and services to clients on a project-by-project basis, without being tied to a long-term contract or employer. It's a great way to start making a side hustle while developing your skills."
  },
  {
    icon: Palette,
    title: "Business Mindset",
    description: "The mindset of a successful entrepreneur is crucial to your success. We aim to train you on staying focused, embracing learning, being brave, adaptable, and never stopping. You can be smart, but if you don't have the right mindset, you will always fail."
  }
];

// Memoize trading card for better performance
const TradingCard = memo(({ category, index }: { category: any; index: number }) => (
  <m.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card className="bg-black/40 border-white/10 p-8 backdrop-blur-sm hover:border-[#9eff00]/30 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <category.icon className="h-12 w-12 text-[#9eff00]" />
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">{category.title}</h3>
          <p className="text-gray-300 leading-relaxed">{category.description}</p>
        </div>
      </div>
    </Card>
  </m.div>
));

export default function LearningDetailSection() {
  const ref = useScrollReveal();

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tradingCategories.map((category, index) => (
            <TradingCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}