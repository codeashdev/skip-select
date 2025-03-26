import { useState, useEffect } from "react";
import { StandardImage } from "./StandardImage";
import { PriceSection } from "./PriceSection";
import { AdditionalCosts } from "./AdditionalCosts";
import { ActionButton } from "./ActionButton";
import { DetailsDrawer } from "./DetailsDrawer";

export const StandardCard = ({ skip }: SkipCardProps) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isDrawerVisible, setIsDrawerVisible] = useState(false);
	const totalPrice =
		skip.price_before_vat + skip.price_before_vat * (skip.vat / 100);
	const isDisabled = !skip.allows_heavy_waste;

	const handleSelect = () => {
		setIsSelected(true);
		setTimeout(() => setIsDrawerVisible(true), 50);
		document.body.style.overflow = "hidden";
	};

	const handleCancel = () => {
		setIsDrawerVisible(false);
		setTimeout(() => setIsSelected(false), 300);
		document.body.style.overflow = "unset";
	};

	useEffect(() => {
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	return (
		<>
			<div
				className={`group bg-card shadow-sm hover:shadow-md rounded-md transition-all duration-300 flex flex-col h-full relative ${
					isDisabled ? "opacity-75" : ""
				}`}
				role="article"
				aria-label={`${skip.size} cubic yard skip`}
				aria-disabled={isDisabled}
			>
				<StandardImage
					size={skip.size}
					isDisabled={isDisabled}
					allowedOnRoad={skip.allowed_on_road}
					allowsHeavyWaste={skip.allows_heavy_waste}
				/>

				<div className="p-5 flex flex-col flex-grow">
					<div className="flex flex-col gap-3 flex-grow">
						<div role="group" aria-label="Skip pricing information">
							<PriceSection
								hirePeriodDays={skip.hire_period_days}
								priceBeforeVat={skip.price_before_vat}
								vat={skip.vat}
								totalPrice={totalPrice}
							/>
						</div>

						<div className="flex-grow" role="group" aria-label="Additional costs">
							<AdditionalCosts
								transportCost={skip.transport_cost}
								perTonneCost={skip.per_tonne_cost}
							/>
						</div>

						<ActionButton isDisabled={isDisabled} onSelect={handleSelect} />
					</div>
				</div>
			</div>

			{isSelected && (
				<DetailsDrawer
					isVisible={isDrawerVisible}
					skip={skip}
					totalPrice={totalPrice}
					onCancel={handleCancel}
				/>
			)}
		</>
	);
};
