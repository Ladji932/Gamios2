import React from 'react';
import { PlayIcon, StarIcon } from 'lucide-react';
export function GameCard({
  title,
  developer,
  image,
  players
}) {
  return <div className="relative group rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          <PlayIcon size={24} />
        </button>
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-white font-medium">{players}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{developer}</p>
          </div>
          <button className="text-yellow-500 hover:text-yellow-400">
            <StarIcon size={18} />
          </button>
        </div>
      </div>
    </div>;
}