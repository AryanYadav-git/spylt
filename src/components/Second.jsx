import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text1 = "STIR UP YOUR FEARLESS PAST AND";
const text2 = "YOUR FUTURE WITH EVERY GULP OF PERFECT PROTEIN";

const Second = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress
  const [text1Complete, setText1Complete] = useState(false);

  return (
    <div className="relative flex flex-col gap-8 md:gap-16 justify-center items-center h-screen px-4 overflow-hidden">
      {/* First Animated Text */}
      <div className="text-6xl md:text-7xl lg:text-9xl font-bold text-center text-[#FCE6D2] lg:px-80">
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
              onUpdate={() => {
                if (index === text1.split(" ").length - 1) {
                  setText1Complete(true); // Set state when last word completes
                }
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>

      {/* "FUEL UP" Scroll Opening Effect - Appears After First Para Completes */}
      {text1Complete && (
        <motion.div
          initial={{ width: 0, rotate: 5, y: -50, opacity: 0 }}
          animate={{ width: "auto", opacity: 1, rotate: 5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute bg-[#d9995b] border-8 border-[#642B1D] shadow-lg overflow-hidden"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-extrabold text-[#642B1D] whitespace-nowrap mx-6 my-2 md:mx-12 md:my-4"
          >
            FUEL UP
          </motion.p>
        </motion.div>
      )}

      {/* Second Animated Text */}
      <div className="text-6xl md:text-7xl lg:text-9xl font-bold text-center text-[#FCE6D2] lg:px-52">
        {text2.split(" ").map((word, index) => {
          const color = useTransform(
            scrollYProgress,
            [0.5 + index * 0.05, 0.55 + index * 0.05],
            ["#8c4f42", "#eee"]
          );

          return (
            <motion.span key={index} style={{ color }} className="inline-block mx-2">
              {word}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Second;
