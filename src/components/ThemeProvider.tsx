import { createContext, useEffect, useState, ReactNode } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(
        (typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') ? 'dark' : 'light'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}