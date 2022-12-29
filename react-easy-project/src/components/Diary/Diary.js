import React, { useState } from "react";
import "./Diary.module.css";
import ExistingPost from "./ExistingPost";
import NewPost from "./NewPost";

const Diary = () => {
  const [newTitleValue, setNewTitleValue] = useState("");
  const [newDescriptionValue, setNewDescriptionValue] = useState("");

  const [titleDescriptionArray, setTitleDescriptionArray] = useState([]);

  const handleChangeTitle = (event) => {
    setNewTitleValue(event.currentTarget.value);
  };

  const handleChangeDescription = (event) => {
    setNewDescriptionValue(event.currentTarget.value);
  };

  const handleAddPost = (event) => {
    if (
      newTitleValue &&
      newDescriptionValue &&
      !titleDescriptionArray.some(
        (element) =>
          element.title === newTitleValue ||
          element.description === newDescriptionValue
      )
    ) {
      setTitleDescriptionArray((oldArray) => [
        {
          title: newTitleValue,
          description: newDescriptionValue,
        },
        ...oldArray,
      ]);
    } else if (!newTitleValue) {
      alert("You need to fill the title to add a new post.");
      event.currentTarget.parentNode.firstChild.focus();
    } else if (!newDescriptionValue) {
      alert("You need to fill the description to add a new post.");
      event.currentTarget.parentNode.childNodes[1].focus()
    } else if (
      titleDescriptionArray.some((element) => element.title === newTitleValue)
    ) {
      alert("You have already added a post with the same title.");
      event.currentTarget.parentNode.firstChild.focus();
    } else if (
      titleDescriptionArray.some(
        (element) => element.description === newDescriptionValue
      )
    ) {
      alert("You have already added a post with the same description.");
      event.currentTarget.parentNode.childNodes[1].focus()
    }
  };

  const handleRemovePost = (event) => {
    const titleToDelete = event.currentTarget.parentNode.firstChild.value;
    const descriptionToDelete =
      event.currentTarget.parentNode.childNodes[1].value;
    setTitleDescriptionArray(
      titleDescriptionArray.filter(
        (element) =>
          element.title !== titleToDelete &&
          element.description !== descriptionToDelete
      )
    );
  };

  return (
    <div>
      <h2>Add a new post to your diary</h2>
      <NewPost
        title={newTitleValue}
        description={newDescriptionValue}
        changeTitle={handleChangeTitle}
        changeDescription={handleChangeDescription}
        addPost={handleAddPost}
      />
      <h2>Take a look at all your posts</h2>
      {titleDescriptionArray.length > 0 ? (
        titleDescriptionArray.map((object, index) => (
          <ExistingPost
            key={index}
            title={object.title}
            description={object.description}
            removePost={handleRemovePost}
          />
        ))
      ) : (
        <p>You haven't added any posts yet. Start adding some!</p>
      )}
    </div>
  );
};

export default Diary;
