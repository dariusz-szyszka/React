import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.tab}>
          <Link to="/counter">Counter</Link>
        </li>
        <li className={classes.tab}>
          <Link to="/diary">Diary</Link>
        </li>
        <li className={classes.tab}>
          <Link to="/store">Store</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default NavigationBar;
