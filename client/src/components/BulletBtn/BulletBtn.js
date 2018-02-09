import React from "react";
import "./BulletBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const BulletBtn = props => (
  <span className="bullet-btn" {...props}>
    ⋮
  </span>
);

export default BulletBtn;
