import Logo from "../img/flower-doodle-icon.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <Link to="/" className={classes.container}>
        <img src={Logo} alt="plant-me-logo" />
        <p>Plant me</p>
      </Link>
  );
};

export default Header;
