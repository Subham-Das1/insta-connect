import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Bell, 
  MessageSquare, 
  User,
  Settings,
  LogOut
} from 'lucide-react';

export function Layout() {
  const [notifications] = useState(3);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation - Mobile */}
      <nav className="md:hidden fixed top-0 w-full bg-white border-b z-50">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl font-bold"><i>i-connect</i></h1>
          <div className="flex items-center space-x-4">
            <Link to="/notifications" className="relative">
              <Bell className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Link>
            <Link to="/messages">
              <MessageSquare className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Side Navigation - Desktop */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white border-r flex-col p-4">
        <h1 className="text-2xl font-bold mb-8 px-4"><i>i-connect</i></h1>
        <div className="flex-1 flex flex-col space-y-2">
          <NavLink to="" icon={<Home />} active={isActive('/')}>Home</NavLink>
          <NavLink to="search" icon={<Search />} active={isActive('/app/search')}>Search</NavLink>
          <NavLink to="notifications" icon={<Bell />} active={isActive('/app/Notifications')} badge={notifications}>
            Notifications
          </NavLink>
          <NavLink to="messages" icon={<MessageSquare />} active={isActive('/app/messages')}>Messages</NavLink>
          <NavLink to="profile" icon={<User />} active={isActive('/app/profile')}>Profile</NavLink>
          <NavLink to="settings" icon={<Settings />} active={isActive('/app/settings')}>Settings</NavLink>
        </div>
        <div className="border-t pt-4">
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t">
        <div className="flex items-center justify-around py-2">
          <NavLink to="" icon={<Home />} active={isActive('/')} />
          <NavLink to="search" icon={<Search />} active={isActive('/app/search')} />
          <NavLink to="notifications" icon={<Bell />} active={isActive('/app/Notifications')} />
          <NavLink to="messages" icon={<MessageSquare />} active={isActive('/app/messages')} />
          <NavLink to="profile" icon={<User />} active={isActive('/app/profile')} />
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
        active 
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      {children && <span className="hidden md:inline">{children}</span>}
      {badge && badge > 0 && (
        <span className="absolute top-0 right-1 md:right-4 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {badge}
        </span>
      )}
    </Link>
  );
}
