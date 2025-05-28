// src/components/Header.tsx
import { useState, useEffect } from "react"; // useRef is no longer needed here
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Dimage from "../assets/images/logo.png"; // Make sure this path is correct

const navLinks = [
  { href: "#about", label: "About Us", id: "about" },
  { href: "#services", label: "Our Services", id: "services" },
  { href: "#team", label: "Our Team", id: "team" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#contact", label: "Contact Us", id: "contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Default to 'home'
  // Removed: const observerRefs = useRef<Map<string, IntersectionObserverEntry | null>>(new Map());

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    // Scrolling will be handled by the href="#"
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const sectionElement = document.getElementById(link.id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      navLinks.forEach((link) => {
        const sectionElement = document.getElementById(link.id);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <header className="bg-dark dark:bg-white shadow-md sticky top-0 z-50 w-full">
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
                ${
                  isActive
                    ? "text-[#0052CC] dark:text-[#34D399]" // Active text color
                    : "text-[#334155] dark:text-[#D1D5DB] hover:text-[#0052CC] dark:hover:text-[#34D399]"
                }
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                after:h-[2px] 
                after:bg-[#0052CC] dark:after:bg-[#34D399]
                after:transition-all after:duration-300 after:ease-out
                ${
                  isActive
                    ? "after:w-full" // Active underline always visible
                    : "after:w-0 hover:after:w-full"
                }
              `;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={linkClassName}
                  onClick={() => handleNavLinkClick(link.id)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-[#0052CC] dark:hover:text-[#34D399] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0052CC] dark:focus:ring-[#34D399] p-1 rounded-md"
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavLinkClick(link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                           ${
                             isActive
                               ? "text-[#0052CC] dark:text-[#34D399] bg-gray-100 dark:bg-gray-700"
                               : "text-[#334155] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#0052CC] dark:hover:text-[#34D399]"
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
