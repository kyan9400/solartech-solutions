// src/components/Footer.tsx
// Removed: import React from 'react'; // Not needed

// 1. Import desired social media icons from react-icons
// Example: Using Font Awesome icons (fa)
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

interface SocialLink {
  name: string;
  href: string;
  icon?: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      size?: string | number;
    }
  >; // Updated type for react-icons
}

// 2. Update socialLinksData to use the imported icon components
const socialLinksData: SocialLink[] = [
  { name: "Facebook", href: "#your-facebook-url", icon: FaFacebookF },
  { name: "Twitter", href: "#your-twitter-url", icon: FaTwitter },
  { name: "LinkedIn", href: "#your-linkedin-url", icon: FaLinkedinIn },
  { name: "GitHub", href: "#your-github-url", icon: FaGithub },
];

const footerNavigation = {
  solutions: [
    { name: "Web Development", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "IT Consulting", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" }, // Placeholder link
    { name: "Terms of Service", href: "#" }, // Placeholder link
  ],
};

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 dark:bg-slate-900 text-gray-300 dark:text-gray-400"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1 mb-10 xl:mb-0">
            <h3 className="text-2xl font-semibold text-white">
              SolarTech Solutions
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-base leading-relaxed">
              Innovative tech solutions for your growing business. We help you
              harness technology for success.
            </p>
            <div className="flex space-x-6">
              {socialLinksData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300 dark:hover:text-white transition-colors duration-200"
                    target="_blank" // Good practice for external social links
                    rel="noopener noreferrer" // Security for target="_blank"
                  >
                    <span className="sr-only">{item.name}</span>
                    {IconComponent ? (
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      // Fallback text, though now we expect icons
                      <span className="text-xs uppercase font-semibold tracking-wider">
                        {item.name.substring(0, 2)}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase dark:text-gray-300">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase dark:text-gray-300">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase dark:text-gray-300">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 dark:border-gray-600 pt-8">
          <p className="text-base text-gray-400 dark:text-gray-500 xl:text-center">
            &copy; {new Date().getFullYear()} SolarTech Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
