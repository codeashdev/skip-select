import { Route, Routes } from "react-router";
import { Standard } from "@/pages/Standard";
import { Horizontal } from "@/pages/Horizontal";
import { Glossy } from "@/pages/Glossy";
export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Standard />} />
				<Route path="horizontal" element={<Horizontal />} />
				<Route path="glossy" element={<Glossy />} />
			</Route>
		</Routes>
	);
}
