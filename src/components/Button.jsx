import React, { useEffect, useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [btnClass, setBtnClass] = useState(classes.btn);
  
  const btnClassHandler = () => {
    setBtnClass((prevState) => prevState + " " + classes.selected);
  };

  useEffect(() => {
    if (props.classProp) btnClassHandler();
  }, []);

  return (
    <button className={btnClass} onClick={btnClassHandler}>
      {props.children}
    </button>
  );
};

export default Button;
