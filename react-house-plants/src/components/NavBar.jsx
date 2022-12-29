import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <NavLink
        to="/fated-plant"
        className={({ isActive }) =>
          isActive ? classes.btn + " " + classes.active : classes.btn
        }
      >
        Your fated plant
      </NavLink>
      <NavLink
        to="/all-plants"
        className={({ isActive }) =>
          isActive ? classes.btn + " " + classes.active : classes.btn
        }
      >
        All plants catalogue
      </NavLink>
    </div>
  );
};

export default NavBar;
