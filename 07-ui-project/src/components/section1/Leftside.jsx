import React from "react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";
const Leftside = () => {
  return (
    <div className="h-[70vh] w-1/4 flex flex-col justify-between">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default Leftside;
