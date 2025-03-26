import { motion } from "motion/react";
import { Calendar, Package, PoundSterling } from "lucide-react";
import { useEffect } from "react";

interface PriceBreakdownProps {
	basePrice: number;
	vatAmount: number;
	total: number;
}

export const HorizontalDrawer = ({
	isOpen,
	onClose,
	skipDetails,
}: SkipDetailsDrawerProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const PriceBreakdown = ({
		basePrice,
		vatAmount,
		total,
	}: PriceBreakdownProps) => (
		<div
			className="flex flex-col items-center"
			role="group"
			aria-label="Price breakdown"
		>
			<span className="text-sm text-secondary mb-1">Price</span>
			<div className="flex flex-col items-center text-primary">
				<span
					className="text-lg text-center font-semibold"
					aria-label={`Total price: £${total}`}
				>
					£{total}
				</span>
				<div>
					<span
						className="text-sm font-semibold"
						aria-label={`Base price: £${basePrice}`}
					>
						£{basePrice}
					</span>
					<span
						className="text-sm text-secondary"
						aria-label={`VAT: £${vatAmount}`}
					>
						+£{vatAmount}
					</span>
					<span className="text-xs text-secondary"> VAT</span>
				</div>
			</div>
		</div>
	);

	return (
		<>
			{/* Backdrop */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-black/50 z-40"
				onClick={onClose}
				role="presentation"
				aria-hidden="true"
			/>

			{/* Drawer */}
			<motion.div
				initial={{ y: "100%" }}
				animate={{ y: 0 }}
				exit={{ y: "100%" }}
				transition={{ type: "spring", damping: 25, stiffness: 300 }}
				className="fixed bottom-0 left-0 right-0 bg-card p-6 rounded-t-xl shadow-lg z-50 border-t border-border"
				role="dialog"
				aria-modal="true"
				aria-label="Skip details"
			>
				{/* Skip Details */}
				<div
					className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
					role="group"
					aria-label="Skip specifications"
				>
					<div
						className="flex flex-col items-center p-3 bg-hover rounded-lg"
						role="group"
						aria-label="Skip size"
					>
						<Package
							size={20}
							className="text-primary mb-2"
							aria-hidden="true"
						/>
						<span className="text-sm text-secondary">Size</span>
						<span className="text-lg font-semibold text-primary">
							{skipDetails.size}yd³
						</span>
					</div>
					<div
						className="flex flex-col items-center p-3 bg-hover rounded-lg"
						role="group"
						aria-label="Hire duration"
					>
						<Calendar
							size={20}
							className="text-primary mb-2"
							aria-hidden="true"
						/>
						<span className="text-sm text-secondary">Duration</span>
						<span className="text-lg font-semibold text-primary">
							{skipDetails.hireDays} days
						</span>
					</div>
					<div
						className="flex flex-col items-center p-3 bg-hover rounded-lg"
						role="group"
						aria-label="Price details"
					>
						<PoundSterling
							size={20}
							className="text-primary mb-2"
							aria-hidden="true"
						/>
						<PriceBreakdown
							basePrice={skipDetails.basePrice}
							vatAmount={skipDetails.vatAmount}
							total={skipDetails.price}
						/>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex gap-4" role="group" aria-label="Action buttons">
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={onClose}
						className="flex-1 py-2 px-4 rounded-lg border-2 border-primary/10 cursor-pointer text-primary hover:bg-hover transition-colors font-medium"
						aria-label="Cancel skip selection"
					>
						Cancel
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="flex-1 py-2 px-4 rounded-lg bg-primary text-white hover:bg-primary/90 cursor-pointer transition-colors font-medium"
						aria-label="Proceed with skip selection"
					>
						Proceed
					</motion.button>
				</div>
			</motion.div>
		</>
	);
};
