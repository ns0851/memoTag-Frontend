import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx'; // Assuming Button.jsx is in ../components/
import Blob from '../components/Blob.jsx'; // Assuming Blob.jsx is in ../components/
import { scroller } from 'react-scroll';

// Variants for text animations (opacity + displacement)
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Variants for image and blob animations (simple opacity)
const imageBlobVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  const scrollToBottom = () => {
    scroller.scrollTo("enterEmail", { // Make sure you have an element with name="enterEmail"
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    // --- Main Container ---
    // Default (mobile): flex-col, centered, padding
    // Medium screens+ (md:): flex-row, space-between
    <div className='min-h-[75vh] w-full relative flex flex-col md:flex-row justify-center md:justify-between items-center overflow-hidden bg-gradient-to-b from-[rgb(173,216,252)] to-[#3A59D1] px-4 md:px-8 lg:px-16'>

      {/* --- Left text section --- */}
      {/* Default (mobile): full width, centered text/items */}
      {/* Medium screens+ (md:): half width, left-aligned text/items, padding left */}
      <motion.div
        className='w-full md:w-1/2 flex flex-col text-center md:text-left gap-5 justify-center items-center md:items-start z-20 py-10 md:py-0 md:pl-10 lg:pl-20 xl:pl-32'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.h1
          // Responsive text size
          className='text-white font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Every Memory Matters
        </motion.h1>
        <motion.p
          // Responsive text size
          className='text-white text-xl sm:text-2xl lg:text-3xl max-w-lg md:max-w-none' // Limit width on mobile for readability
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Empowering dementia care through AI, compassion, and connection
        </motion.p>
        <motion.div
          onClick={scrollToBottom} // Keep using the function reference
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='cursor-pointer' // Add cursor pointer for better UX
        >
          <Button text={"Pre-Order"} />
        </motion.div>
      </motion.div>

      {/* --- Right image and blob section --- */}
      {/* Default (mobile): hidden */}
      {/* Medium screens+ (md:): visible, flex, half width */}
      <div className='hidden md:flex relative md:w-1/2 h-full justify-end items-center'>
        {/* Blob in the background */}
        <motion.div
          // Adjusted positioning for responsiveness
          className='absolute w-full top-[-120px] hidden md:block z-0 pointer-events-none'
          initial="hidden"
          animate="visible"
          variants={imageBlobVariants}
          transition={{ duration: 1, delay: 1.5, ease: "easeIn" }}
        >
          <Blob />
        </motion.div>

        {/* Image on top of blob */}
        <motion.img
          src="/logo.png" // Use root-relative path if logo.png is in the public folder
          // Or use: import logoSrc from '../../logo.png'; and src={logoSrc}
          alt="Spinning Logo"
          // Responsive width, max-w prevents it getting too huge
          className='w-[70vw] hidden md:block animate-spin-slow relative z-10'
          initial="hidden"
          animate="visible"
          variants={imageBlobVariants}
          transition={{ duration: 1, delay: 1.7, ease: "easeIn" }}
        />
      </div>
    </div>
  );
};

export default Hero;