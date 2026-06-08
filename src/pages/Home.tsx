import { TOOLS } from '../data';
import ToolCard from '../components/ToolCard';
import { Droplet, TrendingUp, Calculator } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-64 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-700 text-white p-2 rounded">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-teal-900 uppercase tracking-wide">Economics Hub</h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Decision-support tools for fish farms, ponds, tanks, and aquaponics. Estimate startup costs, track feed efficiency, and model scenarios.
          </p>
        </div>

        <div className="bg-teal-900 rounded-xl p-5 text-white shadow-lg">
          <h4 className="text-teal-400 text-xs font-bold uppercase mb-2">Pro Tip</h4>
          <p className="text-sm leading-relaxed text-teal-50">
            Feed often accounts for 50-70% of variable operating costs. Use the FCR tool to model efficiency gains.
          </p>
        </div>
      </aside>

      <section className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Planning Tools</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-full text-xs font-semibold">
              {TOOLS.length} Tools Available
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 mt-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4 items-center flex gap-2">
            <TrendingUp className="w-5 h-5 text-teal-600" />
            Data-Driven Decisions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 text-sm mb-3">
                Whether you are running a high-intensity tank culture, managing extensive ponds, or exploring aquaponics, understanding your economic baseline is critical.
              </p>
              <p className="text-slate-600 text-sm">
                Our calculators help you estimate the impact of feed conversion ratios (FCR), variable survival rates, and volatile market prices on your bottom line.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h3 className="font-semibold text-slate-800 text-sm mb-3 uppercase tracking-wider">Key Fundamentals Evaluated</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <strong>Feed Efficiency:</strong> The largest variable cost in most systems.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <strong>Stocking Density:</strong> Balancing yield potential with carrying capacity.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <strong>Breakeven Modeling:</strong> Knowing your absolute minimum acceptable price.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
