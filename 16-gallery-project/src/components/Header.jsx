import React from "react";
import Card from "./Card";

const Header = (props) => {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 border-b border-zinc-800 pb-6 gap-4">
        <h1 className="text-3xl font-bold text-white tracking-wide uppercase">
          sufill <span className="text-blue-500 uppercase">Gallery</span>
        </h1>
        <div className="bg-zinc-900 text-blue-400 px-5 py-2 rounded-full font-bold border border-zinc-800 shadow-inner">
          Page {props.index}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <Card userdata={props.userdata} />
      </div>
    </div>
  );
};

export default Header;
