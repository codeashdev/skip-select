import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { NavigationItems } from "./NavigationItems";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	return (
		<nav
			className="sticky top-0 z-40 w-full bg-card transition-colors duration-300 border-b border-border"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Logo />

					{/* Desktop navigation */}
					<div
						className="hidden md:flex items-center gap-6"
						role="menubar"
						aria-label="Desktop menu"
					>
						<NavigationItems />
					</div>

					{/* Mobile menu button and theme toggle */}
					<div className="flex md:hidden items-center gap-2">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-hover transition-colors"
							aria-label="Toggle mobile menu"
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
						>
							<Menu size={24} className="stroke-2" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>

			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</nav>
	);
};
