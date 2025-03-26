import { Route, Routes } from "react-router";
import { Standard } from "@/pages/Standard";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Standard />} />
			</Route>
		</Routes>
	);
}
