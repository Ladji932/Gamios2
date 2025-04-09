import React from 'react';
import { PlayIcon } from 'lucide-react';
export function FeaturedBanner() {
  return <div className="w-full rounded-xl overflow-hidden mb-8 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10"></div>
      <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Featured Game" className="w-full h-64 object-cover object-center" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="inline-block bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
          NEW RELEASE
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
          Cyber Nexus 2077
        </h2>
        <p className="text-gray-300 mb-4 max-w-lg">
          Experience the future of gaming with this immersive open-world
          adventure
        </p>
        <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all transform group-hover:scale-105">
          <PlayIcon size={18} />
          Play Now
        </button>
      </div>
    </div>;
}