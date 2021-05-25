import React from "react";
import { useStyles } from "./styles.jsx";

const Button = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={`btn btn-primary ${classes.button}`}>Search</button>
    </div>
  );
};

export default Button;
