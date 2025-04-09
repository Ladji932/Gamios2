import React from 'react';
import { CoinsIcon, Sparkles, Package, Sword, ShieldIcon } from 'lucide-react';
export function Shop() {
  return <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-8">Shop</h1>
      {/* Coins Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <CoinsIcon className="text-yellow-500" />
          Coins Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CoinPackage amount="1,000" price="4.99" bonus="+" />
          <CoinPackage amount="5,000" price="19.99" bonus="+500" popular />
          <CoinPackage amount="10,000" price="39.99" bonus="+1,500" />
          <CoinPackage amount="25,000" price="89.99" bonus="+5,000" />
        </div>
      </section>
      {/* Battle Pass */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Sword className="text-purple-500" />
          Battle Pass
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BattlePassCard title="Season 1 Battle Pass" price="9.99" features={['100+ Unique Rewards', 'Exclusive Character Skins', 'Special Weapons', 'Bonus XP Boost']} />
          <BattlePassCard title="Battle Pass Bundle" price="24.99" premium features={['Everything in Battle Pass', '25 Tier Skip', 'Exclusive Premium Skin', '3000 Bonus Coins']} />
        </div>
      </section>
      {/* Mystery Boxes */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Package className="text-pink-500" />
          Mystery Boxes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <MysteryBox title="Standard Box" price="2.99" image="https://images.unsplash.com/photo-1613843433065-819a04a47a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          <MysteryBox title="Premium Box" price="7.99" image="https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" popular />
          <MysteryBox title="Ultimate Box" price="15.99" image="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
        </div>
      </section>
    </div>;
}
function CoinPackage({
  amount,
  price,
  bonus,
  popular = false
}) {
  return <div className={`relative rounded-xl bg-black/40 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-1 ${popular ? 'border-pink-500' : 'border-white/10'}`}>
      {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          BEST VALUE
        </div>}
      <div className="p-4 text-center">
        <div className="text-2xl font-bold text-white mb-1">{amount}</div>
        <div className="text-yellow-500 text-sm mb-3">
          {bonus && <span className="text-green-400">+{bonus} Bonus</span>}
        </div>
        <div className="text-gray-400 mb-4">USD ${price}</div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors">
          Purchase
        </button>
      </div>
    </div>;
}
function BattlePassCard({
  title,
  price,
  features,
  premium = false
}) {
  return <div className={`rounded-xl bg-black/40 backdrop-blur-sm border p-6 transition-all duration-300 hover:-translate-y-1 ${premium ? 'border-pink-500' : 'border-white/10'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <div className="text-2xl font-bold text-white mt-1">${price}</div>
        </div>
        {premium && <Sparkles className="text-pink-500" size={24} />}
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => <li key={index} className="flex items-center gap-2 text-gray-300">
            <ShieldIcon size={16} className="text-blue-400" />
            {feature}
          </li>)}
      </ul>
      <button className={`w-full rounded-lg px-4 py-2 transition-colors ${premium ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
        Purchase Now
      </button>
    </div>;
}
function MysteryBox({
  title,
  price,
  image,
  popular = false
}) {
  return <div className={`relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-1 ${popular ? 'border-pink-500' : 'border-white/10'}`}>
      {popular && <div className="absolute top-3 right-3 z-10 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          POPULAR
        </div>}
      <div className="relative aspect-video">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <div className="text-gray-400 mb-3">${price}</div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors">
          Open Box
        </button>
      </div>
    </div>;
}