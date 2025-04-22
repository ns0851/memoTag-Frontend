import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SolutionCard from '../components/SolutionCard';

// Variants for title animation (opacity + displacement)
const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Variants for card animation (opacity + displacement)
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Variants for blob animation (subtle opacity)
const blobVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.3,
    transition: { duration: 1, ease: 'easeIn' },
  },
};

const Solution = () => {
  // Ref for the section
  const ref = useRef(null);
  // Detect when section is in view
  const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden"
    >
      {/* 💫 Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] bg-[#c2e9ff] opacity-30 rounded-full mix-blend-multiply blur-3xl animate-float1 -top-40 -left-40"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={blobVariants}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-[#a8d0e6] opacity-30 rounded-full mix-blend-multiply blur-3xl animate-float2 -bottom-32 -right-32"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={blobVariants}
        />
      </div>

      {/* Title */}
      <motion.h2
        className="text-6xl font-bold text-[#205781] mb-12 z-10 relative"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={titleVariants}
      >
        Smart Care Solutions
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="z-10 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.4, // Delay cards after title
              staggerChildren: 0.2, // Stagger each card
            },
          },
        }}
      >
        <motion.div variants={cardVariants}>
          <SolutionCard
            heading={'Fall Detection and GPS - Geofencing'}
            info={
              'Helps prevent patients from entering restricted or unsafe areas by setting virtual boundaries, while instantly detecting falls for quick response.'
            }
            path={"../../location.png"}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <SolutionCard
            heading={'AI - Powered Analysis'}
            info={
              'AI analyzes physical and cognitive data to predict potential risks like falls or decline early, by spotting patterns over time.'
            }
            path={"../../aiAnalysis.webp"}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <SolutionCard
            heading={'Custom Health Reports'}
            info={
              'We create clear weekly or monthly reports, summarizing activity, cognitive data, and behavior trends to show overall health.'
              
            }
            path={"../../healthReport.jpg"}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <SolutionCard
            heading={'Virtual Assistant and Care Recommendations'}
            info={
              "The virtual assistant is designed to simplify complex health data into understandable summaries and delivers personalized care tips based on the patient's health history and patterns."
            }
            path={"../../virtualAssistant.jpg"}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Solution;