import React from 'react';
import { HomeIcon, ShoppingCartIcon, TrophyIcon, GamepadIcon, SwordsIcon, DicesIcon } from 'lucide-react';
export function Sidebar({
  currentView,
  onNavigate
}) {
  return <aside className="hidden sm:flex flex-col w-16 md:w-56 bg-black/50 backdrop-blur-sm border-r border-white/10">
      <div className="flex flex-col gap-1 p-2">
        <SidebarItem icon={<HomeIcon size={20} />} label="Home" active={currentView === 'home'} onClick={() => onNavigate('home')} />
        <SidebarItem icon={<ShoppingCartIcon size={20} />} label="Shop" active={currentView === 'shop'} onClick={() => onNavigate('shop')} />
        <SidebarItem icon={<TrophyIcon size={20} />} label="Leaderboard" onClick={() => onNavigate('leaderboard')} />
        <SidebarItem icon={<GamepadIcon size={20} />} label="All Games" active={currentView === 'allGames'} onClick={() => onNavigate('allGames')} />
        <div className="mt-4 mb-2 px-3 text-xs font-medium text-gray-500 uppercase md:block hidden">
          Categories
        </div>
        <SidebarItem icon={<DicesIcon size={20} />} label="Casino" onClick={() => onNavigate('casino')} />
        <SidebarItem icon={<SwordsIcon size={20} />} label="Arcade" onClick={() => onNavigate('arcade')} />
      </div>
    </aside>;
}
function SidebarItem({
  icon,
  label,
  active = false,
  onClick
}) {
  return <button onClick={onClick} className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-sm font-medium truncate hidden md:block">
        {label}
      </span>
    </button>;
}