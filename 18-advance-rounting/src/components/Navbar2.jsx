import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigat = useNavigate()
  return (
    <div className="py-5 px-4 bg-cyan-500 flex gap-10 font-bold text-2xl">
      <button
      onClick={()=>{
        navigat("/")
      }}
        className="cursor-pointer active:scale-95
      "
      >
        Retrun Home Page
      </button>
      <button
       onClick={()=>{
        navigat(-1)
      }}
        className="cursor-pointer active:scale-115 
    "
      >
        Back
      </button>
    </div>
  );
};

export default Navbar2;
