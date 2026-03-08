// Rightside.jsx
import React from "react";
import Rightcard from "./Rightcard";

const Rightside = (props) => {
  return (
    <div id='right' className="h-[70vh] w-3/4 flex flex-nowrap overflow-x-auto rounded-4xl">
      {props.user.map(function (elm, id) {
        // DEKH YAHAN: elm.tag aur id bhej raha hu ab
        return <Rightcard key={id} color={elm.color} img={elm.img} tag={elm.tag} id={id} />;
      })}
    </div>
  );
};

export default Rightside;