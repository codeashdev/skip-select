import { NavLink } from "react-router";

export const navigationItems = [
	{
		path: "/",
		label: "Classic View",
	},
	{
		path: "/horizontal",
		label: "Horizontal View",
	},
	{
		path: "/glossy",
		label: "Glossy View",
	},
	{
		path: "/animated",
		label: "Animated View",
	},
	{
		path: "/neomorphic",
		label: "Neomorphic View",
	},
] as const;

interface NavigationItemsProps {
	mobile?: boolean;
	onItemClick?: () => void;
}

export const NavigationItems = ({
	mobile,
	onItemClick,
}: NavigationItemsProps) => {
	if (mobile) {
		return (
			<div
				className="p-4 space-y-2"
				role="menu"
				aria-label="Mobile navigation menu"
			>
				{navigationItems.map((item) => (
					<NavLink
						key={item.path}
						to={item.path}
						className={({ isActive }: { isActive: boolean }) => `
                            block px-3 py-2 rounded-lg text-sm font-medium transition-colors
                            ${isActive
								? "text-primary bg-hover"
								: "text-secondary hover:text-primary hover:bg-hover"
							}
                        `}
						onClick={onItemClick}
						role="menuitem"
						aria-current="page"
					>
						{item.label}
					</NavLink>
				))}
			</div>
		);
	}

	return (
		<div
			className="flex items-center gap-4"
			role="menubar"
			aria-label="Desktop navigation menu"
		>
			{navigationItems.map((item) => (
				<NavLink
					key={item.path}
					to={item.path}
					className={({ isActive }: { isActive: boolean }) => `
                        text-sm font-medium transition-colors
                        ${isActive
							? "text-primary"
							: "text-secondary hover:text-primary"
						}
                    `}
					role="menuitem"
					aria-current="page"
				>
					{item.label}
				</NavLink>
			))}
		</div>
	);
};
