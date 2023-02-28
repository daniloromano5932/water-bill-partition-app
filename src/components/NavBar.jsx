import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return <nav>
 <h3><Link to="/" className="link">HOME</Link></h3>
  </nav>
}

export default NavBar;