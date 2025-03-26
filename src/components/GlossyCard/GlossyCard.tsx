import { useState, useEffect } from "react";
import { GlossyImage } from "./Glossymage";
import { GlossyPriceSection } from "./GlossyPriceSection";
import { GlossyAdditionalCosts } from "./GlossyAdditionalCosts";
import { GlossyActionButton } from "./GlossyActionButton";
import { GlossyDetailsDrawer } from "./GlossyDetailsDrawer";

interface GlossySkipCardProps {
  skip: Skip;
}

export const GlossyCard = ({ skip }: GlossySkipCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const totalPrice = skip.price_before_vat + skip.price_before_vat * (skip.vat / 100);
  const isDisabled = !skip.allows_heavy_waste;

  const handleSelect = () => {
    setIsSelected(true);
    setTimeout(() => setIsDrawerVisible(true), 50);
    document.body.style.overflow = 'hidden';
  };

  const handleCancel = () => {
    setIsDrawerVisible(false);
    setTimeout(() => setIsSelected(false), 300);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div
        className={`group relative overflow-hidden bg-white/5 transition-colors duration-300 backdrop-blur-md rounded-xl flex flex-col h-full border border-white/20 shadow-lg ${isDisabled ? 'opacity-80 saturate-50' : ''
          }`}
        role="article"
        aria-label={`${skip.size} cubic yard skip`}
        aria-disabled={isDisabled}
      >
        {/* Glossy overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.05] via-white/[0.08] to-white/[0.12] opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.1]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.02] to-black/[0.03]" aria-hidden="true" />

        {/* Highlight effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-br  from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

        {/* Content */}
        <div className="relative flex flex-col h-full transition-colors duration-300">
          <GlossyImage
            size={skip.size}
            isDisabled={isDisabled}
            allowedOnRoad={skip.allowed_on_road}
            allowsHeavyWaste={skip.allows_heavy_waste}
          />

          {/* Info section */}
          <div className="p-6 flex flex-col flex-grow bg-white/[0.02] backdrop-blur-[8px] transition-colors duration-300">
            <div className="flex flex-col gap-4 flex-grow">
              <div role="group" aria-label="Skip pricing information">
                <GlossyPriceSection
                  hirePeriodDays={skip.hire_period_days}
                  priceBeforeVat={skip.price_before_vat}
                  vat={skip.vat}
                  totalPrice={totalPrice}
                />
              </div>

              <div className="flex-grow backdrop-blur-[2px]" role="group" aria-label="Additional costs">
                <GlossyAdditionalCosts
                  transportCost={skip.transport_cost}
                  perTonneCost={skip.per_tonne_cost}
                />
              </div>
            </div>

            {/* Action button */}
            <div className="pt-4 relative" role="group" aria-label="Skip actions">
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" aria-hidden="true" />
              <div className="relative">
                <GlossyActionButton
                  isDisabled={isDisabled}
                  onSelect={handleSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details drawer */}
      {isSelected && (
        <GlossyDetailsDrawer
          skip={skip}
          isVisible={isDrawerVisible}
          totalPrice={totalPrice}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}; 