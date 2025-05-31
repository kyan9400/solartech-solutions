// src/components/HeroSection.tsx
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const alwaysOnGlowClass = "shadow-[0_0_8px_0px_rgba(52,211,153,0.4)]";
  const hoverGlowMoreClass = "hover:shadow-[0_0_15px_2px_rgba(52,211,153,0.6)]";

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40 transition-colors duration-300
                 bg-gradient-to-br from-white to-slate-100 text-slate-900
                 dark:from-[#192A56] dark:to-[#2F3640] dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8"
          variants={itemVariants}
        >
          <span className="text-slate-800 dark:text-[#E0E0E0]">
            Innovative Tech Solutions for{" "}
          </span>
          <span className="block md:inline text-black dark:text-white">
            Your Growing Business
          </span>
        </motion.h1>

        <motion.p
          className="max-w-lg md:max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-[#CBD5E1] opacity-95 mb-12"
          variants={itemVariants}
        >
          At SolarTech Solutions, our expert team delivers cutting-edge
          technology services tailored to meet your unique needs and drive
          success.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8"
          variants={itemVariants}
        >
          <a
            href="#services"
            className={`group relative inline-block text-lg font-semibold text-[#0052CC] px-10 py-4 bg-white rounded-lg 
                       ${alwaysOnGlowClass} ${hoverGlowMoreClass}
                       hover:bg-gray-50 
                       transition-all duration-300 ease-in-out
                       transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#34D399] focus:ring-opacity-50`}
            aria-label="Explore Our Services"
          >
            <span className="relative z-10">Our Services</span>
          </a>

          <a
            href="#contact"
            className={`group relative overflow-hidden inline-block text-lg font-semibold text-white px-10 py-4 bg-transparent border-2 border-[#34D399] rounded-lg 
                       ${alwaysOnGlowClass} ${hoverGlowMoreClass}
                       hover:bg-[#34D399]/20 hover:text-white hover:border-transparent 
                       transform hover:scale-105 transition-all duration-300 ease-in-out 
                       focus:outline-none focus:ring-4 focus:ring-[#34D399] focus:ring-opacity-50`}
            aria-label="Contact Us"
          >
            <span
              className="absolute top-0 left-0 block w-full h-full transform -translate-x-full skew-x-[-15deg]
                         bg-gradient-to-r from-transparent from-40% via-white/70 via-50% to-transparent to-60%
                         group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"
            ></span>
            <span className="relative z-10">Contact Us</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
