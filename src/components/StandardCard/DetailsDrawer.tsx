import { Calendar } from "lucide-react";

export const DetailsDrawer = ({
	isVisible,
	skip,
	totalPrice,
	onCancel,
}: DetailsDrawerProps) => {
	return (
		<div
			className={`fixed inset-0 bg-drawer-overlay z-50 transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			onClick={onCancel}
			role="presentation"
			aria-hidden="true"
		>
			<div
				className={`fixed bottom-0 inset-x-0 bg-drawer rounded-t-xl shadow-lg transform transition-transform duration-300 ease-out ${
					isVisible ? "translate-y-0" : "translate-y-full"
				}`}
				onClick={(e) => e.stopPropagation()}
				style={{ maxHeight: "90vh" }}
				role="dialog"
				aria-modal="true"
				aria-labelledby="drawer-title"
				aria-describedby="drawer-description"
			>
				<div className="p-6 flex flex-col gap-6">
					{/* Content */}
					<div className="space-y-6">
						{/* Skip Details */}
						<div className="flex items-start gap-4 bg-background p-4 rounded-lg">
							<div className="flex-1">
								<h4 id="drawer-title" className="text-lg font-semibold text-primary">
									{skip.size} Yard Skip
								</h4>
								<div className="flex items-center gap-2 mt-1 text-secondary">
									<Calendar size={16} className="text-primary" aria-hidden="true" />
									<span>{skip.hire_period_days} days hire</span>
								</div>
							</div>
						</div>

						{/* Pricing Breakdown */}
						<div className="space-y-3" id="drawer-description">
							<h4 className="font-medium text-secondary">Price Breakdown</h4>
							<div className="space-y-2 text-sm" role="list">
								<div className="flex justify-between" role="listitem">
									<span className="text-secondary">Base Price</span>
									<span className="text-primary">
										£{skip.price_before_vat.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between" role="listitem">
									<span className="text-secondary">VAT ({skip.vat}%)</span>
									<span className="text-primary">
										£{(skip.price_before_vat * (skip.vat / 100)).toFixed(2)}
									</span>
								</div>
								{skip.transport_cost && (
									<div className="flex justify-between" role="listitem">
										<span className="text-secondary">Transport Cost</span>
										<span className="text-primary">
											£{skip.transport_cost.toFixed(2)}
										</span>
									</div>
								)}
								<div className="flex justify-between pt-2 border-t border-border font-medium" role="listitem">
									<span className="text-primary">Total (inc. VAT)</span>
									<span className="text-primary text-lg">
										£{totalPrice.toFixed(2)}
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-4 mt-auto pt-4 border-t border-border">
						<button
							onClick={onCancel}
							className="flex-1 px-4 py-3 border border-border rounded-lg text-secondary cursor-pointer font-medium hover:bg-hover transition-colors"
							aria-label="Cancel skip selection"
						>
							Cancel
						</button>
						<button 
							className="flex-1 px-4 py-3 bg-primary text-white rounded-lg cursor-pointer font-medium hover:bg-primary/90 transition-colors"
							aria-label="Continue with skip selection"
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
