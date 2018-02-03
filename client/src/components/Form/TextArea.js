import React from "react";
import "./form.css";

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>;
