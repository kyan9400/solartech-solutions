// src/context/ThemeProvider.tsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "./themeShared";
import type { Theme } from "./themeShared";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Update the <html> tag class explicitly (not with toggle)
  const applyThemeToHtml = (theme: Theme) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  // On first load: read from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      applyThemeToHtml(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      applyThemeToHtml(initialTheme);
    }
  }, []);

  // When the user toggles the theme
  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeToHtml(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
