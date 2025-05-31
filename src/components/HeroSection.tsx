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

  const glowBase =
    "shadow-[0_0_8px_0px_rgba(52,211,153,0.4)] hover:shadow-[0_0_15px_2px_rgba(52,211,153,0.6)] transition-all duration-300";

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40 transition-colors duration-300
      bg-white text-slate-900 dark:bg-[#0F172A] dark:text-white"
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
          <span className="text-slate-800 dark:text-slate-200">
            Innovative Tech Solutions for{" "}
          </span>
          <span className="block md:inline text-[#0052CC] dark:text-[#34D399]">
            Your Growing Business
          </span>
        </motion.h1>

        <motion.p
          className="max-w-lg md:max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12"
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
            className={`group inline-block text-lg font-semibold px-10 py-4 
                        bg-white text-[#0052CC] dark:bg-slate-800 dark:text-[#34D399] 
                        rounded-lg border border-transparent dark:border-[#34D399]
                        hover:bg-slate-50 dark:hover:bg-slate-700 
                        ${glowBase}`}
            aria-label="Explore Our Services"
          >
            <span className="relative z-10">Our Services</span>
          </a>

          <a
            href="#contact"
            className={`group relative overflow-hidden inline-block text-lg font-semibold px-10 py-4 
                        text-white bg-[#34D399] dark:text-slate-900 dark:[#34D399] 
                        rounded-lg border border-transparent 
                        hover:bg-[#2EC4A0] dark:hover:bg-slate-200 
                        transform hover:scale-105 transition-all duration-300 ease-in-out 
                        focus:outline-none focus:ring-4 focus:ring-[#34D399] focus:ring-opacity-50
                        ${glowBase}`}
            aria-label="Contact Us"
          >
            {/* ✨ Shine effect animation */}
            <span
              className="absolute top-0 left-0 block w-full h-full transform -translate-x-full skew-x-[-15deg]
                         bg-gradient-to-r from-transparent via-white/70 to-transparent
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
