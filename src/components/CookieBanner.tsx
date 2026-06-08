import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-slate-300 p-4 z-50 shadow-2xl border-t border-slate-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <span className="font-semibold text-white">We use cookies</span> to analyze site traffic and enhance your browsing experience. By accepting, you consent to our use of cookies according to GDPR rules.
        </div>
        <div className="flex space-x-3 shrink-0">
          <button 
            onClick={acceptCookies}
            className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg text-sm transition-colors min-h-[48px]"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
