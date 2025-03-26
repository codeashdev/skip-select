import { Calendar, MapPin, Truck, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export const GlossyDetailsDrawer = ({ skip, isVisible, totalPrice, onCancel }: GlossyDetailsDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };

    if (isVisible) {
      closeButtonRef.current?.focus();
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isVisible, onCancel]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onCancel}
            role="presentation"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            aria-describedby="drawer-content"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
            className="fixed right-0 z-50 top-0 h-full w-full max-w-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md p-6 shadow-2xl border-l border-white/10"
          >
            {/* Glass effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.05]" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/[0.05]" aria-hidden="true" />

            <div className="relative">
              {/* Close button */}
              <motion.button
                ref={closeButtonRef}
                onClick={onCancel}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-4 top-4 p-2 text-tertiary hover:text-secondary transition-colors rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close details drawer"
              >
                <X size={24} aria-hidden="true" />
              </motion.button>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h2 id="drawer-title" className="text-2xl font-bold text-primary mb-2">
                  {skip.size} Yard Skip Details
                </h2>
                <div className="flex items-center gap-2 text-secondary" role="text">
                  <Calendar size={18} className="text-primary" aria-hidden="true" />
                  <span>{skip.hire_period_days} days hire</span>
                </div>
              </motion.div>

              {/* Content */}
              <div id="drawer-content" className="space-y-6">
                {/* Price breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 space-y-4 border border-white/10"
                  role="group"
                  aria-labelledby="price-breakdown-title"
                >
                  <h3 id="price-breakdown-title" className="text-lg font-semibold text-primary">Price Breakdown</h3>
                  <div className="space-y-2" role="list">
                    <div className="flex justify-between text-secondary" role="listitem">
                      <span>Base Price</span>
                      <span>£{skip.price_before_vat.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-secondary" role="listitem">
                      <span>VAT ({skip.vat}%)</span>
                      <span>£{(skip.price_before_vat * (skip.vat / 100)).toFixed(2)}</span>
                    </div>
                    {skip.transport_cost && (
                      <div className="flex justify-between text-secondary" role="listitem">
                        <div className="flex items-center gap-2">
                          <Truck size={16} className="text-primary" aria-hidden="true" />
                          <span>Transport Cost</span>
                        </div>
                        <span>£{skip.transport_cost.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t border-border pt-2 mt-4" role="listitem">
                      <div className="flex justify-between text-lg font-semibold text-primary">
                        <span>Total Price</span>
                        <span>£{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Location and restrictions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 space-y-4 border border-white/10"
                  role="group"
                  aria-labelledby="location-restrictions-title"
                >
                  <h3 id="location-restrictions-title" className="text-lg font-semibold text-primary">Location & Restrictions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2" role="group" aria-label="Delivery area">
                      <MapPin size={18} className="text-primary mt-1" aria-hidden="true" />
                      <div>
                        <div className="font-medium text-secondary">Delivery Area</div>
                        <div className="text-tertiary">{skip.postcode}</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2" role="list" aria-label="Skip restrictions">
                      <div className="flex items-center gap-2 text-secondary" role="listitem">
                        <div
                          className={`w-2 h-2 rounded-full ${skip.allowed_on_road ? 'bg-green-500' : 'bg-yellow-500'}`}
                          aria-hidden="true"
                        />
                        <span>{skip.allowed_on_road ? 'Can be placed on road' : 'Private property only'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary" role="listitem">
                        <div
                          className={`w-2 h-2 rounded-full ${skip.allows_heavy_waste ? 'bg-green-500' : 'bg-red-500'}`}
                          aria-hidden="true"
                        />
                        <span>{skip.allows_heavy_waste ? 'Accepts heavy waste' : 'No heavy waste allowed'}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Action buttons */}
                <div className="flex gap-4 mt-8" role="group" aria-label="Action buttons">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCancel}
                    className="flex-1 py-3 px-6 rounded-xl border border-white/10 text-secondary hover:text-primary hover:bg-white/5 transition-colors focus:outline-none cursor-pointer focus:ring-2 focus:ring-primary"
                    aria-label="Cancel skip selection"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 px-6 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer focus:ring-offset-2"
                    aria-label="Proceed with skip selection"
                  >
                    Proceed
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 