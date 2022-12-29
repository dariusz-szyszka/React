import React from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {
  return (
    <div className={classes.addPostContainer}>
      <input
        type="text"
        className={classes.addTitle}
        value={props.title}
        onChange={props.changeTitle}
        placeholder="Title"
        autoFocus={true}
      ></input>
      <textarea
        className={classes.addDescription}
        value={props.description}
        onChange={props.changeDescription}
        placeholder="Description"
      ></textarea>
      <button className={classes.addPost} onClick={props.addPost}>
        add post
      </button>
    </div>
  );
};

export default NewPost;
