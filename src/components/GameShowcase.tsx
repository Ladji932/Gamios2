import React from 'react';
import { GameCard } from './GameCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export function GameShowcase() {
  const games = [{
    id: 1,
    title: 'Neon Heist',
    developer: 'Quantum Studios',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    players: '2.4k'
  }, {
    id: 2,
    title: 'Cosmic Racers',
    developer: 'Velocity Games',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    players: '1.8k'
  }, {
    id: 3,
    title: 'Dragon Quest',
    developer: 'Epic Adventures',
    image: 'https://images.unsplash.com/photo-1616031037011-83935f5f552b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    players: '3.2k'
  }];
  return <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Popular Games</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronLeftIcon size={20} className="text-white" />
          </button>
          <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronRightIcon size={20} className="text-white" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map(game => <GameCard key={game.id} {...game} />)}
      </div>
    </div>;
}