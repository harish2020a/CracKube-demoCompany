import React from "react";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.post.image} alt="image" />
      <div className={classes.div2}>
        <p className={classes.category}>{props.post.category}</p>
        <p className={classes.time}>2 hours ago</p>
        <p className={classes.title}>{props.post.title}</p>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </p>
        <p className={classes.more}>Read more&emsp;&#8594;</p>
      </div>
    </div>
  );
};

export default PostItem;
