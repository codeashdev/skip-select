import { Truck, Weight } from "lucide-react";

export const AdditionalCosts = ({
	transportCost,
	perTonneCost,
}: AdditionalCostsProps) => {
	if (!transportCost && !perTonneCost) return null;

	return (
		<div className="flex flex-col gap-1.5 bg-background rounded-lg p-3">
			{transportCost && (
				<div className="flex items-center gap-2 text-sm text-secondary">
					<Truck size={15} className="text-primary stroke-[2.5]" />
					<span>Transport: £{transportCost.toFixed(2)}</span>
				</div>
			)}
			{perTonneCost && (
				<div className="flex items-center gap-2 text-sm text-secondary">
					<Weight size={15} className="text-primary stroke-[2.5]" />
					<span>Per Tonne: £{perTonneCost.toFixed(2)}</span>
				</div>
			)}
		</div>
	);
};
