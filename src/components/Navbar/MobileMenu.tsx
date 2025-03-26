import { X } from "lucide-react";
import { NavigationItems } from "./NavigationItems";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	return (
		<>
			{/* Mobile menu overlay */}
			<div
				className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={onClose}
				role="presentation"
				aria-hidden="true"
			/>

			{/* Mobile menu drawer */}
			<div
				id="mobile-menu"
				role="dialog"
				aria-modal="true"
				aria-label="Mobile navigation menu"
				className={`fixed top-0 right-0 h-full w-64 bg-card border-l border-border transform transition-transform duration-300 ease-out md:hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="p-4 border-b border-border flex justify-between items-center">
					<h2
						id="mobile-menu-title"
						className="text-lg font-semibold text-primary"
					>
						Navigation
					</h2>
					<button
						onClick={onClose}
						className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-hover transition-colors"
						aria-label="Close mobile menu"
						aria-controls="mobile-menu"
					>
						<X size={20} className="stroke-2" aria-hidden="true" />
					</button>
				</div>
				<NavigationItems mobile onItemClick={onClose} />
			</div>
		</>
	);
};
