import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

interface SocialLink {
  name: string;
  href: string;
  icon?: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      size?: string | number;
    }
  >;
}

const socialLinksData: SocialLink[] = [
  { name: "Instagram", href: "#your-instagram-url", icon: FaInstagram },
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
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 text-gray-700 dark:bg-slate-900 dark:text-gray-300 transition-colors duration-500"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1 mb-10 xl:mb-0">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              SolarTech Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Innovative tech solutions for your growing business. We help you
              harness technology for success.
            </p>
            <div className="flex space-x-5">
              {socialLinksData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    {IconComponent && (
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Company
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SolarTech Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
