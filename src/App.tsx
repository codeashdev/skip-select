import { Navbar } from "./components/Navbar/Navbar";
import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen bg-background transition-colors duration-300">
				<Navbar />
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<AppRoutes />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
