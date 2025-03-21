import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "FREAKING DELICIOUS";

const Hero = () => {
  const { scrollY } = useScroll();

  // Hero section now scrolls 3x slower
  const slowScroll = useTransform(scrollY, (value) => value / 2);
  const tilt = useTransform(slowScroll, [0, 500], ["0deg", "7deg"]);
  const scale = useTransform(slowScroll, [0, 500], [1, 0.8]);

  return (
    <motion.div
      style={{
        rotate: tilt,
        scale: scale,
        transformOrigin: "top center",
      }}
      className="relative w-screen h-screen bg-black"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2%2F66ceef357d683ae03c80a20d_!!!hero_animation-transcode.mp4"
        autoPlay
        muted
        playsInline
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="text-center text-4xl md:text-7xl lg:text-8xl font-bold text-[#523122] font-body flex flex-wrap justify-center"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: [10, -10, 0],
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 1.2 + index * 0.02,
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.3, delay: 1.2, ease: "easeInOut" }}
            className="p-2 bg-[#f9e6d6] relative"
          >
            <p className="text-center text-4xl md:text-5xl lg:text-8xl font-bold bg-[#a26833] text-[#f9e6d6] font-body p-2.5">
              PROTEIN + CAFFEINE
            </p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-center text-sm md:text-base lg:text-lg"
        >
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 md:px-10 md:py-4 rounded-full bg-[#e3a458] text-secondary font-semibold text-sm md:text-lg"
        >
          CHUG A SPYLT
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero;
