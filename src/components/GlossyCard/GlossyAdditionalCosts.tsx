import { Truck, Weight } from "lucide-react";


export const GlossyAdditionalCosts = ({ transportCost, perTonneCost }: GlossyAdditionalCostsProps) => {
  if (!transportCost && !perTonneCost) return null;

  return (
    <div
      className="flex flex-wrap gap-3"
      role="group"
      aria-label="Additional costs"
    >
      {transportCost && (
        <div
          className="bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm text-secondary flex items-center gap-1.5"
          role="text"
          aria-label={`Transport cost: £${transportCost.toFixed(2)}`}
        >
          <Truck size={14} className="text-primary" aria-hidden="true" />
          <span>Transport: £{transportCost.toFixed(2)}</span>
        </div>
      )}
      {perTonneCost && (
        <div
          className="bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm text-secondary flex items-center gap-1.5"
          role="text"
          aria-label={`Cost per tonne: £${perTonneCost.toFixed(2)}`}
        >
          <Weight size={14} className="text-primary" aria-hidden="true" />
          <span>Per Tonne: £{perTonneCost.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}; 