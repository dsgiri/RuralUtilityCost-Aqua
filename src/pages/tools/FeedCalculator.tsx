import { ChangeEvent, useState } from 'react';
import { formatCurrency, formatNumber } from '../../lib/utils';
import { Calculator } from 'lucide-react';
import SEO from '../../components/SEO';
import Disclaimer from '../../components/Disclaimer';

export default function FeedCalculator() {
  const [inputs, setInputs] = useState({
    totalAnimalsStocked: 5000,
    survivalRate: 85, // percentage
    targetHarvestWeightKg: 0.5,
    initialWeightKg: 0.01,
    fcr: 1.5,
    feedCostPerTon: 1200,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: Number(value) }));
  };

  const finalAnimals = inputs.totalAnimalsStocked * (inputs.survivalRate / 100);
  const weightGainPerAnimal = Math.max(0, inputs.targetHarvestWeightKg - inputs.initialWeightKg);
  const totalBiomassGainKg = finalAnimals * weightGainPerAnimal;
  const totalFeedRequiredKg = totalBiomassGainKg * inputs.fcr;
  const totalFeedCost = (totalFeedRequiredKg / 1000) * inputs.feedCostPerTon;

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      <SEO 
        title="Feed & FCR Calculator" 
        description="Model feed conversion ratio, feed consumption, and total feed cost for an aquaculture grow-out cycle."
        keywords="aquaculture feed calculator, FCR calculator, feed conversion ratio, fish feed cost"
      />
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Feed & FCR Calculator</h1>
          <p className="text-slate-600">Model feed requirements based on target growth, survival, and conversion efficiency.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Animals Stocked</label>
              <input type="number" name="totalAnimalsStocked" value={inputs.totalAnimalsStocked} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Survival (%)</label>
              <input type="number" name="survivalRate" value={inputs.survivalRate} onChange={handleInputChange} min="0" max="100" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Initial Weight (kg/animal)</label>
              <input type="number" name="initialWeightKg" value={inputs.initialWeightKg} onChange={handleInputChange} min="0" step="0.01" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Target Harvest Wt (kg/animal)</label>
              <input type="number" name="targetHarvestWeightKg" value={inputs.targetHarvestWeightKg} onChange={handleInputChange} min="0" step="0.01" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Feed Conversion Ratio (FCR)</label>
              <input type="number" name="fcr" value={inputs.fcr} onChange={handleInputChange} min="0.1" step="0.1" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Feed Cost per Ton ($)</label>
              <input type="number" name="feedCostPerTon" value={inputs.feedCostPerTon} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-80">
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md sticky top-24">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
            <Calculator className="w-6 h-6 text-teal-400" />
            <h3 className="text-xl font-semibold">Feed Breakdown</h3>
          </div>
          
          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Biomass Gain</span>
              <span className="font-semibold">{formatNumber(totalBiomassGainKg)} kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Feed Required</span>
              <span className="font-semibold">{formatNumber(totalFeedRequiredKg)} kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Feed Cost / kg Gain</span>
              <span className="font-semibold">{formatCurrency(inputs.feedCostPerTon / 1000 * inputs.fcr)}</span>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-semibold">Total Feed Cycle Cost</p>
            <p className="text-3xl font-bold text-teal-400">{formatCurrency(totalFeedCost)}</p>
          </div>
          
          <Disclaimer variant="dark" />
        </div>
      </div>
    </div>
  );
}
