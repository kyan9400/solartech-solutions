import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Dimage from "../assets/images/logo.png";
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

  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src={Dimage}
            alt="SolarTech Solutions"
            className="h-10 w-auto dark:invert transition duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(id);
                }}
                className={`relative font-medium transition duration-300
                  ${
                    isActive
                      ? "text-blue-700 dark:text-emerald-400 after:w-full after:bg-blue-700 dark:after:bg-emerald-400"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400 after:w-0 hover:after:w-full after:bg-blue-600 dark:after:bg-emerald-400"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all`}
              >
                {label}
              </a>
            );
          })}
          <ThemeToggleButton />
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 transition"
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 px-6 py-4 space-y-2 transition-all border-t dark:border-slate-700">
          {navLinks.map(({ href, label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(id);
                }}
                className={`block text-base font-medium transition
                  ${
                    isActive
                      ? "text-blue-700 dark:text-emerald-400"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400"
                  }`}
              >
                {label}
              </a>
            );
          })}
          <div className="pt-2 border-t dark:border-slate-700">
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
