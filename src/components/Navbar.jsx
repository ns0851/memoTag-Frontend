import React, { useState } from 'react';
import { motion } from 'framer-motion';

import WaitlistForm from './WaitlistForm';

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
    // Close mobile menu when opening form
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define variants for the list items
  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative z-40">
      {/* Navbar */}
      <div className="bg-gradient-to-b from-[#dae1fd] to-[rgb(173,216,252)] flex flex-wrap justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-60">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center"
        >
          <img
            src="../../memotag-logo.svg"
            alt="Logo"
            className="w-24 sm:w-28 md:w-32"
          />
        </motion.div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <motion.ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 md:gap-5 items-center w-full md:w-auto mt-4 md:mt-0 bg-white md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none absolute md:static top-16 left-0 right-0 mx-4 md:mx-0 z-10`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {['Home', 'About', 'Work', 'Contact Us'].map((item) => (
            <motion.li
              key={item}
              className="transition-all hover:bg-blue-500 py-2 px-4 rounded cursor-pointer hover:text-white text-center w-full md:w-auto"
              variants={listItemVariants}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
          <motion.button
            onClick={toggleFormVisibility}
            className="bg-[#2f3e2e] text-white px-4 py-2 rounded-md hover:bg-[#3e543a] transition-all w-full md:w-auto"
            variants={listItemVariants}
            transition={{ duration: 0.5 }}
          >
            Join Us
          </motion.button>
        </motion.ul>
      </div>

      {/* Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 px-4">
          <div className="relative z-50 bg-white p-6 sm:p-8 rounded-lg shadow-lg md:w-full md:max-w-md">
            <WaitlistForm onClose={toggleFormVisibility} />
            <button
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
              onClick={toggleFormVisibility}
              aria-label="Close form"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;