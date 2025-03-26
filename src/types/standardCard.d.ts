interface SkipCardProps {
	skip: Skip;
}

interface SkipImageProps {
	size: number;
	isDisabled: boolean;
	allowedOnRoad: boolean;
	allowsHeavyWaste: boolean;
}

interface PriceSectionProps {
	hirePeriodDays: number;
	priceBeforeVat: number;
	vat: number;
	totalPrice: number;
}

interface AdditionalCostsProps {
	transportCost: number | null;
	perTonneCost: number | null;
}

interface ActionButtonProps {
	isDisabled: boolean;
	onSelect: () => void;
}

interface DetailsDrawerProps {
	isVisible: boolean;
	skip: Skip;
	totalPrice: number;
	onCancel: () => void;
}
