import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export const CardBack = ({ skip, onFlip }: CardBackProps) => {
  return (
    <motion.div
      key="back"
      className="p-6 flex flex-col h-full bg-card transition-colors duration-300 [transform:rotateY(180deg)] absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="region"
      aria-label="Skip card back"
    >
      <div className="flex-1 space-y-4">
        <div role="group" aria-label="Additional costs information">
          <h3 className="text-lg font-semibold text-primary mb-2" id="additional-costs">Additional Costs</h3>
          <div className="space-y-2" role="list" aria-labelledby="additional-costs">
            {skip.transport_cost !== null && (
              <div className="flex justify-between items-center" role="listitem">
                <span className="text-secondary">Transport Fee:</span>
                <span className="text-primary font-medium">£{skip.transport_cost.toFixed(2)}</span>
              </div>
            )}
            {skip.per_tonne_cost !== null && (
              <div className="flex justify-between items-center" role="listitem">
                <span className="text-secondary">Cost per Tonne:</span>
                <span className="text-primary font-medium">£{skip.per_tonne_cost.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>

        <div role="group" aria-label="Location information">
          <h3 className="text-lg font-semibold text-primary mb-2" id="location">Location</h3>
          <div className="space-y-2" role="list" aria-labelledby="location">
            <div className="flex justify-between items-center" role="listitem">
              <span className="text-secondary">Postcode:</span>
              <span className="text-primary font-medium">{skip.postcode}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <motion.button
          className="w-full bg-primary text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
          whileHover={{ gap: "12px" }}
          onClick={onFlip}
          aria-label="Return to skip overview"
        >
          <ChevronRight size={16} className="rotate-180" aria-hidden="true" />
          <span>Back to Overview</span>
        </motion.button>
      </div>
    </motion.div>
  );
}; 