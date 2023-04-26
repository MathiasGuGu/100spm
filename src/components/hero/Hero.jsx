import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const Hero = () => {
  return (
    <div className=" w-screen h-[400px] relative flex flex-col gap-2">
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: [25, 50, 25] }}
          exit={{ x: -500 }}
          transition={{
            duration: 5,
            delay: 0.2,
            repeat: Infinity,
          }}
          className="w-64 h-32 rounded-xl bg-green-300"
        ></motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: [150, 75, 50, 75, 150] }}
          exit={{ x: -500 }}
          transition={{
            duration: 10,
            delay: 0.2,
            repeat: Infinity,
          }}
          className="w-64 h-32 rounded-xl bg-purple-300"
        ></motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: [50, 150, 25, 150, 50] }}
          exit={{ x: -500 }}
          transition={{
            duration: 10,
            delay: 0.2,
            repeat: Infinity,
          }}
          className="w-64 h-32 rounded-xl bg-red-300"
        ></motion.div>
        <motion.div className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="font-amatic text-6xl font-bold text-black  rotate-3  w-screen flex items-center justify-center ">
            100 spørsmål
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
