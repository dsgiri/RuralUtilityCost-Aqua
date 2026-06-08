import { Link } from 'react-router-dom';
import { Heart, ChevronRight } from 'lucide-react';
import { Tool } from '../types';
import { useFavorites } from '../lib/utils';

interface ToolCardProps {
  tool: Tool;
  key?: string | number;
}

function toCategoryColor(cat: string) {
  const normalized = cat.toLowerCase();
  if (normalized.includes('startup') || normalized.includes('cost')) return 'bg-blue-50 text-blue-600';
  if (normalized.includes('efficiency') || normalized.includes('feed')) return 'bg-emerald-50 text-emerald-600';
  if (normalized.includes('economics') || normalized.includes('profit') || normalized.includes('harvest')) return 'bg-amber-50 text-amber-600';
  if (normalized.includes('comparison') || normalized.includes('compare')) return 'bg-indigo-50 text-indigo-600';
  return 'bg-slate-50 text-slate-600';
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(tool.id);
  const colorClass = toCategoryColor(tool.category);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start">
          <span className={`${colorClass} px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide`}>
            {tool.category}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(tool.id);
            }}
            className="text-slate-300 hover:text-red-400 transition-colors focus:outline-none"
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-800">{tool.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{tool.description}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          Outcome: <span className="font-semibold text-slate-700 text-sm whitespace-nowrap">{tool.primaryOutcome}</span>
        </div>
        <Link 
          to={tool.path}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 text-center w-full sm:w-auto"
        >
          Launch Tool
        </Link>
      </div>
    </div>
  );
}
