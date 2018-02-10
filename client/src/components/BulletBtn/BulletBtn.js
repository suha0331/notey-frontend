import React from "react";
import "./BulletBtn.css";
import bullets from "./img/bullets.png"

const BulletBtn = props => (
  <span className="bullet-btn" {...props}>
  	<img src={bullets} width="42" height="27" alt={"bullets"}/>

  </span>
);

export default BulletBtn;
