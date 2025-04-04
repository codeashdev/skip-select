import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { NavigationItems } from "./NavigationItems";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

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
						className="hidden lg:flex items-center gap-6"
						role="menubar"
						aria-label="Desktop menu"
					>
						<NavigationItems />
						<ThemeToggle />
					</div>

					{/* Mobile menu button and theme toggle */}
					<div className="flex lg:hidden items-center gap-2">
						<ThemeToggle />
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
