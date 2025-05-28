// src/components/TeamSection.tsx
import React from "react";
import { motion } from "framer-motion";
// UserCircleIcon can be removed if all members will have images, or kept as a fallback
// import { UserCircleIcon } from '@heroicons/react/24/outline';

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

interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string; // Added for actual images
  bio?: string;
}

// Updated teamData with placeholder imageUrls
// Replace these with paths to your actual images in your project
const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    title: "Founder & Lead Strategist",
    imageUrl: "https://via.placeholder.com/150/0052CC/FFFFFF?text=Evelyn", // Placeholder
    bio: "Visionary leader with 15+ years in tech innovation and strategic growth.",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Head of Engineering",
    imageUrl: "https://via.placeholder.com/150/1A202C/FFFFFF?text=Marcus", // Placeholder
    bio: "Expert in scalable architectures and leading high-performing development teams.",
  },
  {
    id: 3,
    name: "Aisha Khan",
    title: "Lead UX Designer",
    imageUrl: "https://via.placeholder.com/150/34D399/FFFFFF?text=Aisha", // Placeholder
    bio: "Passionate about creating intuitive and impactful user experiences that delight.",
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl text-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center" // Added items-center
      variants={contentAppearVariants}
    >
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-200 dark:border-gray-600">
        {/* Display actual image */}
        <img
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          className="w-full h-full object-cover"
        />
        {/* Fallback if imageUrl was optional and not provided:
         !member.imageUrl && <UserCircleIcon className="w-full h-full text-gray-400 dark:text-gray-500 p-2" /> 
        */}
      </div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {member.name}
      </h4>
      <p className="text-brand-blue dark:text-brand-accent-glow text-sm font-medium mb-2">
        {member.title}
      </p>
      {member.bio && (
        <p className="text-gray-600 dark:text-gray-300 text-xs leading-snug">
          {member.bio}
        </p>
      )}
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <motion.section
      id="team"
      className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={sectionStaggerContainerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 md:mb-16"
          variants={contentAppearVariants}
        >
          Meet Our Expert Team
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={sectionStaggerContainerVariants}
        >
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
