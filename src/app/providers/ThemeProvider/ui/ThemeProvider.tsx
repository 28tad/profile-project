import { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext,
} from '@/app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme
}

export const ThemePorvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    document.body.className = defaultTheme;

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
