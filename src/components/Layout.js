import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  Search,
//   PlusSquare,
//   Heart,
  User,
  Bell,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

export function Layout() {
  const [notifications] = useState(3);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation - Mobile */}
      <nav className="md:hidden fixed top-0 w-full bg-white border-b z-50">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl font-bold">Social</h1>
          <div className="flex items-center space-x-4">
            <NavLink to="/notifications" icon={<Bell size={24} />} badge={notifications} />
            <NavLink to="/messages" icon={<MessageSquare size={24} />} />
          </div>
        </div>
      </nav>

      {/* Side Navigation - Desktop */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white border-r flex-col p-4">
        <h1 className="text-2xl font-bold mb-8 px-4">Social</h1>
        <div className="flex-1 flex flex-col space-y-2">
          <NavLink to="/" icon={<Home size={24} />} active={isActive("/")}>Home</NavLink>
          <NavLink to="/search" icon={<Search size={24} />} active={isActive("/search")}>Search</NavLink>
          <NavLink to="/notifications" icon={<Bell size={24} />} active={isActive("/notifications")} badge={notifications}>Notifications</NavLink>
          <NavLink to="/messages" icon={<MessageSquare size={24} />} active={isActive("/messages")}>Messages</NavLink>
          <NavLink to="/profile" icon={<User size={24} />} active={isActive("/profile")}>Profile</NavLink>
          <NavLink to="/settings" icon={<Settings size={24} />} active={isActive("/settings")}>Settings</NavLink>
        </div>
        <div className="border-t pt-4">
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={24} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t">
        <div className="flex items-center justify-around py-2">
          <NavLink to="/" icon={<Home size={24} />} active={isActive("/")} />
          <NavLink to="/search" icon={<Search size={24} />} active={isActive("/search")} />
          <NavLink to="/notifications" icon={<Bell size={24} />} active={isActive("/notifications")} badge={notifications} />
          <NavLink to="/messages" icon={<MessageSquare size={24} />} active={isActive("/messages")} />
          <NavLink to="/profile" icon={<User size={24} />} active={isActive("/profile")} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64 pt-14 md:pt-0 pb-16 md:pb-0">
        <div className="max-w-2xl mx-auto p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function NavLink({ to, icon, children, badge, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors relative ${
        active ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {children && <span className="hidden md:inline">{children}</span>}
      {badge > 0 && (
        <span className="absolute top-0 right-1 md:right-4 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {badge}
        </span>
      )}
    </Link>
  );
}
