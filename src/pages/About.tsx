export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">About Aqua</h1>
      
      <div className="prose prose-slate prose-teal">
        <p className="lead text-lg text-slate-600 mb-4">
          Aqua is the dedicated aquaculture and water-production economics hub within the Rural Utility Cost ecosystem.
        </p>
        
        <p className="mb-4 text-slate-700">
          Our goal is to help fish farmers, aquaculture operators, hatchery managers, and aquaponics enthusiasts make practical planning and budgeting decisions through accessible, clear estimation tools.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">What We Do</h2>
        <p className="mb-4 text-slate-700">
          The Aqua dashboard provides a suite of decision-support calculators to help you:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
          <li>Estimate startup and operating costs for ponds, tanks, cages, and RAS systems.</li>
          <li>Analyze feed efficiency, feed conversion ratios (FCR), and overall feed budgets.</li>
          <li>Model survival rates, yield predictions, and total harvest outcomes based on stocking densities.</li>
          <li>Calculate potential profitability, profit margins, and critical breakeven pricing.</li>
          <li>Run comparative scenarios to decide between different production environments.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Part of Rural Utility Cost</h2>
        <p className="mb-4 text-slate-700">
          As a specialized subdomain of Rural Utility Cost, Aqua integrates agricultural production economics with water-based systems. We share the rigorous, data-first approach of our parent ecosystem, delivering trustworthy and practical interfaces free of clutter.
        </p>
      </div>
    </div>
  );
}
