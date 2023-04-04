//step ONE

import { createContext, useContext, useState } from "react";



const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
            }}
        >
         {children}
        </ThemeContext.Provider>
    );
};


//This is for  Step 2


export const useTheme = () =>useContext(ThemeContext);







