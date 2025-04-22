import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FeaturedBanner } from './components/FeaturedBanner';
import { GameShowcase } from './components/GameShowcase';
import { AllGames } from './components/AllGames';
import { Shop } from './components/Shop';
import { SplashScreen } from './components/SplashScreen';
import Register from './components/Register';
import Login from './components/Login';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <SplashScreen />
      </div>
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-pink-600 via-purple-600 to-blue-700">
          <div className="flex flex-col w-full min-h-screen bg-black/40 backdrop-blur-sm">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div className="flex flex-1 w-full">
              <Sidebar />
              <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                <Routes>
                  <Route path="/" element={
                    <>
                      <FeaturedBanner />
                      <GameShowcase />
                    </>
                  } />
                  <Route path="/all-games" element={<AllGames />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
