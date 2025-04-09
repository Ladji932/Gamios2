import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FeaturedBanner } from './components/FeaturedBanner';
import { GameShowcase } from './components/GameShowcase';
import { AllGames } from './components/AllGames';
import { Shop } from './components/Shop';
import { SplashScreen } from './components/SplashScreen';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <SplashScreen />
      </div>
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-pink-600 via-purple-600 to-blue-700">
          <div className="flex flex-col w-full min-h-screen bg-black/40 backdrop-blur-sm">
            <Header />
            <div className="flex flex-1 w-full">
              <Sidebar currentView={currentView} onNavigate={setCurrentView} />
              <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                {currentView === 'home' ? (
                  <>
                    <FeaturedBanner />
                    <GameShowcase />
                  </>
                ) : currentView === 'allGames' ? (
                  <AllGames />
                ) : currentView === 'shop' ? (
                  <Shop />
                ) : null}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
