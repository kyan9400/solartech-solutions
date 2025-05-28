// src/components/TestimonialsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"; // Using a solid icon for quotes

// Animation variants (can be shared or moved to a central file)
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
  avatar?: string; // Optional avatar image URL
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with SolarTech Solutions was a game-changer for our business. Their expertise and dedication are unmatched. Highly recommended!",
    author: "Jane Doe",
    company: "CEO, Innovatech Ltd.",
    // avatar: '/path/to/jane-doe.jpg' // Example path
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
      className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-lg flex flex-col h-full" // Ensure cards have equal height in a grid row
    >
      <ChatBubbleLeftEllipsisIcon className="w-10 h-10 text-brand-blue dark:text-brand-accent-glow mb-4" />
      <blockquote className="text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      <div className="mt-auto border-t border-gray-200 dark:border-gray-600 pt-4">
        {/* Optional Avatar - Placeholder for now */}
        {/* {testimonial.avatar && (
          <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
        )} */}
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
      className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800" // Alternating background from About Us
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
          // This div itself will be staggered by the parent section.
          // If we want the cards inside this grid to stagger relative to each other,
          // this div should also use sectionStaggerContainerVariants.
          variants={sectionStaggerContainerVariants} // Making the grid a stagger container for the cards
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
