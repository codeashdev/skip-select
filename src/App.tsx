import { ColorPalette } from "./components/ColorPalette/ColorPalette";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<div className="min-h-screen bg-background transition-colors duration-300">
					<Navbar />
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<AppRoutes />
					</main>
					<ColorPalette />
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
