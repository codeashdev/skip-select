import { motion } from "motion/react";
import { HorizontalActionButtons } from "./HorizontalActionButtons";
import { CardStatus } from "./CardStatus";
import { CardHeader } from "./CardHeader";
import { CardFeatures } from "./CardFeatures";

export const HorizontalCard = ({ skip }: HorizontalCardProps) => {
	// Calculate VAT amount using the percentage
	const vatAmount = (skip.price_before_vat * skip.vat) / 100;
	const totalPrice = skip.price_before_vat + vatAmount;
	const transportInfo = skip.transport_cost
		? `£${skip.transport_cost} delivery`
		: "Delivery included";

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="bg-card transition-colors duration-300 rounded-xl shadow-lg overflow-hidden border border-border"
			role="article"
			aria-label={`${skip.size} cubic yard skip details`}
		>
			<div className="flex flex-col md:flex-row">
				<CardStatus size={skip.size} allowedOnRoad={skip.allowed_on_road} />

				<div className="flex-1 p-6">
					<div role="region" aria-label="Skip overview">
						<CardHeader
							size={skip.size}
							area={skip.area}
							postcode={skip.postcode}
							basePrice={skip.price_before_vat}
							vatPercentage={skip.vat}
							transportInfo={transportInfo}
						/>
					</div>

					<div role="region" aria-label="Skip features">
						<CardFeatures
							hirePeriodDays={skip.hire_period_days}
							transportCost={skip.transport_cost}
							allowsHeavyWaste={skip.allows_heavy_waste}
							hasForbidden={skip.forbidden}
						/>
					</div>

					<div role="region" aria-label="Skip actions">
						<HorizontalActionButtons
							allowsHeavyWaste={skip.allows_heavy_waste}
							skipDetails={{
								size: skip.size,
								price: totalPrice,
								hireDays: skip.hire_period_days,
								basePrice: skip.price_before_vat,
								vatAmount: vatAmount,
							}}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
