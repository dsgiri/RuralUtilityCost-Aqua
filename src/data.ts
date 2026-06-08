import { Tool } from './types';

export const TOOLS: Tool[] = [
  {
    id: 'cost-estimator',
    title: 'Aqua Cost Estimator',
    description: 'Estimate total startup, variable, and overhead costs for your production system.',
    category: 'startup cost',
    primaryOutcome: 'Total Startup & Operating Cost',
    path: '/tools/estimate'
  },
  {
    id: 'feed-calculator',
    title: 'Feed & FCR Calculator',
    description: 'Model feed conversion ratio, feed consumption, and total feed cost for a grow-out cycle.',
    category: 'feed',
    primaryOutcome: 'Feed Cost & Feed Volume',
    path: '/tools/feed'
  },
  {
    id: 'harvest-calculator',
    title: 'Harvest & Survival Modeler',
    description: 'Estimate survival rates, final biomass yield, and harvest output based on stocking density.',
    category: 'harvest',
    primaryOutcome: 'Total Harvest Weight',
    path: '/tools/harvest'
  },
  {
    id: 'profit-calculator',
    title: 'Profit & Breakeven Tool',
    description: 'Calculate gross profit, margin per cycle, breakeven cost, and breakeven price.',
    category: 'profit',
    primaryOutcome: 'Breakeven Price & Profit Margin',
    path: '/tools/profit'
  },
  {
    id: 'system-comparison',
    title: 'System Comparison',
    description: 'Compare economics of different systems (e.g., Pond vs Tank vs RAS) side by side.',
    category: 'system comparison',
    primaryOutcome: 'Comparative Advantage',
    path: '/tools/compare'
  }
];

export const CATEGORIES = Array.from(new Set(TOOLS.map(t => t.category)));
