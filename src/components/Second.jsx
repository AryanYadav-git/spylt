import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text1 = "STIR UP YOUR FEARLESS PAST AND";
const text2 = "YOUR FUTURE WITH EVERY GULP OF PERFECT PROTEIN";

const Second = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  return (
    <div className="flex flex-col gap-6 md:gap-12 justify-center items-center h-screen px-4">

      <div className="text-6xl md:text-7xl lg:text-9xl font-semibold text-center lg:px-80">
        {text1.split(" ").map((word, index) => {
          const color = useTransform(
            scrollYProgress,
            [0.2 + index * 0.05, 0.25 + index * 0.05], 
            ["#8c4f42", "#eee"] 
          );

          return (
            <motion.span
              key={index}
              style={{ color }}
              className="inline-block mx-2"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
      <div className=""></div>

      <div className="text-6xl md:text-7xl lg:text-9xl font-semibold text-center lg:px-52">
        {text2.split(" ").map((word, index) => {
          const color = useTransform(
            scrollYProgress,
            [0.5 + index * 0.05, 0.55 + index * 0.05],
            ["#8c4f42", "#eee"]
          );

          return (
            <motion.span
              key={index}
              style={{ color }}
              className="inline-block mx-2"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Second;
