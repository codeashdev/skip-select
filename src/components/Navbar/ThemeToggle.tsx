import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 text-secondary hover:text-primary rounded-lg hover:bg-hover transition-colors relative"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            aria-pressed={theme === 'dark'}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="w-5 h-5"
                >
                    {theme === "dark" ? (
                        <Sun size={20} className="stroke-2" aria-hidden="true" />
                    ) : (
                        <Moon size={20} className="stroke-2" aria-hidden="true" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}; 