import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Element } from 'react-scroll';
import { motion, useInView } from 'framer-motion';
import WaitlistForm from "../components/WaitlistForm"; // Ensure this path is correct

// --- Variants remain the same ---
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const orVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.4, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const blobVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.3, transition: { duration: 1, ease: 'easeIn' } },
};
const waitlistVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -150px 0px' }); // Adjusted margin

  const handleRegister = async (e) => {
    e.preventDefault();
    // Basic Validation
    if (!username || !email || !phonenumber) {
       toast.warn("Please fill in all fields.");
       return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        toast.warn("Please enter a valid email address.");
        return;
    }
    try {
      // Ensure your backend URL is correct and running
      await axios.post("http://localhost:5000/api/users", {
        username,
        email,
        phonenumber,
      });
      toast.success("Pre-Booking Successful!");
      setUsername("");
      setEmail("");
      setPhonenumber("");
    } catch (error) {
      console.error("Error while registering:", error?.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    // Use min-h-screen for flexibility, add vertical padding for mobile stacking
    <motion.div
      ref={ref}
      className="min-h-screen w-full bg-[#e1e6b7] flex items-center justify-center relative overflow-hidden py-16 md:py-0"
    >
      {/* --- Animated Background Blobs (Responsive adjustments) --- */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#c2e9a8] opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-[float1_10s_ease-in-out_infinite] -top-20 -left-20 md:-top-32 md:-left-40"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={blobVariants}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#ffe08c] opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-[float2_14s_ease-in-out_infinite] top-[40%] right-[-50px] md:top-[30%] md:right-[-100px]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ ...blobVariants, visible: { ...blobVariants.visible, opacity: 0.2 } }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#d3a5ff] opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-[float1_12s_ease-in-out_infinite] bottom-[-40px] left-[20%] md:bottom-0 md:left-[30%]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ ...blobVariants, visible: { ...blobVariants.visible, opacity: 0.2 } }}
        />
      </div>

      {/* --- Main Content Wrapper (Responsive layout) --- */}
      <motion.div
        // Mobile: flex-col, centered items, vertical gap
        // Medium+: flex-row, space-between items, horizontal gap
        className={`relative z-10 flex flex-col md:flex-row w-full max-w-7xl items-center md:items-stretch justify-center md:justify-between gap-12 md:gap-8 px-6 md:px-10 lg:px-16 transition-all duration-300 ${
          formVisible ? "filter blur-md pointer-events-none" : "" // Blur background when modal is visible
        }`}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.3 } },
        }}
      >
        {/* --- Left Text Section (Responsive alignment and size) --- */}
        <motion.div
          // Mobile: Text center, items center
          // Medium+: Text left, items start
          className="w-full md:w-1/2 lg:flex-1 flex flex-col items-center text-center md:items-start md:text-left justify-center md:pr-6 text-[#2f3e2e] order-1"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            // Responsive text size
            className="text-4xl sm:text-5xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-md"
            variants={textVariants}
          >
            Begin Your Wellness Journey
          </motion.h2>
          <motion.p
            // Responsive text size
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-md"
            variants={textVariants}
          >
            Join caregivers transforming lives with the support of{" "}
            <span className="font-semibold text-blue-500">MemoTag</span> —
            smart, intuitive, and always there when you need it.
          </motion.p>
          <motion.button
            className="bg-[#2f3e2e] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#3e543a] transition-colors duration-200 w-fit"
            onClick={toggleFormVisibility}
            variants={textVariants}
          >
            Join Waitlist
          </motion.button>
        </motion.div>

        {/* --- "OR" Divider (Hidden on mobile) --- */}
        <motion.div
          className="hidden md:flex flex-col items-center justify-center px-4 order-2"
          variants={orVariants}
        >
          <div className="text-[#2f3e2e] opacity-40 font-semibold text-3xl lg:text-5xl">OR</div>
        </motion.div>

        {/* --- Right Form Section (Responsive width and padding) --- */}
        <motion.div
          // Mobile: Full width with max-width
          // Medium+: Takes up available space
          className="w-full max-w-md md:w-1/2 lg:flex-1 bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl self-center order-3"
          variants={textVariants} // Simple fade+slide in
        >
          <p className="text-sm text-[#2f3e2e] mb-6 font-medium text-center tracking-wide">
            Start your journey now - <span className="font-bold">PreOrder</span>
          </p>
          {/* Element for react-scroll target */}
          <Element name="enterEmail">
             {/* Attach onSubmit to the form tag */}
            <form className="space-y-5 md:space-y-6 text-[#2f3e2e]" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                required // Add basic browser validation
                className="w-full px-5 py-3 rounded-md bg-white bg-opacity-40 placeholder-[#4a5c48] focus:outline-none focus:ring-2 focus:ring-[#2f3e2e]/80 transition-all"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                className="w-full px-5 py-3 rounded-md bg-white bg-opacity-40 placeholder-[#4a5c48] focus:outline-none focus:ring-2 focus:ring-[#2f3e2e]/80 transition-all"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel" // Use type="tel" for phone numbers
                value={phonenumber}
                placeholder="Phone Number"
                required
                className="w-full px-5 py-3 rounded-md bg-white bg-opacity-40 placeholder-[#4a5c48] focus:outline-none focus:ring-2 focus:ring-[#2f3e2e]/80 transition-all"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <button
                type="submit" // This will now trigger the form's onSubmit
                className="w-full bg-[#2f3e2e] text-white font-semibold py-3 rounded-md hover:bg-[#3e543a] transition-colors duration-200"
              >
                Pre-Order
              </button>
            </form>
          </Element>

          <a
            href="#" // Consider linking this somewhere or making it a button
            className="block mt-6 text-xs text-[#2f3e2e] hover:text-[#1a2419] underline text-center transition-colors"
          >
            Join Free 30 Days Trial?
          </a>
        </motion.div>
      </motion.div>

      {/* --- WaitlistForm Modal (Responsive and centered) --- */}
      {formVisible && (
        <motion.div
          // Fixed position covers viewport, uses flex to center modal
          className="fixed inset-0 z-30 -left-[100px] flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Requires wrapping in <AnimatePresence> for exit anim
        >
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-xl relative w-[60%] md:w-[30%] mx-auto"
            initial="hidden"
            animate="visible"
            variants={waitlistVariants}
          >
            <WaitlistForm onClose={toggleFormVisibility} />
            {/* Close button: Better positioning and styling */}
            <button
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-600 transition-colors"
              onClick={toggleFormVisibility}
              aria-label="Close waitlist form" // Accessibility
            >
              × {/* HTML entity for 'X' */}
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* --- Keyframes remain the same --- */}
      <style jsx>{`
        @keyframes float1 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-25px) translateX(20px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(30px) translateX(-25px); } }
      `}</style>
    </motion.div>
  );
};

export default Register;