import React from "react";
import { motion } from "framer-motion";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

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

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  avatar?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with SolarTech Solutions was a game-changer for our business. Their expertise and dedication are unmatched. Highly recommended!",
    author: "Jane Doe",
    company: "CEO, Innovatech Ltd.",
  },
  {
    id: 2,
    quote:
      "The custom software solution they developed streamlined our operations significantly. The team was professional and delivered on time.",
    author: "John Smith",
    company: "Operations Manager, BuildRight Corp.",
  },
  {
    id: 3,
    quote:
      "Their IT consulting provided us with clear direction and helped us leverage new technologies effectively. A truly valuable partnership.",
    author: "Alice Brown",
    company: "Director, FutureScape LLC",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <motion.div
      variants={contentAppearVariants}
      className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all 
                 duration-300 flex flex-col justify-between h-full"
    >
      <ChatBubbleLeftEllipsisIcon className="w-10 h-10 text-brand-blue dark:text-brand-accent-glow mb-4" />
      <blockquote className="text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">
        “{testimonial.quote}”
      </blockquote>
      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
        <p className="font-semibold text-gray-900 dark:text-white">
          {testimonial.author}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={sectionStaggerContainerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4"
          variants={contentAppearVariants}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto"
          variants={contentAppearVariants}
        >
          We are proud to have partnered with amazing businesses and helped them
          achieve their goals.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionStaggerContainerVariants}
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
