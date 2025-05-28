// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Dimage from "../assets/images/logo.png"; // Make sure this path is correct

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About Us", id: "about" },
  { href: "#services", label: "Our Services", id: "services" },
  { href: "#team", label: "Our Team", id: "team" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#contact", label: "Contact Us", id: "contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  // Effect for scroll-based header background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // Change background after 10px scroll
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Call it once on mount to set initial state based on scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for Intersection Observer and Resize (kept from previous)
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
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  // Determine base text color for links based on scroll and dark mode
  // When header is transparent (not scrolled) and not dark mode, links should be light (e.g., white)
  // When header is solid (scrolled) OR in dark mode (where header bg is white), links use brand-text/dark:text-gray-300
  const baseLinkTextColor = isScrolled
    ? "text-[#334155] dark:text-[#D1D5DB]" // For solid header background
    : "text-white dark:text-[#334155]"; // For transparent header (light text on dark hero, dark text on white dark-mode header)
  // You might need to adjust dark:text-[#334155] if your hero is also dark in dark mode.

  const hoverLinkTextColor = isScrolled
    ? "hover:text-[#0052CC] dark:hover:text-[#34D399]" // For solid header
    : "hover:text-gray-200 dark:hover:text-[#0052CC]"; // For transparent header

  const afterLinkBgColor = isScrolled
    ? "after:bg-[#0052CC] dark:after:bg-[#34D399]" // For solid header
    : "after:bg-white dark:after:bg-[#0052CC]"; // For transparent header (white underline on dark hero)

  const activeLinkTextColor = isScrolled
    ? "text-[#0052CC] dark:text-[#34D399]" // Active text on solid header
    : "text-gray-100 dark:text-[#0052CC]"; // Active text on transparent header

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out 
                  ${
                    isScrolled
                      ? "bg-dark dark:bg-white shadow-md"
                      : "bg-transparent shadow-none"
                  }`}
    >
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
                className="h-8 sm:h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const linkClassName = `
                relative font-medium 
                transition-colors duration-300 ease-out
                ${isActive ? activeLinkTextColor : baseLinkTextColor}
                ${!isActive ? hoverLinkTextColor : ""}
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                after:h-[2px] 
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                ${afterLinkBgColor}
                after:transition-all after:duration-300 after:ease-out
              `;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={linkClassName.trim().replace(/\s+/g, " ")} // Clean up multiline string
                  onClick={() => handleNavLinkClick(link.id)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button Styling needs to adapt to transparent header too */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-300
                          ${
                            isScrolled
                              ? "text-gray-500 dark:text-gray-400 hover:text-[#0052CC] dark:hover:text-[#34D399] focus:ring-[#0052CC] dark:focus:ring-[#34D399]"
                              : "text-white hover:text-gray-200 focus:ring-white" // Hamburger color when header is transparent
                          }`}
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

      {/* Mobile Menu Panel - background adapts based on scroll state if header is not transparent, or use a fixed scheme */}
      <div
        id="mobile-menu-items"
        className={`md:hidden absolute top-full left-0 right-0 shadow-lg rounded-b-md overflow-hidden
                    transform transition-all duration-300 ease-in-out
                    ${
                      isScrolled
                        ? "bg-white dark:bg-gray-800"
                        : "bg-black/50 backdrop-blur-md dark:bg-gray-800/80" // Example transparent state for mobile menu
                    }
                    ${
                      isMobileMenuOpen
                        ? "max-h-screen opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                    }`}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            // Mobile link colors need to be readable against their background
            const mobileLinkBaseTextColor = isScrolled
              ? "text-[#334155] dark:text-gray-200"
              : "text-white dark:text-gray-100";
            const mobileLinkHoverTextColor = isScrolled
              ? "hover:text-[#0052CC] dark:hover:text-[#34D399]"
              : "hover:text-gray-200 dark:hover:text-white";
            const mobileLinkActiveTextColor = isScrolled
              ? "text-[#0052CC] dark:text-[#34D399]"
              : "text-gray-100 dark:text-white";
            const mobileLinkActiveBg = isScrolled
              ? "bg-gray-100 dark:bg-gray-700"
              : "bg-white/10 dark:bg-white/5";

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavLinkClick(link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                           ${
                             isActive
                               ? `${mobileLinkActiveTextColor} ${mobileLinkActiveBg}`
                               : `${mobileLinkBaseTextColor} ${mobileLinkHoverTextColor} hover:bg-gray-100 dark:hover:bg-gray-700/50`
                           }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
