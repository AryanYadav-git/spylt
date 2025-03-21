import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./components/Hero";
import Second from "./components/Second";

const App = () => {
  const { scrollY } = useScroll();
  const secondaryY = useTransform(scrollY, [0, 1000], ["0%", "-40%"]); 

  return (
    <div className="w-screen min-h-screen bg-black font-body">
      <Hero />
      <motion.div
        style={{ y: secondaryY }}
        className="relative w-screen h-screen bg-[#7f3b2d] z-10"
      >
        <Second/>
      </motion.div>
    </div>
  );
};

export default App;
