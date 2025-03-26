import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		// Check if theme is stored in localStorage
		const savedTheme = localStorage.getItem("theme");
		// Check system preference if no stored theme
		if (!savedTheme) {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}
		return savedTheme as Theme;
	});

	// Set initial theme class on mount
	useEffect(() => {
		const root = document.documentElement;
		root.classList.add(theme);
	}, []);

	useEffect(() => {
		// Update localStorage and document class when theme changes
		localStorage.setItem("theme", theme);
		const root = document.documentElement;

		if (theme === "dark") {
			root.classList.remove("light");
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
			root.classList.add("light");
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
