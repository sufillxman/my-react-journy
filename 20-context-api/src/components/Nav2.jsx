import React from "react";
import { useContext } from "react";
import { ThemDataContext } from "../context/ThemData";


const Nav2 = () => {
    const data = useContext(ThemDataContext);
  return (
    <div className="nav2">
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Servise</h3>
      <h3>Contact</h3>
      <h3>{data}</h3>
    </div>
  );
};

export default Nav2;
