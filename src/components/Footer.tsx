import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const brandColors: Record<string, string> = {
  Instagram: "#E4405F",
  Twitter: "#1DA1F2",
  LinkedIn: "#0077B5",
  GitHub: "#333333",
};

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const socialLinksData = [
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
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
      className="bg-gray-100 text-gray-700 dark:bg-slate-900 dark:text-gray-300 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info Section */}
          <motion.div
            className="space-y-6 xl:col-span-1 mb-10 xl:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              SolarTech Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Innovative tech solutions for your growing business. We help you
              harness technology for success.
            </p>
            <div className="flex space-x-5">
              {socialLinksData.map((item) => {
                const IconComponent = item.icon;
                const color = brandColors[item.name] || "#000";
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400"
                    whileHover={{
                      scale: 1.2,
                      y: -2,
                      color: color,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    <span className="sr-only">{item.name}</span>
                    {IconComponent && (
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Solutions Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
                variants={sectionVariants}
              >
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company Section */}
              <motion.div
                className="mt-12 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.3}
                variants={sectionVariants}
              >
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Company
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              variants={sectionVariants}
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
          variants={sectionVariants}
        >
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SolarTech Solutions. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
