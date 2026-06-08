import { TOOLS } from '../data';
import ToolCard from '../components/ToolCard';
import { useFavorites } from '../lib/utils';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { favorites } = useFavorites();
  
  const favoriteTools = TOOLS.filter(t => favorites.includes(t.id));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 flex items-center gap-3">
        <Heart className="w-8 h-8 text-red-500 fill-red-500" />
        <h1 className="text-3xl font-bold text-slate-900">Saved Favorites</h1>
      </div>

      {favoriteTools.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900 mb-2">No favorites yet</h2>
          <p className="text-slate-500 mb-6">
            Click the heart icon on any tool card to save it here for quick access.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors"
          >
            Browse Tools
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
