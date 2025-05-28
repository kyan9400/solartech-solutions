// src/components/AboutUsSection.tsx
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Animation variants
const sectionStaggerContainerVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const contentAppearVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface CoreValue {
  id: number;
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }
  >;
  title: string;
  description: string;
}

const coreValuesData: CoreValue[] = [
  {
    id: 1,
    icon: LightBulbIcon,
    title: "Innovation",
    description:
      "We constantly seek and implement cutting-edge solutions to complex challenges, driving progress for your business.",
  },
  {
    id: 2,
    icon: UserGroupIcon,
    title: "Client-Centric Approach",
    description:
      "Our clients are at the heart of everything we do. We are dedicated to ensuring tailored and effective outcomes.",
  },
  {
    id: 3,
    icon: ShieldCheckIcon,
    title: "Integrity & Transparency",
    description:
      "We operate with complete openness and uphold the highest ethical standards in all our partnerships and projects.",
  },
];

const AboutUsSection = () => {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-gray-800 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={sectionStaggerContainerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Reverted max-width if team section moved */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
          variants={contentAppearVariants}
        >
          About SolarTech Solutions
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto"
          variants={contentAppearVariants}
        >
          At SolarTech Solutions, we are passionate about harnessing the power
          of technology to drive growth and efficiency for businesses like
          yours. Our team of experts is dedicated to delivering cutting-edge
          solutions with a focus on quality, innovation, and client success.
        </motion.p>
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-10"
          variants={contentAppearVariants}
        >
          Our Core Principles
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          variants={sectionStaggerContainerVariants}
        >
          {coreValuesData.map((value) => (
            <motion.div
              key={value.id}
              className="group bg-gray-50 dark:bg-gray-700/60 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
              variants={contentAppearVariants}
            >
              <div className="flex-shrink-0 flex items-center justify-center mb-5 w-14 h-14 bg-brand-blue-light/50 dark:bg-brand-accent-glow/20 rounded-full group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                <value.icon
                  className="w-7 h-7 text-brand-blue dark:text-brand-accent-glow"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center md:text-left">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center md:text-left flex-grow">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
