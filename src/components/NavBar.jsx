import React from "react";
import classes from "./NavBar.module.css";
import profileSvg from "../assets/profile.svg";
import gearSvg from "../assets/gear.svg";
import bellSvg from "../assets/bell.svg";

const navigations = ["Home", "About", "Work", "Pricing"];

const NavBar = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.wrap}>
        <li className={classes.title}>Demo Company</li>
        {navigations.map((navigation) => (
          <li className={classes.opacity} key={navigation}>
            <a href="#">{navigation}</a>
          </li>
        ))}
        <li>
          <a href="#" style={{ color: "var(--yellow-color)" }}>
            Blog
          </a>
        </li>
        <div className={classes.svgs}>
          <img src={gearSvg} className={classes.svg} alt="svg" />
          <img src={bellSvg} className={classes.svg} alt="svg" />
          <img src={profileSvg} className={classes.icon} alt="icon" />
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
