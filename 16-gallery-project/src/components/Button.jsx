import React from "react";

const Button = (props) => {
  return (
    <div className="max-w-7xl mx-auto w-full flex justify-center items-center gap-6 mt-16 mb-6">
      <button
        onClick={() => {
          if (props.index > 1) {
            props.setUserdata([]);
            props.setIndex(props.index - 1);
          }
        }}
        disabled={props.index === 1}
        className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
          props.index === 1
            ? "bg-zinc-900 border border-zinc-800 text-zinc-600 cursor-not-allowed"
            : "bg-zinc-800 hover:bg-blue-600 text-white shadow-lg border border-zinc-700 hover:border-blue-500"
        }`}
      >
        Previous
      </button>

      <button
        onClick={() => {
          props.setUserdata([]);
          props.setIndex(props.index + 1);
        }}
        className="px-8 py-3 rounded-xl font-bold bg-zinc-800 hover:bg-blue-600 text-white shadow-lg border border-zinc-700 hover:border-blue-500 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Button;
