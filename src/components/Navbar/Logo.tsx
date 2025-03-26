import { Link } from "react-router";
import logo from "../../assets/logo.png";

export const Logo = () => {
	return (
		<Link to="/" className="flex flex-row items-center">
			<img src={logo} alt="Skip Select Logo" className="h-8 w-auto" />
			<span className="ml-2 text-xl font-semibold text-primary">
				Skip Select
			</span>
		</Link>
	);
};
