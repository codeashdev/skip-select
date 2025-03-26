export const CardHeader = ({
	size,
	area,
	postcode,
	basePrice,
	vatPercentage,
	transportInfo,
}: CardHeaderProps) => {
	return (
		<div className="flex justify-between items-start mb-4">
			<div>
				<h3 className="text-xl font-semibold text-primary mb-2">
					{size} Yards Skip - {area || "Standard"}
				</h3>
				<p className="text-secondary text-sm mb-4">
					Available in {postcode} area
				</p>
			</div>
			<div className="text-right">
				<div className="text-2xl font-bold text-primary">£{basePrice}</div>
				<div className="text-sm text-secondary">+{vatPercentage}% VAT</div>
				<div className="text-sm text-secondary">{transportInfo}</div>
			</div>
		</div>
	);
};
