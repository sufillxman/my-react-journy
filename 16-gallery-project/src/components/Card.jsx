import React from "react";

const Card = (props) => {
  if (props.userdata.length === 0) {
    return (
      <div className="col-span-full flex justify-center items-center py-20">
        <h2 className="text-zinc-400 text-2xl font-semibold tracking-widest animate-pulse">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <>
      {props.userdata.map((elm, id) => {
        return (
          <a key={id} href={elm.url} target="_blank" rel="noreferrer">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-900 transition-transform hover:-translate-y-2">
              <img
                src={elm.download_url}
                alt={elm.author}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-zinc-900">
                <h3 className="text-white font-medium truncate">
                  {elm.author}
                </h3>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Card;
