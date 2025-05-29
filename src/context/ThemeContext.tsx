// src/context/ThemeContext.tsx
import { useState, useEffect } from "react"; // Removed unused createContext, useContext from here
import type { ReactNode } from "react";
// Import ThemeContext (the object) and Theme (the type 'light'|'dark') from themeShared
// ThemeContextType is not directly used as an annotation in THIS file.
import { ThemeContext, type Theme } from "./themeShared";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 'Theme' type is used here
    console.log("[ThemeContext] Initializing theme state...");
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      console.log("[ThemeContext] Stored theme in localStorage:", storedTheme);
      if (storedTheme) {
        return storedTheme;
      }
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      console.log("[ThemeContext] System prefers dark mode:", prefersDark);
      if (prefersDark) {
        return "dark";
      }
    }
    console.log("[ThemeContext] Defaulting to light theme");
    return "light";
  });

  useEffect(() => {
    console.log(`[ThemeContext] useEffect triggered. Current theme: ${theme}`);
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const oldTheme = theme === "light" ? "dark" : "light";
      root.classList.remove(oldTheme);
      root.classList.add(theme);
      console.log(
        `[ThemeContext] Applied class '${theme}' to <html>. Removed '${oldTheme}'. Current classes:`,
        root.className
      );
      localStorage.setItem("theme", theme);
      console.log(`[ThemeContext] Saved theme '${theme}' to localStorage.`);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log(
      "[ThemeContext] toggleTheme called. Current theme before toggle:",
      theme
    );
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log(
        `[ThemeContext] Theme changing from ${prevTheme} to ${newTheme}`
      );
      return newTheme;
    });
  };

  console.log("[ThemeContext] ThemeProvider rendering with theme:", theme);

  return (
    // ThemeContext (the object itself) is imported from themeShared.ts
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
