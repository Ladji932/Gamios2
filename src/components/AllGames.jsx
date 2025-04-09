import React, { useState } from 'react';
import { GameCard } from './GameCard';
import { SearchIcon, ArrowLeft, X } from 'lucide-react';

export function AllGames() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGameUrl, setSelectedGameUrl] = useState(null);
  
  const allGames = [{
    id: 1,
    title: 'Puissance4',
    developer: 'Stadios',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    players: '2.4k',
    url: 'https://power-four.vercel.app/' 
  }, {
    id: 2,
    title: 'Snake',
    developer: 'Stadios',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    players: '1.8k',
    url: 'https://example.com/cosmic-racers'
  },{
    id: 3,
    title: 'Pacman',
    developer: 'Stadios',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    players: '1.8k',
    url: 'https://pacman-two-zeta.vercel.app/'
  },
  {
    id: 4,
    title: 'Ludo',
    developer: 'Stadios',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    players: '1.8k',
    url: 'https://game-ludo-pearl.vercel.app/'
  }
];

  const filteredGames = allGames.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    game.developer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGameClick = (url) => {
    setSelectedGameUrl(url);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {!selectedGameUrl ? (
        <>
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-4">All Games</h1>
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-2 max-w-md">
              <SearchIcon size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search games or developers..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGames.map(game => (
              <div key={game.id} onClick={() => handleGameClick(game.url)}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
          {filteredGames.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              No games found matching your search.
            </div>
          )}
        </>
      ) : (
        <div className="fixed inset-0 bg-black flex flex-col">
          <div className="fixed top-20 left-4 right-4 flex justify-between items-center z-10">
            <button
              onClick={() => setSelectedGameUrl(null)}
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors bg-black/80 px-6 py-3 rounded-lg"
            >
              <ArrowLeft size={32} />
            </button>
          </div>
          <div className="w-full h-screen">
            <iframe
              src={selectedGameUrl}
              title="Game"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  );
}