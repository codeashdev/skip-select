import { Calendar } from "lucide-react";

export const PriceSection = ({
	hirePeriodDays,
	priceBeforeVat,
	vat,
	totalPrice,
}: PriceSectionProps) => {
	return (
		<div className="flex items-start justify-between">
			<div className="flex items-center gap-2">
				<Calendar size={18} className="text-primary" />
				<span className="text-primary">{hirePeriodDays} days hire</span>
			</div>
			<div className="text-right">
				<div className="text-2xl font-bold text-primary">
					£{priceBeforeVat.toFixed(2)}
				</div>
				<div className="text-xs text-tertiary/70 space-y-0.5">
					<div>
						+{vat}% VAT (£{(priceBeforeVat * (vat / 100)).toFixed(2)})
					</div>
					<div className="text-sm font-medium text-primary">
						Total: £{totalPrice.toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
};
