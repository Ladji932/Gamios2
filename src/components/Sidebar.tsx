import React from 'react';
import {
  HomeIcon,
  ShoppingCartIcon,
  TrophyIcon,
  GamepadIcon,
  SwordsIcon,
  DicesIcon
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="hidden sm:flex flex-col w-16 md:w-56 bg-black/50 backdrop-blur-sm border-r border-white/10">
      <div className="flex flex-col gap-1 p-2">
        <SidebarItem
          to="/"
          icon={<HomeIcon size={20} />}
          label="Home"
          active={currentPath === '/'}
        />
        <SidebarItem
          to="/shop"
          icon={<ShoppingCartIcon size={20} />}
          label="Shop"
          active={currentPath === '/shop'}
        />
        <SidebarItem
          to="/leaderboard"
          icon={<TrophyIcon size={20} />}
          label="Leaderboard"
          active={currentPath === '/leaderboard'}
        />
        <SidebarItem
          to="/all-games"
          icon={<GamepadIcon size={20} />}
          label="All Games"
          active={currentPath === '/all-games'}
        />
        <div className="mt-4 mb-2 px-3 text-xs font-medium text-gray-500 uppercase md:block hidden">
          Categories
        </div>
        <SidebarItem
          to="/casino"
          icon={<DicesIcon size={20} />}
          label="Casino"
          active={currentPath === '/casino'}
        />
        <SidebarItem
          to="/arcade"
          icon={<SwordsIcon size={20} />}
          label="Arcade"
          active={currentPath === '/arcade'}
        />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active = false, to }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 p-2 rounded-lg transition-colors
      ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-sm font-medium truncate hidden md:block">
        {label}
      </span>
    </Link>
  );
}
