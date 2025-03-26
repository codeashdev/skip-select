import { motion } from "motion/react";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

interface ColorScheme {
    name: string;
    light: {
        primary: string;
        background: string;
        card: string;
        secondary: string;
        tertiary: string;
        border: string;
        hover: string;
    };
    dark: {
        primary: string;
        background: string;
        card: string;
        secondary: string;
        tertiary: string;
        border: string;
        hover: string;
    };
}

const colorSchemes: ColorScheme[] = [
    {
        name: 'Orange',
        light: {
            primary: 'hsl(32, 100%, 50%)',
            background: 'hsl(220, 20%, 98%)',
            card: 'hsl(0, 0%, 100%)',
            secondary: 'hsl(220, 9%, 35%)',
            tertiary: 'hsl(220, 9%, 46%)',
            border: 'hsl(216, 12%, 91%)',
            hover: 'hsl(220, 14%, 96%)',
        },
        dark: {
            primary: 'hsl(32, 100%, 50%)',
            background: 'hsl(222, 47%, 11%)',
            card: 'hsl(215, 28%, 17%)',
            secondary: 'hsl(220, 14%, 84%)',
            tertiary: 'hsl(220, 9%, 65%)',
            border: 'hsl(222, 15%, 27%)',
            hover: 'hsl(222, 15%, 27%)',
        }
    },
    {
        name: 'Blue',
        light: {
            primary: 'hsl(210, 100%, 50%)',
            background: 'hsl(210, 20%, 98%)',
            card: 'hsl(210, 25%, 100%)',
            secondary: 'hsl(210, 9%, 35%)',
            tertiary: 'hsl(210, 9%, 46%)',
            border: 'hsl(210, 12%, 91%)',
            hover: 'hsl(210, 14%, 96%)',
        },
        dark: {
            primary: 'hsl(210, 100%, 50%)',
            background: 'hsl(222, 47%, 11%)',
            card: 'hsl(215, 28%, 17%)',
            secondary: 'hsl(210, 14%, 84%)',
            tertiary: 'hsl(210, 9%, 65%)',
            border: 'hsl(222, 15%, 27%)',
            hover: 'hsl(222, 15%, 27%)',
        }
    },
    {
        name: 'Green',
        light: {
            primary: 'hsl(142, 76%, 36%)',
            background: 'hsl(140, 20%, 98%)',
            card: 'hsl(140, 25%, 100%)',
            secondary: 'hsl(140, 9%, 35%)',
            tertiary: 'hsl(140, 9%, 46%)',
            border: 'hsl(140, 12%, 91%)',
            hover: 'hsl(140, 14%, 96%)',
        },
        dark: {
            primary: 'hsl(142, 76%, 36%)',
            background: 'hsl(222, 47%, 11%)',
            card: 'hsl(215, 28%, 17%)',
            secondary: 'hsl(140, 14%, 84%)',
            tertiary: 'hsl(140, 9%, 65%)',
            border: 'hsl(222, 15%, 27%)',
            hover: 'hsl(222, 15%, 27%)',
        }
    },
    {
        name: 'Purple',
        light: {
            primary: 'hsl(280, 100%, 50%)',
            background: 'hsl(280, 20%, 98%)',
            card: 'hsl(280, 25%, 100%)',
            secondary: 'hsl(280, 9%, 35%)',
            tertiary: 'hsl(280, 9%, 46%)',
            border: 'hsl(280, 12%, 91%)',
            hover: 'hsl(280, 14%, 96%)',
        },
        dark: {
            primary: 'hsl(280, 100%, 50%)',
            background: 'hsl(222, 47%, 11%)',
            card: 'hsl(215, 28%, 17%)',
            secondary: 'hsl(280, 14%, 84%)',
            tertiary: 'hsl(280, 9%, 65%)',
            border: 'hsl(222, 15%, 27%)',
            hover: 'hsl(222, 15%, 27%)',
        }
    },
    {
        name: 'Red',
        light: {
            primary: 'hsl(0, 100%, 50%)',
            background: 'hsl(0, 20%, 98%)',
            card: 'hsl(0, 25%, 100%)',
            secondary: 'hsl(0, 9%, 35%)',
            tertiary: 'hsl(0, 9%, 46%)',
            border: 'hsl(0, 12%, 91%)',
            hover: 'hsl(0, 14%, 96%)',
        },
        dark: {
            primary: 'hsl(0, 100%, 50%)',
            background: 'hsl(222, 47%, 11%)',
            card: 'hsl(215, 28%, 17%)',
            secondary: 'hsl(0, 14%, 84%)',
            tertiary: 'hsl(0, 9%, 65%)',
            border: 'hsl(222, 15%, 27%)',
            hover: 'hsl(222, 15%, 27%)',
        }
    }
];

export const ColorPalette = () => {
    const { theme } = useTheme();

    const applyColorScheme = (scheme: ColorScheme) => {
        const root = document.documentElement;
        const colors = theme === 'dark' ? scheme.dark : scheme.light;

        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-card', colors.card);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-tertiary', colors.tertiary);
        root.style.setProperty('--color-border', colors.border);
        root.style.setProperty('--color-hover', colors.hover);

        // Store the selected color scheme in localStorage
        localStorage.setItem('selectedColorScheme', scheme.name);
    };

    useEffect(() => {
        // Load saved color scheme on mount
        const savedScheme = localStorage.getItem('selectedColorScheme');
        if (savedScheme) {
            const scheme = colorSchemes.find(s => s.name === savedScheme);
            if (scheme) {
                applyColorScheme(scheme);
            }
        }
    }, [theme]); // Re-run when theme changes

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 right-4 bg-card p-3 rounded-xl shadow-lg border border-border"
            role="toolbar"
            aria-label="Color theme selection"
        >
            <div className="flex gap-2">
                {colorSchemes.map((scheme) => (
                    <motion.button
                        key={scheme.name}
                        onClick={() => applyColorScheme(scheme)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-full shadow-md cursor-pointer transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        style={{
                            background: theme === 'dark' ? scheme.dark.primary : scheme.light.primary,
                            border: `2px solid ${theme === 'dark' ? scheme.dark.card : 'white'}`
                        }}
                        aria-label={`Switch to ${scheme.name} theme`}
                        title={`Switch to ${scheme.name} theme`}
                    />
                ))}
            </div>
        </motion.div>
    );
}; 