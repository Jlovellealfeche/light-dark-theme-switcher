import { createContext, useContext, useState } from "react";

const ThemeProvider = createContext(undefined);








export const ThemeProvider = ({ children }) => {
    const [theme] = useTheme({
        toogle(_light, _dark)

    })
    return <ThemeContext.Provider value={{ theme }}></ThemeContext.Provider>;

export const useTheme = () =>useContext({ theme: "light" });

