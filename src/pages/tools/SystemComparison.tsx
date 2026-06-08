import { useState } from 'react';
import { formatCurrency, formatNumber } from '../../lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SEO from '../../components/SEO';

interface SystemScenario {
  name: string;
  setupCost: number;
  feedCost: number;
  laborEnergy: number;
  predictedYieldKg: number;
  expectedPrice: number;
}

export default function SystemComparison() {
  const [scenarios, setScenarios] = useState<SystemScenario[]>([
    { name: 'Extensive Pond', setupCost: 8000, feedCost: 5000, laborEnergy: 3000, predictedYieldKg: 4000, expectedPrice: 5.50 },
    { name: 'Intensive RAS', setupCost: 45000, feedCost: 12000, laborEnergy: 15000, predictedYieldKg: 15000, expectedPrice: 6.00 },
  ]);

  const updateScenario = (index: number, field: keyof SystemScenario, value: number | string) => {
    const newScenarios = [...scenarios];
    newScenarios[index] = { ...newScenarios[index], [field]: typeof value === 'string' ? value : Number(value) };
    setScenarios(newScenarios);
  };

  const chartData = scenarios.map(s => {
    const totalCost = s.setupCost + s.feedCost + s.laborEnergy;
    const revenue = s.predictedYieldKg * s.expectedPrice;
    return {
      name: s.name,
      'Total Cost': totalCost,
      Revenue: revenue,
      Profit: revenue - totalCost,
    };
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <SEO 
        title="Aquaculture System Comparison" 
        description="Compare different aquaculture systems, scenarios, or production strategies to find the most profitable configuration."
        keywords="RAS vs pond culture comparison, aquaculture system modeling, compare fish farming scenarios, intensive vs extensive aquaculture"
      />
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">System Comparison</h1>
        <p className="text-slate-600">Model economics across different production systems to evaluate comparative advantages.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {scenarios.map((scenario, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <input 
              type="text" 
              value={scenario.name}
              onChange={(e) => updateScenario(i, 'name', e.target.value)}
              className="text-xl font-bold text-slate-900 mb-4 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-teal-500 outline-none w-full pb-1"
            />
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Setup Cost</label>
                  <input type="number" value={scenario.setupCost} onChange={(e) => updateScenario(i, 'setupCost', e.target.value)} className="w-full rounded-lg border-slate-300 border p-2 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Feed Cost</label>
                  <input type="number" value={scenario.feedCost} onChange={(e) => updateScenario(i, 'feedCost', e.target.value)} className="w-full rounded-lg border-slate-300 border p-2 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Labor & Energy</label>
                  <input type="number" value={scenario.laborEnergy} onChange={(e) => updateScenario(i, 'laborEnergy', e.target.value)} className="w-full rounded-lg border-slate-300 border p-2 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Yield (kg)</label>
                  <input type="number" value={scenario.predictedYieldKg} onChange={(e) => updateScenario(i, 'predictedYieldKg', e.target.value)} className="w-full rounded-lg border-slate-300 border p-2 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Expected Price</label>
                  <input type="number" value={scenario.expectedPrice} onChange={(e) => updateScenario(i, 'expectedPrice', e.target.value)} step="0.1" className="w-full rounded-lg border-slate-300 border p-2 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
              <span className="text-slate-500">Breakeven: </span>
              <span className="font-semibold text-slate-900">
                {formatCurrency((scenario.setupCost + scenario.feedCost + scenario.laborEnergy) / (scenario.predictedYieldKg || 1))} / kg
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-96">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Financial Projections Comparison</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(val) => '$' + (val / 1000) + 'k'} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value: number) => formatCurrency(value)} />
            <Legend />
            <Bar dataKey="Total Cost" fill="#94a3b8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Revenue" fill="#38bdf8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Profit" fill="#34d399" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
