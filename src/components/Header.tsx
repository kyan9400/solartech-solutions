// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Dimage from "../assets/images/logo.png"; // Make sure this path is correct

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#team", label: "Our Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Assuming 'bg-dark' is a custom color you've defined in your tailwind.config.js
    // If not, you might want to use a standard Tailwind dark background like bg-gray-900 or bg-slate-900
    <header className="bg-dark dark:bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo / Site Name */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="block group"
              aria-label="SolarTech Solutions Home"
            >
              <img
                src={Dimage}
                alt="SolarTech Solutions Logo"
                className="h-8 sm:h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
            </a>
          </div>

          {/* Desktop Navigation - Edited with animated underline hover effect */}
          <nav className="hidden md:flex space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-medium text-brand-text dark:text-gray-300 transition-colors duration-300
                           hover:text-brand-blue dark:hover:text-brand-accent-glow
                           after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                           after:h-[2px] after:w-0 
                           after:bg-brand-blue dark:after:bg-brand-accent-glow 
                           after:transition-all after:duration-300 after:ease-out
                           hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-accent-glow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue dark:focus:ring-brand-accent-glow p-1 rounded-md"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-items"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu-items"
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-md overflow-hidden
                    transform transition-all duration-300 ease-in-out
                    ${
                      isMobileMenuOpen
                        ? "max-h-screen opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                    }`}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleMobileLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-text dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-brand-blue dark:hover:text-brand-accent-glow transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
