"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const initialMotion = {
  opacity: 0,
  scale: 0.5
};

const animateMotion = {
  opacity: 1,
  scale: 1
};

const transitionMotion = {
  duration: 0.5
};

const HeroSection = () => {
  return (
    <motion.div initial={initialMotion} animate={animateMotion} transition={transitionMotion} className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-7 text-center sm:text-left">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Hi, I'm Nusrat Maisha</h1>
        <p className="text-[#ADB7BE] text-md sm:text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum facere alias quis aliquam sequi perferendis numquam, soluta, qui illo fugit fugiat.</p>
        <div className="my-5 flex flex-col sm:flex-row">
          <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-white text-[#121212] hover:bg-slate-200">Hire Me</button>
          <button className="px-6 py-3 rounded-full w-full sm:w-fit mt-4 sm:mt-0 border text-white hover:bg-[#151515]">Download CV</button>
        </div>
      </div>
      <div className="col-span-5 place-self-center">
        <div className="rounded-full w-[250px] h-[250px] bg-[#181818] mt-4">
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;