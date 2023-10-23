"use client";

import ReactAnimatedNumber from "react-animated-numbers";
import Motion from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedNumber = dynamic(() => {
  return import("react-animated-numbers");
}, { ssr: false });

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+"
  },
  {
    metric: "Users",
    value: "70,000",
    prefix: "~"
  },
  {
    metric: "Awards",
    value: "6"
  },
  {
    metric: "Years",
    value: "5",
    postfix: "+"
  }
];

const Achievements = () => {
  return (
    <div className="mt-12 p-4 text-white border border-[#222] flex justify-between rounded-sm">
      {achievementsList.map((achievement, index) => {
        return (
          <div key={index} className="flex flex-col items-center justify-center">
            <h1 className="flex flex-row font-bold text-xl">
              {achievement.prefix}
              <AnimatedNumber
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className=""
                config={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * ( index + 1)
                })}
              />
              {achievement.postfix}
            </h1>
            <p className="text-[#ADB7BE] text-sm">{achievement.metric}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Achievements;