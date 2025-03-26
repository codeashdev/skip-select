import { Calendar, Truck, Weight, Ban } from "lucide-react";

export const CardFeatures = ({
	hirePeriodDays,
	transportCost,
	allowsHeavyWaste,
	hasForbidden,
}: CardFeaturesProps) => {
	return (
		<div className="grid grid-cols-2 gap-4 mb-6">
			<div className="flex items-center gap-2 text-secondary">
				<Calendar size={18} />
				<span className="text-sm">Hire period: {hirePeriodDays} days</span>
			</div>
			<div className="flex items-center gap-2 text-secondary">
				<Truck size={18} />
				<span className="text-sm">
					Transport: {transportCost ? `£${transportCost}` : "Included"}
				</span>
			</div>
			<div className="flex items-center gap-2 text-secondary">
				<Weight
					size={18}
					className={`${allowsHeavyWaste ? "" : "text-red-500"}`}
				/>
				<span className={`text-sm ${allowsHeavyWaste ? "" : "text-red-500"}`}>
					{allowsHeavyWaste ? "Accepts heavy waste" : "No heavy waste"}
				</span>
			</div>
			<div className="flex items-center gap-2 text-secondary">
				<Ban
					size={18}
					className={hasForbidden ? "text-red-500" : "text-green-500"}
				/>
				<span className="text-sm">
					{hasForbidden ? "Restrictions apply" : "No restrictions"}
				</span>
			</div>
		</div>
	);
};
