import { Button } from '@/components/ui/button';
import { MessageSquare, Zap, Target, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AISection() {
  const ref = useScrollReveal();

  return (
    <section id="ai" className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <h2 className="section-heading text-center mb-16 scroll-reveal">
          INTRODUCING <span className="hub-gradient">IYHUB AI</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white scroll-reveal">
              Your Personal Money-Making Assistant
            </h3>
            <p className="text-gray-300 text-lg scroll-reveal">
              Powered by advanced AI technology, IyHub AI helps you maximize your earning potential across multiple income streams.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: MessageSquare, title: "24/7 Support", description: "Get instant answers to your business questions" },
                { icon: Zap, title: "Smart Automation", description: "Automate your content creation workflow" },
                { icon: Target, title: "Strategic Guidance", description: "Get personalized business strategies" },
                { icon: Sparkles, title: "AI-Powered Tools", description: "Access cutting-edge AI tools and templates" }
              ].map((feature, index) => (
                <div key={feature.title} className={`scroll-reveal`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <AIFeature {...feature} />
                </div>
              ))}
            </div>
            <Button className="glow-button text-black text-lg px-8 py-6 transition-all duration-300 scroll-reveal">
              Try IyHub AI Now
            </Button>
          </div>
          <div className="relative h-[600px] scroll-reveal">
            <img 
              src="https://i.ibb.co/jvmKN5k/Hub-3.png" 
              alt="IyHub AI Assistant"
              className="w-full h-full object-contain object-center"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AIFeature({ icon: Icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-6 w-6 text-[#9eff00]" />
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}