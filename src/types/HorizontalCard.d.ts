interface HorizontalCardProps {
	skip: Skip;
}

interface CardHeaderProps {
	size: number;
	area: string | null;
	postcode: string;
	basePrice: number;
	vatPercentage: number;
	transportInfo: string;
}

interface CardStatusProps {
	size: number;
	allowedOnRoad: boolean;
}

interface CardFeaturesProps {
	hirePeriodDays: number;
	transportCost: number | null;
	allowsHeavyWaste: boolean;
	hasForbidden: boolean;
}

interface SkipDetailsDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	skipDetails: {
		size: number;
		price: number;
		hireDays: number;
		basePrice: number;
		vatAmount: number;
	};
}

interface HorizontalActionButtonsProps {
	allowsHeavyWaste: boolean;
	skipDetails: {
		size: number;
		price: number;
		hireDays: number;
		basePrice: number;
		vatAmount: number;
	};
}
