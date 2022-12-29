import classes from "./HomePic.module.css";
import redBerryPic from "../../img/red-berry-pic.jpg";
import cranBerryPic from "../../img/cran-berry-pic.jpg";
import blackBerryPic from "../../img/black-berry-pic.jpg";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const HomePic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState();
  const [currentDescription, setCurrentDescription] = useState("");

  const openModal = (e) => {
    setIsModalOpen(true);
    setCurrentImg(e.target.src);
    setCurrentDescription(e.target.alt);
    document.querySelector("body").style.pointerEvents = "none";
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow = "hidden";
  };

  const closeModal = (e) => {
    setIsModalOpen(false);
    document.querySelector("body").style.pointerEvents = "auto";
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <>
      <div className={classes.container}>
        <h1>Welcome to our wonderful garden!</h1>
        <div>
          <img
            src={redBerryPic}
            alt="red-berry-pic"
            className={classes.pic}
            onClick={openModal}
          />
          <img
            src={cranBerryPic}
            alt="cran-berry-pic"
            className={classes.pic}
            onClick={openModal}
          />
          <img
            src={blackBerryPic}
            alt="black-berry-pic"
            className={classes.pic}
            onClick={openModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className={classes.gallery}>
          <RxCross2
            id="closeCross"
            className={classes.cross}
            onClick={closeModal}
          />
          <img src={currentImg} onClick={closeModal}></img>
          <span>{currentDescription.slice(0, -3).split("-")}</span>
        </div>
      )}
    </>
  );
};

export default HomePic;
