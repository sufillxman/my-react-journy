import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-10 px-16 ">
      <h4 className="bg-black text-white py-2 px-5 rounded-full cursor-pointer">
        TARGET AUDIENCE
      </h4>
      <button className="px-5 py-2 bg-gray-200 rounded-full text-sm tracking-widest cursor-pointer uppercase">
        Digital Banking paltform
      </button>
    </div>
  );
};

export default Navbar;
