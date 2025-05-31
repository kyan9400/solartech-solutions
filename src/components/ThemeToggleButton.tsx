import { useContext } from "react";
import { ThemeContext } from "../context/themeShared";

const ThemeToggleButton = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, toggleTheme } = context;
  const isDark = theme === "dark";

  return (
    <label
      htmlFor="theme-toggle"
      className="relative w-[56px] h-[32px] block cursor-pointer select-none"
    >
      {/* Hidden checkbox input */}
      <input
        id="theme-toggle"
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        className="sr-only"
      />

      {/* Background */}
      <div className="absolute inset-0 rounded-full bg-[#969AA1] transition-colors duration-300 pointer-events-none" />

      {/* Knob with icon */}
      <div
        className={`absolute top-[4px] left-[4px] w-[24px] h-[24px] rounded-full transition-transform duration-300 
        ${isDark ? "translate-x-[24px] bg-black" : "translate-x-0 bg-white"}`}
      >
        <div className="flex items-center justify-center w-full h-full">
          {isDark ? (
            // Moon icon
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#969AA1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 12.79A9 9 0 0112.21 3a7 7 0 000 14 9 9 0 008.79-4.21z" />
            </svg>
          ) : (
            // Sun icon
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#969AA1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </div>
      </div>
    </label>
  );
};

export default ThemeToggleButton;
