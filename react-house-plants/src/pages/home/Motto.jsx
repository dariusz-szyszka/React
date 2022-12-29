import classes from "./Motto.module.css";

const Motto = () => {
  return (
    <div className={classes.container}>
      <h1>Our motto</h1>
      <div className={classes.quote}>
        <p className={classes.text}>
          We are what we repeatedly do. Excellence, then, is not an act, but a
          habit.
        </p>
        <p className={classes.author}>Aristotle</p>
      </div>
    </div>
  );
};

export default Motto;
