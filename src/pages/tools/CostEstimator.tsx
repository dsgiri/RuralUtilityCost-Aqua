import { ChangeEvent, useState } from 'react';
import { formatCurrency } from '../../lib/utils';
import { Calculator } from 'lucide-react';

export default function CostEstimator() {
  const [inputs, setInputs] = useState({
    systemType: 'pond',
    volumeSize: 1, // unit based on system
    stockingDensity: 1000,
    fingerlingCost: 0.25,
    equipmentCost: 5000,
    licensingCost: 500,
    energyCostPerMonth: 150,
    laborCostPerMonth: 500,
    cycleLengthMonths: 6,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'systemType' ? value : Number(value)
    }));
  };

  const totalFingerlingsCost = inputs.stockingDensity * inputs.fingerlingCost * inputs.volumeSize;
  const fixedStartupCost = inputs.equipmentCost + inputs.licensingCost;
  const variableOperatingCost = (inputs.energyCostPerMonth + inputs.laborCostPerMonth) * inputs.cycleLengthMonths + totalFingerlingsCost;
  const totalCost = fixedStartupCost + variableOperatingCost;

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Aqua Cost Estimator</h1>
          <p className="text-slate-600">Model your upfront capital requirements and baseline variable costs per cycle.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-100 pb-2">System Parameters</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">System Type</label>
              <select 
                name="systemType" 
                value={inputs.systemType} 
                onChange={handleInputChange}
                className="w-full rounded-lg border-slate-300 border p-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              >
                <option value="pond">Pond Culture</option>
                <option value="tank">Tank Culture</option>
                <option value="cage">Cage Culture</option>
                <option value="ras">RAS</option>
                <option value="aquaponics">Aquaponics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Units (Acres / m³)</label>
              <input type="number" name="volumeSize" value={inputs.volumeSize} onChange={handleInputChange} min="0.1" step="0.1" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Stocking Density (per unit)</label>
              <input type="number" name="stockingDensity" value={inputs.stockingDensity} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Fingerling Cost ($ each)</label>
              <input type="number" name="fingerlingCost" value={inputs.fingerlingCost} onChange={handleInputChange} min="0" step="0.01" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-100 pb-2 pt-4">Fixed Setup Costs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Equipment Setup ($)</label>
              <input type="number" name="equipmentCost" value={inputs.equipmentCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Permits / Licenses ($)</label>
              <input type="number" name="licensingCost" value={inputs.licensingCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-100 pb-2 pt-4">Operational Overheads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Energy / Mo ($)</label>
              <input type="number" name="energyCostPerMonth" value={inputs.energyCostPerMonth} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Labor / Mo ($)</label>
              <input type="number" name="laborCostPerMonth" value={inputs.laborCostPerMonth} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cycle (Months)</label>
              <input type="number" name="cycleLengthMonths" value={inputs.cycleLengthMonths} onChange={handleInputChange} min="1" className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-80">
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md sticky top-24">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
            <Calculator className="w-6 h-6 text-teal-400" />
            <h3 className="text-xl font-semibold">Cost Breakdown</h3>
          </div>
          
          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Fingerlings</span>
              <span className="font-semibold">{formatCurrency(totalFingerlingsCost)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Fixed Startup</span>
              <span className="font-semibold">{formatCurrency(fixedStartupCost)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Operating / Cycle</span>
              <span className="font-semibold">{formatCurrency(variableOperatingCost - totalFingerlingsCost)}</span>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-semibold">Estimated Total Cost</p>
            <p className="text-3xl font-bold text-teal-400">{formatCurrency(totalCost)}</p>
            <p className="text-xs text-slate-500 mt-2">Excludes feed and unexpected mortalities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
