import React from "react";
import classes from "./ExistingPost.module.css";

const ExistingPost = (props) => {
  return (
    <div className={classes.allPostsContainer}>
      <input
        type="text"
        className={classes.existingTitle}
        value={props.title}
        disabled={true}
      ></input>
      <textarea
        className={classes.existingDescription}
        value={props.description}
        disabled={true}
      ></textarea>
      <button className={classes.removePost} onClick={props.removePost}>
        remove post
      </button>
    </div>
  );
};

export default ExistingPost;
