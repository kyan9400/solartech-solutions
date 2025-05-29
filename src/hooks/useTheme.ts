// src/hooks/useTheme.ts
import { useContext } from "react";
// Import from the new shared file
import { ThemeContext } from "../context/themeShared";
import type { ThemeContextType } from "../context/themeShared";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
