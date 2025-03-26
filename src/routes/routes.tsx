import { Route, Routes } from "react-router";
import { Standard } from "@/pages/Standard";
import { Horizontal } from "@/pages/Horizontal";
export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Standard />} />
				<Route path="horizontal" element={<Horizontal />} />
			</Route>
		</Routes>
	);
}
