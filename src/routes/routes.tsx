import { Route, Routes } from "react-router";
import { Standard } from "@/pages/Standard";
import { Horizontal } from "@/pages/Horizontal";
import { Glossy } from "@/pages/Glossy";
import { Animated } from "@/pages/Animated";
import { Neomorphic } from "@/pages/Neomorphic";
export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Standard />} />
				<Route path="horizontal" element={<Horizontal />} />
				<Route path="glossy" element={<Glossy />} />
				<Route path="animated" element={<Animated />} />
				<Route path="neomorphic" element={<Neomorphic />} />
			</Route>
		</Routes>
	);
}
