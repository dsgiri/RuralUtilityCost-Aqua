import SEO from '../components/SEO';
import { defaultDisclaimerText } from '../components/Disclaimer';

export default function Legal() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <SEO 
        title="Legal & Disclaimer" 
        description="Legal information and disclaimers for the Aqua estimators and tools." 
      />
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Legal & Disclaimer</h1>
        
        <div className="prose prose-slate max-w-none text-slate-700">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mt-0 mb-3">Universal Tool Disclaimer</h2>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              {defaultDisclaimerText}
            </p>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">Estimates Only</h2>
          <p className="mb-4">
            All data, calculations, and projections provided by the Aqua estimators are <strong>estimates only</strong>. They are intended for educational, planning, and decision-support purposes and do not constitute a guarantee of future performance.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">Variables and Risks</h2>
          <p className="mb-4">
            Actual outcomes in aquaculture are highly dependent on complex, unpredictable biological and environmental factors. Your actual results <strong>will vary</strong> based on, but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Water quality fluctuations and dissolved oxygen availability.</li>
            <li>Disease outbreaks, weather events, and variable mortality rates.</li>
            <li>Changes in local market prices for harvested products.</li>
            <li>Fluctuations in the cost of commercial feed, energy, and labor.</li>
            <li>Variations in feed conversion performance under field conditions.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">Not Professional Advice</h2>
          <p className="mb-4">
            The Aqua app does not replace professional advice. Information provided here does not constitute veterinary, engineering, legal, environmental compliance, or financial advice. 
          </p>
          <p className="mb-4 font-semibold">
            Users must verify important planning and investment decisions independently using certified professionals (e.g., aquatic veterinarians, agricultural economists, and structural engineers).
          </p>
        </div>
      </div>
    </div>
  );
}
