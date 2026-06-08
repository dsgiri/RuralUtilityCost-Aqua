import { Link, Outlet, useLocation } from 'react-router-dom';
import { Droplet, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Estimate', path: '/tools/estimate' },
    { name: 'Feed', path: '/tools/feed' },
    { name: 'Harvest', path: '/tools/harvest' },
    { name: 'Profit', path: '/tools/profit' },
    { name: 'Compare', path: '/tools/compare' },
    { name: 'Favorites', path: '/favorites' },
  ];

  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Legal', path: '/legal' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-teal-700 text-white p-1.5 rounded transition-colors group-hover:bg-teal-800">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-tight">Rural Utility Cost</p>
              <h1 className="text-xl font-extrabold text-teal-900 leading-tight tracking-tight">Aqua</h1>
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isActive(link.path)
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center border-slate-200 md:border-l pl-0 md:pl-6 space-x-4">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-700 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
             <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300"></div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="w-full mt-3 pt-3 border-t border-slate-200 md:hidden pb-1 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 mt-auto">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <span className="font-bold text-slate-700 uppercase tracking-tighter">ruralutilitycost.com/aqua</span>
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map(link => (
              <Link key={link.path} to={link.path} className="hover:text-teal-600">
                {link.name}
              </Link>
            ))}
            <a href="#" className="hover:text-teal-600">Master Site</a>
          </nav>
        </div>
        <div className="text-center sm:text-right italic mt-4 sm:mt-0">
          Estimates only. Not financial or biological advice.
        </div>
      </footer>
    </div>
  );
}
