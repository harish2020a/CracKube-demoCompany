import React from "react";
import classes from "./Body.module.css";
import Posts from "./Posts";

const links = [
  "Technology",
  "Education",
  "Lifestyle",
  "Healthcare",
  "Sport",
  "Food",
];

const Body = () => {
  return (
    <div className={classes.body}>
      <ul>
        <li key="All" className={classes.nav + " " + classes.selected}>
          <a className={classes.selected} href="#">All</a>
        </li>
        {links.map((link) => (
          <li key={link} className={classes.nav}>
            <a href="#" className={classes.link}>{link}</a>
          </li>
        ))}
      </ul>
      <Posts />
    </div>
  );
};

export default Body;
