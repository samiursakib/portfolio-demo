"use client";

import Image from "next/image";
import { properties } from "../lib/selfProperties";
import { useState } from "react";
import { motion } from "framer-motion";

const variantsMotion = {
  initial: {width: 0},
  animate: {width: "calc(100% - 0rem)"}
};

const AboutSection = () => {
  const [propertySelected, setPropertySelected] = useState('Skills');
  return (
    <div className="flex flex-col sm:flex-row mt-12 sm:space-x-8 items-center">
      <div className="w-full sm:w-1/2 mb-8 text-[#ADB7BE] text-md sm:text-lg md:text-xl">
        <h1 className="text-white font-extrabold text-lg">About Me</h1>
        <p className="mt-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore iure accusantium consectetur, ducimus at eos perferendis dolore magnam rerum vitae ullam corrupti eaque, totam debitis illum nobis quos quibusdam!</p>
        <div className="text-sm">
          <ul className="flex space-x-8 my-8">
            {Object.keys(properties).map(k => <li key={k.toLowerCase()} className={`${propertySelected === k ? 'text-white' : ''} hover:cursor-pointer`} onClick={() => setPropertySelected(k)}>{k}
              <motion.div variants={variantsMotion} animate={propertySelected === k ? "animate" : "initial"} className="h-1 bg-white mr-3"></motion.div>
            </li>)}
          </ul>
          <ul>
            {properties[propertySelected].map(el => <li key={el.toLowerCase()}>{el}</li>)}
          </ul>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-1/2">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default AboutSection;