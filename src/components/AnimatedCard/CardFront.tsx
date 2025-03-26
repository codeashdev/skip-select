import { motion } from "motion/react";
import { Ban, AlertTriangle, ChevronRight } from "lucide-react";
import CardImage from "../../assets/cardImage.jpg";


export const CardFront = ({ skip, isHovered, onFlip }: CardFrontProps) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <motion.div
      key="front"
      className="p-6 w-full h-full bg-card transition-colors duration-300 absolute inset-0 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="region"
      aria-label="Skip card front"
    >
      <div
        className="relative w-full aspect-[16/9] min-h-[11rem] rounded-lg mb-4 overflow-hidden"
        role="img"
        aria-label={`${skip.size} Yard Skip Image`}
      >
        <motion.div
          className="absolute inset-0"
          style={{ filter: !skip.allowed_on_road ? "grayscale(100%)" : "none" }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />
        <motion.img
          src={CardImage}
          alt={`${skip.size} Yard Skip`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: !skip.allowed_on_road ? "grayscale(100%)" : "none" }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div
          className="absolute top-4 left-4 bg-card/90 backdrop-blur px-3 py-1 rounded-full transition-colors duration-300"
          role="text"
          aria-label="Skip size"
        >
          <span className="text-sm font-medium text-primary">{skip.size} Yard Skip</span>
        </div>
        {!skip.allowed_on_road && (
          <motion.div
            className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            role="alert"
          >
            <Ban size={14} aria-hidden="true" />
            <span className="text-xs font-medium text-white">Private Only</span>
          </motion.div>
        )}
        {!skip.allows_heavy_waste && (
          <motion.div
            className="absolute bottom-4 right-4 bg-red-500/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            role="alert"
          >
            <AlertTriangle size={14} aria-hidden="true" />
            <span className="text-xs font-medium text-white">No Heavy Waste</span>
          </motion.div>
        )}
      </div>

      <div className="flex-1 space-y-4" role="group" aria-label="Skip details">
        <div role="group" aria-label="Hire period information">
          <p className="text-secondary text-sm">Hire Period</p>
          <p className="text-primary font-medium">{skip.hire_period_days} Days</p>
        </div>

        <div role="group" aria-label="Price information">
          <p className="text-secondary text-sm">Total Price (inc. VAT)</p>
          <p className="text-2xl font-bold text-primary">£{totalPrice.toFixed(2)}</p>
          <p className="text-xs text-secondary">Base price: £{skip.price_before_vat.toFixed(2)} + VAT ({skip.vat}%)</p>
        </div>
      </div>

      {skip.allows_heavy_waste && (
        <div className="mt-4">
          <motion.button
            className="w-full bg-primary text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            whileHover={{ gap: "12px" }}
            onClick={onFlip}
            aria-label="View skip details"
          >
            <span>View Details</span>
            <ChevronRight size={16} aria-hidden="true" />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}; 