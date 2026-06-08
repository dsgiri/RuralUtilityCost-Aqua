export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  primaryOutcome: string;
  path: string;
}

export type ProductionSystem = 
  | 'pond'
  | 'tank'
  | 'cage'
  | 'ras'
  | 'shellfish'
  | 'aquaponics'
  | 'hybrid';

export interface CostEstimateInput {
  systemType: ProductionSystem;
  volumeSize: number; // m3 or acres
  stockingDensity: number; // per unit
  fingerlingCost: number;
  feedPricePerTon: number;
  fcr: number;
  survivalRate: number; // 0-1
  targetHarvestWeight: number; // kg
  cycleLengthDays: number;
  energyCostPerMonth: number;
  laborCostPerMonth: number;
  equipmentCost: number;
  licensingCost: number;
}
