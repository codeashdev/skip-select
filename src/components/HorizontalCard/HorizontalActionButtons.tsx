import { motion, AnimatePresence } from "motion/react";
import { Check, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { HorizontalDrawer } from "./HorizontalDrawer";

export const HorizontalActionButtons = ({
	allowsHeavyWaste,
	skipDetails,
}: HorizontalActionButtonsProps) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleSelect = () => {
		if (!allowsHeavyWaste) return;
		setIsSelected(true);
	};

	const handleClose = () => {
		setIsSelected(false);
	};

	return (
		<>
			<motion.button
				whileHover={allowsHeavyWaste ? { scale: 1.02 } : {}}
				whileTap={allowsHeavyWaste ? { scale: 0.98 } : {}}
				onClick={handleSelect}
				className={`
                    px-4 py-2 rounded-lg
                    transition-all duration-200
                    flex items-center gap-2
                    text-sm font-medium
                    w-full justify-center
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    ${
											allowsHeavyWaste
												? "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md cursor-pointer"
												: "bg-gray-200 text-gray-500 cursor-not-allowed"
										}
                `}
				disabled={!allowsHeavyWaste}
				aria-label={
					allowsHeavyWaste
						? "Select skip"
						: "Skip not available for heavy waste"
				}
				aria-disabled={!allowsHeavyWaste}
			>
				{allowsHeavyWaste ? (
					<Check size={18} aria-hidden="true" />
				) : (
					<AlertTriangle size={18} aria-hidden="true" />
				)}
				<span>
					{allowsHeavyWaste ? "Select Skip" : "Not Available for Heavy Waste"}
				</span>
			</motion.button>

			<AnimatePresence>
				{isSelected && (
					<HorizontalDrawer
						isOpen={isSelected}
						onClose={handleClose}
						skipDetails={skipDetails}
					/>
				)}
			</AnimatePresence>
		</>
	);
};
