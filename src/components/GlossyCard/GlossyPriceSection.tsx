import { Calendar } from "lucide-react";

export const GlossyPriceSection = ({
  hirePeriodDays,
  priceBeforeVat,
  vat,
  totalPrice
}: GlossyPriceSectionProps) => {
  return (
    <>
      {/* Hire period */}
      <div className="flex items-center gap-2 text-secondary" role="text">
        <Calendar size={18} className="text-primary" aria-hidden="true" />
        <span>{hirePeriodDays} days hire</span>
      </div>

      {/* Price section */}
      <div className="space-y-1" role="group" aria-label="Skip pricing details">
        <div
          className="text-3xl font-bold text-primary"
          role="text"
          aria-label={`Total price: £${totalPrice.toFixed(2)} including VAT`}
        >
          £{totalPrice.toFixed(2)}
          <span className="text-sm font-normal text-secondary ml-1">inc. VAT</span>
        </div>
        <div
          className="text-xs text-tertiary"
          role="text"
          aria-label={`Base price: £${priceBeforeVat.toFixed(2)} plus ${vat}% VAT`}
        >
          Base price: £{priceBeforeVat.toFixed(2)} + VAT ({vat}%)
        </div>
      </div>
    </>
  );
}; 