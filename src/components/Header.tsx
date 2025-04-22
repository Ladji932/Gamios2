import React, { useEffect, useState } from 'react';
import { SearchIcon, BellIcon, UserIcon, WalletIcon, LogOutIcon } from 'lucide-react';

export function Header({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem('tokenLogin');
    setIsLoggedIn(false);  // Met à jour l'état isLoggedIn dans App
  };

  return (
    <header className="flex items-center justify-between w-full h-16 px-4 md:px-6 bg-black/60 backdrop-blur-md border-b border-white/10 z-10">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Gamioss
        </div>
        <div className="hidden md:flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-3 py-1.5">
          <SearchIcon size={18} className="text-gray-400" />
          <input type="text" placeholder="Search games..." className="bg-transparent border-none outline-none text-sm text-white pl-2 w-48" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 bg-black/30 border border-white/10 rounded-full px-3 py-1.5">
          <WalletIcon size={16} className="text-emerald-400" />
          <span className="text-white text-sm font-medium">$0.00</span>
        </div>
        <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md px-4 py-1.5 text-sm font-medium">
          Deposit
        </button>
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <BellIcon size={20} className="text-gray-300" />
        </button>
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 transition-colors text-white rounded-md text-sm font-medium"
          >
            <LogOutIcon size={16} />
            <span>Déconnexion</span>
          </button>
        ) : (
          <button className="p-2 rounded-full bg-black/30 border border-white/10">
            <UserIcon size={18} className="text-gray-300" />
          </button>
        )}
      </div>
    </header>
  );
}
