import NatFoodIcon from "../../img/natural-food-icon.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p>Site designed by me 🤣 App icons by icons8 </p>
      <img src={NatFoodIcon} alt="plant-me-logo" />
    </div>
  );
};
export default Footer;
