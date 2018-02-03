import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-warning btn-lg">
    {props.children}
  </button>;
