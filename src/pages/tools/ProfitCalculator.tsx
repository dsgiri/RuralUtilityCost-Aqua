import { ChangeEvent, useState } from 'react';
import { formatCurrency, formatNumber } from '../../lib/utils';
import { Calculator } from 'lucide-react';

export default function ProfitCalculator() {
  const [inputs, setInputs] = useState({
    totalHarvestKg: 4000,
    marketPricePerKg: 6.50,
    totalVariableCost: 15000,
    totalFixedCost: 5000,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: Number(value) }));
  };

  const totalRevenue = inputs.totalHarvestKg * inputs.marketPricePerKg;
  const totalCost = inputs.totalVariableCost + inputs.totalFixedCost;
  const grossProfit = totalRevenue - totalCost;
  const profitMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0;
  
  const breakevenCostPerKg = inputs.totalHarvestKg > 0 ? totalCost / inputs.totalHarvestKg : 0;
  const breakevenPrice = totalCost / (inputs.totalHarvestKg || 1);

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Profit & Breakeven</h1>
          <p className="text-slate-600">Analyze overall cycle profitability, margins, and your critical breakeven points.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Harvest Yield (kg)</label>
              <input type="number" name="totalHarvestKg" value={inputs.totalHarvestKg} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Market Price ($/kg)</label>
              <input type="number" name="marketPricePerKg" value={inputs.marketPricePerKg} onChange={handleInputChange} min="0" step="0.1" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Variable Cost ($)</label>
              <input type="number" name="totalVariableCost" value={inputs.totalVariableCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Fixed/Overhead ($)</label>
              <input type="number" name="totalFixedCost" value={inputs.totalFixedCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h3 className="font-semibold text-emerald-900 mb-4 whitespace-nowrap">Breakeven Analysis</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Breakeven Cost / kg</p>
              <p className="text-2xl font-bold text-slate-900">{formatCurrency(breakevenCostPerKg)}</p>
              <p className="text-xs text-slate-500 mt-1">Cost to produce each kg.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Minimum Sale Price</p>
              <p className="text-2xl font-bold text-slate-900">{formatCurrency(breakevenPrice)}</p>
              <p className="text-xs text-slate-500 mt-1">Price to avoid financial loss.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-80">
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md sticky top-24">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
            <Calculator className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-semibold">Financial Summary</h3>
          </div>
          
          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Revenue</span>
              <span className="font-semibold text-emerald-400">{formatCurrency(totalRevenue)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Cost</span>
              <span className="font-semibold text-red-400">-{formatCurrency(totalCost)}</span>
            </div>
            <div className="flex justify-between items-center font-medium pt-2 border-t border-slate-700">
              <span className="text-slate-300">Profit Margin</span>
              <span className={profitMargin >= 0 ? "text-emerald-400" : "text-red-400"}>
                {formatNumber(profitMargin)}%
              </span>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-semibold">Net Profit</p>
            <p className={`text-3xl font-bold ${grossProfit >= 0 ? 'text-emerald-400' : 'text-red-500'}`}>
              {formatCurrency(grossProfit)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
