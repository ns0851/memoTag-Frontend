import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DementiaBarGraph from "../components/DementiaBarGraph";
import InsightsPieChart from "../components/InsightsPieChart";

// Variants for text animations (opacity + displacement)
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Variants for graph animations (opacity + slight scale)
const graphVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants for arrow animation (opacity + rotation)
const arrowVariants = {
  hidden: { opacity: 0, rotate: 6 },
  visible: {
    opacity: 0.25,
    rotate: 6,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

const ProblemSection = () => {
  // Refs for the two sections
  const topSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);

  // Detect when each section is in view
  const topInView = useInView(topSectionRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
  const bottomInView = useInView(bottomSectionRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  });

  // Debug: Log bottomInView state
  console.log("bottomInView:", bottomInView);

  return (
    <div className="bg-[#98D2C0] min-h-screen min-w-screen justify-center items-center relative flex flex-col gap-[5vh]">
      <div>
        <motion.img
          className="absolute opacity-25 md:left-0 -left-10 -top-4 md:top-[-3vh] rotate-6"
          src="../../arrow.png"
          alt=""
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={arrowVariants}
        />
      </div>

      <motion.div
        ref={topSectionRef}
        className="flex flex-col md:flex-row gap-5 items-center justify-center relative top-14"
        initial="hidden"
        animate={topInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {topInView ? (
          <motion.div variants={graphVariants} className="">
            <DementiaBarGraph />
          </motion.div>
        ) : (
          <div className="w-[300px] h-[200px] bg-gray-200 flex items-center justify-center">
            Bar Graph Placeholder
          </div>
        )}
        <motion.p
          className="text-blue-700 text-2xl md:text-5xl relative left-0 md:left-10 font-bold text-center"
          variants={textVariants}
        >
          Millions are impacted by dementia <br /> across the globe
        </motion.p>
      </motion.div>

      <motion.div
        ref={bottomSectionRef}
        className="flex items-center justify-center relative top-0 left-20 p-5 gap-[1vw]"
        initial="hidden"
        animate={bottomInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          className="text-blue-700 text-xl md:left-0 -left-20 md:text-4xl font-bold text-center flex flex-col items-center justify-center gap-10 relative"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div variants={textVariants}>
            <p className=" md:text-blue-700 text-green-800 md:text-5xl text-3xl underline">Our Work</p>
          </motion.div>
          <motion.div
            className="flex gap-2 md:gap-10"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div variants={textVariants}>
              <div>35,000+</div>
              <div>Hospitals & Patient Network</div>
            </motion.div>
            <motion.div variants={textVariants}>
              <div>10,000+</div>
              <div>Insights Collected</div>
            </motion.div>
            <motion.div variants={textVariants}>
              <div>500+</div>
              <div>Lives Impacted</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={graphVariants} className="min-w-[50vw] hidden md:block in-h-[20vh] relative">
          <InsightsPieChart />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProblemSection;
