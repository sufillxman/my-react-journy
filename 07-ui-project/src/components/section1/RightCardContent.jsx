import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className=" w-full h-full top-0 left-0 rounded-4xl absolute p-4 flex flex-col justify-between ">
      <h2 className="bg-white w-12 h-12 rounded-full font-bold flex justify-center items-center  text-3xl">
        {props.id + 1}
      </h2>
      <p className="text-white text-sm mt-20 font-medium leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim totam
        optio reprehenderit rerum, tempore minus!
      </p>
      <div className="flex justify-between items-center w-full mt-auto pt-4">
        
        <button
          style={{ backgroundColor: props.color }}
          className="px-4 py-1.5 rounded-full font-bold text-sm text-white shadow-md cursor-pointer"
        >
          {props.tag}
        </button>

       
        <button
          style={{ backgroundColor: props.color }}
          className="w-10 h-10 flex justify-center items-center rounded-full text-white shadow-md hover:scale-110 transition-transform cursor-pointer"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
