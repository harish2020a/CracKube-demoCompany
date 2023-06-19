import React from "react";
import NavBar from "./NavBar";
import classes from "./Header.module.css";
import btn1Svg from "../assets/btn1.svg";
import btn2Svg from "../assets/btn2.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavBar />
      <hr className={classes.line} />
      <h1 className={classes.title}>We tackle interesting topics every day</h1>
      <input className={classes.input} placeholder="Find Courses" />
      <div
        style={{ display: "inline-block", float: "right", marginRight: "30px" }}
      >
        <Button>
          <img src={btn1Svg} alt="btn" />
        </Button>
        <Button classProp="selected">
          <img src={btn2Svg} alt="btn" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
