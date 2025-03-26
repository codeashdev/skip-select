interface GlossySkipCardProps {
  skip: Skip;
}

interface GlossyActionButtonProps {
  isDisabled: boolean;
  onSelect: () => void;
}

interface GlossyAdditionalCostsProps {
  transportCost: number | null;
  perTonneCost: number | null;
}

interface GlossyDetailsDrawerProps {
  skip: Skip;
  isVisible: boolean;
  totalPrice: number;
  onCancel: () => void;
}

interface GlossySkipImageProps {
  size: number;
  isDisabled: boolean;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
}

interface GlossyPriceSectionProps {
  hirePeriodDays: number;
  priceBeforeVat: number;
  vat: number;
  totalPrice: number;
}