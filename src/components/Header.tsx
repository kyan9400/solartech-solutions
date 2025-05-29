// src/components/Header.tsx
import { useState, useEffect } from "react"; // useEffect is still used for resize and IntersectionObserver
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Dimage from "../assets/images/logo.png"; // Make sure this path is correct
import ThemeToggleButton from "./ThemeToggleButton";

const navLinks = [
  { href: "#about", label: "About Us", id: "about" },
  { href: "#services", label: "Our Services", id: "services" },
  { href: "#team", label: "Our Team", id: "team" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#contact", label: "Contact Us", id: "contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // REMOVED: const [isHeaderSolid, setIsHeaderSolid] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // REMOVED: useEffect for scroll-based header SOLID background change
  /*
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSolid(window.scrollY > 10); 
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  */

  // Effect for Intersection Observer and Resize (this one is still needed for active link highlighting)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const currentLinks = [...navLinks];
    currentLinks.forEach((link) => {
      const sectionElement = document.getElementById(link.id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      currentLinks.forEach((link) => {
        const sectionElement = document.getElementById(link.id);
        if (sectionElement) observer.unobserve(sectionElement);
      });
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up

  // Link styling logic now only depends on isActive and the current theme (light/dark)
  const getLinkStyling = (isActive: boolean) => {
    const baseClasses =
      "relative font-medium transition-colors duration-300 ease-out";
    const afterBaseClasses =
      "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:ease-out";

    let textClasses = "";
    let underlineClasses = "";

    // Styles for a solid header background (white in Light, slate-800 in Dark)
    if (isActive) {
      textClasses = "text-[#0052CC] dark:text-[#34D399]"; // Active: Brand Blue (L), Accent Glow (D)
      underlineClasses =
        "after:bg-[#0052CC] dark:after:bg-[#34D399] after:w-full after:h-[3px]"; // Active underline
    } else {
      textClasses =
        "text-slate-700 dark:text-slate-300 hover:text-[#0052CC] dark:hover:text-[#34D399]"; // Default: Slate, Hover: Brand Blue/Accent Glow
      underlineClasses =
        "after:bg-[#0052CC] dark:after:bg-[#34D399] after:w-0 after:h-[2px] hover:after:w-full"; // Hover underline
    }
    return `${baseClasses} ${textClasses} ${afterBaseClasses} ${underlineClasses}`;
  };

  // Header background now only depends on dark/light mode
  const headerClasses =
    "bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50 w-full transition-colors duration-300 ease-in-out";

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="block group"
              aria-label="SolarTech Solutions Home"
            >
              <img
                src={Dimage}
                alt="SolarTech Solutions Logo"
                className="h-8 sm:h-10 w-auto transition-opacity duration-300 group-hover:opacity-80 dark:brightness-0 dark:invert"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-7">
            <nav className="flex space-x-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={getLinkStyling(isActive)
                      .trim()
                      .replace(/\s+/g, " ")}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.id);
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-1 rounded-md text-slate-600 dark:text-slate-300 hover:text-[#0052CC] dark:hover:text-[#34D399] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0052CC] dark:focus:ring-[#34D399] transition-colors duration-300"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-items"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-7 w-7" />
              ) : (
                <Bars3Icon className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu-items"
        className={`md:hidden absolute top-full left-0 right-0 shadow-lg rounded-b-md overflow-hidden
                    transform transition-all duration-300 ease-in-out 
                    bg-white dark:bg-slate-800 /* Matches header solid background */
                    ${
                      isMobileMenuOpen
                        ? "max-h-screen opacity-100 visible py-2"
                        : "max-h-0 opacity-0 invisible py-0"
                    }`}
      >
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            let mobileLinkClassName =
              "block px-3 py-3 rounded-md text-base font-medium transition-colors ";
            mobileLinkClassName += isActive
              ? "text-[#0052CC] dark:text-[#34D399] bg-gray-100 dark:bg-slate-700" // Active mobile link
              : "text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-[#0052CC] dark:hover:text-[#34D399]"; // Non-active

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.id);
                }}
                className={mobileLinkClassName}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="px-5 py-3 border-t border-gray-200 dark:border-slate-700">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
