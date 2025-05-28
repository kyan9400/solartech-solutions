// src/components/Header.tsx

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo / Site Name */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-brand-blue hover:text-brand-blue-hover transition-colors"
            >
              SolarTech Solutions
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-7">
            {" "}
            {/* Adjusted spacing */}
            <a
              href="#home"
              className="text-brand-text hover:text-brand-blue font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-brand-text hover:text-brand-blue font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-brand-text hover:text-brand-blue font-medium transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="text-brand-text hover:text-brand-blue font-medium transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button (placeholder) */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-brand-text-light hover:text-brand-blue focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
