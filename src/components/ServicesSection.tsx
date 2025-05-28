// src/components/ServicesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  ArrowLongRightIcon, // For the "Learn More" link
} from "@heroicons/react/24/outline";

interface Service {
  id: number;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  learnMoreLink?: string; // Optional link for the service
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: ComputerDesktopIcon,
    title: "Custom Web Development",
    description:
      "Building responsive, high-performance websites tailored to your business needs using modern technologies.",
    learnMoreLink: "#web-development-details", // Example link
  },
  {
    id: 2,
    icon: CloudArrowUpIcon,
    title: "Cloud Solutions & DevOps",
    description:
      "Leverage the power of the cloud with our expert DevOps practices for scalable and reliable infrastructure.",
    learnMoreLink: "#cloud-solutions-details",
  },
  {
    id: 3,
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Development",
    description:
      "Engaging and intuitive mobile applications for iOS and Android platforms to connect with your users.",
    learnMoreLink: "#mobile-apps-details",
  },
  {
    id: 4,
    icon: ChatBubbleLeftRightIcon,
    title: "IT Consulting & Strategy",
    description:
      "Expert guidance to optimize your IT strategy, improve efficiency, and drive innovation.",
    learnMoreLink: "#it-consulting-details",
  },
];

// Animation variants (remain the same)
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl shadow-lg 
                 border border-transparent hover:border-brand-blue dark:hover:border-brand-accent-glow 
                 transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-2 hover:shadow-2xl 
                 flex flex-col items-center text-center h-full" // Added h-full for consistent card height if in grid
    >
      {/* Icon with a subtle background */}
      <div className="mb-6 p-4 bg-brand-blue-light/30 dark:bg-brand-accent-glow/10 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
        <IconComponent
          className="w-10 h-10 sm:w-12 sm:h-12 text-brand-blue dark:text-brand-accent-glow"
          aria-hidden="true"
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
        {/* Added flex-grow to push "Learn More" down if cards have different text lengths */}
        {service.description}
      </p>

      {/* Learn More Link */}
      {service.learnMoreLink && (
        <a
          href={service.learnMoreLink}
          className="inline-flex items-center text-brand-blue dark:text-brand-accent-glow font-semibold group-hover:underline mt-auto"
          // mt-auto pushes it to the bottom if flex-grow is on paragraph
        >
          Learn More
          <ArrowLongRightIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
            variants={cardVariants}
          >
            Our Comprehensive Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            We offer a wide range of technology solutions to power your growth
            and success. Explore what we can do for you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={sectionVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10"
          // Consider lg:grid-cols-3 or 4 if you have more services or want smaller cards
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
