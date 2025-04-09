import React from 'react';
export function SplashScreen() {
  return <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-blue-700 z-50">
      <div className="flex flex-col items-center">
        {/* Emplacement du logo */}
        <div className="w-32 h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse">
          {/* Remplacez le texte ci-dessous par votre logo */}
          <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Gamioss
          </span>
        </div>
        {/* Indicateur de chargement */}
        <div className="mt-8 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{
          animationDelay: '0ms'
        }}></div>
          <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{
          animationDelay: '150ms'
        }}></div>
          <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{
          animationDelay: '300ms'
        }}></div>
        </div>
      </div>
    </div>;
}