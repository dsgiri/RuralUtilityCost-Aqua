import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist on Aqua." 
      />
      <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        We could not find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
      </p>
      <Link 
        to="/" 
        className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors min-h-[48px] flex items-center"
      >
        Return to Home Dashboard
      </Link>
    </div>
  );
}
