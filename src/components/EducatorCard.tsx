import { Instagram } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

interface EducatorCardProps {
  name: string;
  specialty: string;
  instagram: string;
  instagramUrl: string;
  image: string;
}

export default function EducatorCard({ name, specialty, instagram, instagramUrl, image }: EducatorCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="relative group overflow-hidden rounded-2xl border-0 h-[500px] cursor-pointer">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a472a] to-[#2d8c4e] z-0">
            <div className="absolute inset-0 opacity-30 bg-[url('/grid-pattern.png')] bg-repeat z-0" />
          </div>
          
          {/* Logo */}
          <div className="absolute top-4 left-4 z-20">
            <Logo />
          </div>
          
          {/* Image with Overlay */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                style={{
                  imageRendering: 'crisp-edges',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70" />
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
            <p className="text-[#9eff00] text-sm font-semibold tracking-[0.2em] mb-2">EDUCATOR</p>
            <h3 className="text-white text-4xl font-bold mb-2">{name}</h3>
            <p className="text-yellow-400 text-sm uppercase tracking-[0.2em] mb-4">{specialty}</p>
            <a 
              href={instagramUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#9eff00] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="tracking-wider">@{instagram}</span>
            </a>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-black/95 border-white/10">
        <DialogTitle className="sr-only">
          {name}'s Profile
        </DialogTitle>
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover object-center"
              style={{
                imageRendering: 'crisp-edges',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 lightning-text">{name}</h2>
            <p className="text-yellow-400 text-lg mb-6">{specialty}</p>
            <p className="text-gray-300 mb-6">
              Expert educator specializing in {specialty.toLowerCase()}. Join our community to learn directly from industry leaders.
            </p>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#9eff00] hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="text-lg">@{instagram}</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="30" height="34" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M39.0766 11.2505V33.7514L19.5383 45L0 33.7514V11.2505L19.5383 0L39.0766 11.2505Z" 
          fill="url(#paint0_linear_card)"
        />
        <defs>
          <linearGradient 
            id="paint0_linear_card" 
            x1="4.55056" 
            y1="43.0545" 
            x2="33.1148" 
            y2="3.88406" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34A773"/>
            <stop offset="1" stopColor="#B0E842"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="font-bold text-lg">
        <span className="text-[#9eff00]">Hub</span>
        <span className="text-yellow-400 font-cursive italic">.</span>
      </span>
    </div>
  );
}