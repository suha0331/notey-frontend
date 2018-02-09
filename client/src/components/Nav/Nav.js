import React from "react";
import logo from "./img/notey_logo.png"

const Nav = () =>
  <nav className="navbar navbar-top">
	   <div className="text-center">
	        <a href="/" class="logo">
	            <img src={logo} width="258" height="133" alt={"logo"} />
	        </a>
	    </div>
  </nav>;

export default Nav;
