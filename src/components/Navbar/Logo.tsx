import { Link } from "react-router";
import { LogoIcon } from "./LogoIcon";

export const Logo = () => {
	return (
		<Link to="/" className="flex flex-row items-center">
			<LogoIcon className="h-8 w-auto text-primary" />
			<span className="ml-2 text-xl font-semibold text-primary">
				Skip Select
			</span>
		</Link>
	);
};
