import { createContext, useState, useEffect } from "react";

// create context
export const ThemeContext = createContext();

// Create provider components
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    // Load theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedTheme);
    }, [])

    // Save theme to local Storage
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    //  for toggle
    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    }

    // 
    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

};



