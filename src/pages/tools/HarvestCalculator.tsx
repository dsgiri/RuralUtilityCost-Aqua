import { ChangeEvent, useState } from 'react';
import { formatNumber } from '../../lib/utils';
import { Calculator } from 'lucide-react';
import SEO from '../../components/SEO';
import Disclaimer from '../../components/Disclaimer';

export default function HarvestCalculator() {
  const [inputs, setInputs] = useState({
    areaVolume: 10, // units
    stockingDensity: 500, // per unit
    survivalRate: 80, // %
    averageHarvestWeightKg: 0.8,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: Number(value) }));
  };

  const totalStocked = inputs.areaVolume * inputs.stockingDensity;
  const totalSurvivors = totalStocked * (inputs.survivalRate / 100);
  const totalHarvestYieldKg = totalSurvivors * inputs.averageHarvestWeightKg;

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      <SEO 
        title="Harvest & Biomass Estimator" 
        description="Estimate harvesting outcomes including survival rates, net harvest weight, and total facility biomass."
        keywords="aquaculture harvest calculator, fish biomass estimator, stocking density to harvest, fish survival rate"
      />
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Harvest & Survival</h1>
          <p className="text-slate-600">Estimate total harvest output based on stocking densities and anticipated mortality.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Production Area/Volume</label>
              <input type="number" name="areaVolume" value={inputs.areaVolume} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Stocking Density / Unit</label>
              <input type="number" name="stockingDensity" value={inputs.stockingDensity} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Survival Rate (%)</label>
              <input type="number" name="survivalRate" value={inputs.survivalRate} onChange={handleInputChange} min="0" max="100" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Avg. Harvest Wt. (kg)</label>
              <input type="number" name="averageHarvestWeightKg" value={inputs.averageHarvestWeightKg} onChange={handleInputChange} min="0" step="0.1" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-80">
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md sticky top-24">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
            <Calculator className="w-6 h-6 text-teal-400" />
            <h3 className="text-xl font-semibold">Yield Breakdown</h3>
          </div>
          
          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Stocked</span>
              <span className="font-semibold">{formatNumber(totalStocked)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Estimated Survivors</span>
              <span className="font-semibold">{formatNumber(totalSurvivors)}</span>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-semibold">Total Harvest Yield</p>
            <p className="text-3xl font-bold text-teal-400">{formatNumber(totalHarvestYieldKg)} kg</p>
            <p className="text-xs text-slate-500 mt-2">({formatNumber(totalHarvestYieldKg * 2.20462)} lbs)</p>
          </div>
          
          <Disclaimer variant="dark" />
        </div>
      </div>
    </div>
  );
}
