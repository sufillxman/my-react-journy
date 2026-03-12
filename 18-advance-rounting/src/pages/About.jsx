import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex justify-center px-5 py-5 gap-6 font-bold text-xl">
        <Link to="/about/page1">Page1</Link>
        <Link to="/about/page2">Page2</Link>
      </div>
    
      <Outlet />
    </div>
  );
};

export default About;
