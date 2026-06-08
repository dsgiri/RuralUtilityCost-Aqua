import { Link, Outlet, useLocation } from 'react-router-dom';
import { Droplet, Heart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import CookieBanner from './CookieBanner';
import AdSensePlaceholder from './AdSensePlaceholder';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Home',
      '/tools/estimate': 'Cost Estimator',
      '/tools/feed': 'Feed & FCR Calculator',
      '/tools/harvest': 'Harvest Calculator',
      '/tools/profit': 'Profit & Breakeven',
      '/tools/compare': 'System Comparison',
      '/favorites': 'Favorites',
      '/about': 'About',
      '/contact': 'Contact Us',
      '/legal': 'Legal & Disclaimer',
      '/privacy': 'Privacy Policy',
      '/terms': 'Terms of Service',
    };
    const pTitle = titles[location.pathname];
    document.title = pTitle 
      ? `${pTitle} | Aqua by Rural Utility Cost` 
      : 'Aqua - Aquaculture Economics & Planning | Rural Utility Cost';
      
    // Auto-scroll to top on route change for better mobile UX
    window.scrollTo(0, 0);

    // GTag page view tracking
    try {
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: location.pathname
        });
      }
    } catch (e) {
      console.warn('GTag error', e);
    }
  }, [location.pathname]);

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
      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between sticky top-0 z-50">
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
        <nav className="hidden lg:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors min-h-[48px] flex items-center ${
                isActive(link.path)
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center border-slate-200 lg:border-l pl-0 lg:pl-6 space-x-4">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-700 p-2 min-h-[48px] flex items-center justify-center min-w-[48px]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
             <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300"></div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="w-full mt-3 pt-3 border-t border-slate-200 lg:hidden pb-1 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium min-h-[48px] flex items-center ${
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

      <AdSensePlaceholder slot="HEADER_SLOT_ID" className="max-w-7xl mx-auto w-full px-4 md:px-6 my-4 border-none shadow-sm rounded-xl overflow-hidden" />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
        <Outlet />
      </main>

      <AdSensePlaceholder slot="FOOTER_SLOT_ID" className="max-w-7xl mx-auto w-full px-4 md:px-6 my-4 border-none shadow-sm rounded-xl overflow-hidden bg-transparent" />

      <footer className="bg-white border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 mt-auto">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <span className="font-bold text-slate-700 uppercase tracking-tighter">ruralutilitycost.com/aqua</span>
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map(link => (
              <Link key={link.path} to={link.path} className="hover:text-teal-600 min-h-[48px] flex items-center">
                {link.name}
              </Link>
            ))}
            <a href="#" className="hover:text-teal-600 min-h-[48px] flex items-center">Master Site</a>
          </nav>
        </div>
        <div className="text-center sm:text-right mt-4 sm:mt-0 text-[10px] leading-relaxed max-w-xs sm:ml-auto space-y-1">
          <p className="font-medium text-slate-600">Disclaimer: Results are estimates only.</p>
          <p>
            <Link to="/legal" className="text-teal-600 hover:text-teal-700 hover:underline inline-flex items-center min-h-[24px]">
              See full legal disclaimer 
            </Link>
          </p>
        </div>
      </footer>
      
      <CookieBanner />
    </div>
  );
}
