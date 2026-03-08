import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Page1Content = (props) => {
  return (
    <div className="flex items-start justify-between py-6 px-10 gap-6">
      <Leftside />
      <Rightside user={props.user} />
    </div>
  );
};

export default Page1Content;
