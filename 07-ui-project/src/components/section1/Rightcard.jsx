// Rightcard.jsx
import React from "react";
import RightCardContent from "./RightCardContent";

const Rightcard = (props) => {
  return (
    <div className="w-50 mx-3 h-90 mt-3 relative rounded-4xl shrink-0 group hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
      <img
        className="h-full w-full object-cover overflow-hidden rounded-4xl "
        src={props.img}
        alt=""
      />
      {/* Image ke baad ye chipka de */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-4xl"></div>
      <RightCardContent color={props.color} tag={props.tag} id={props.id} />
    </div>
  );
};

export default Rightcard;
