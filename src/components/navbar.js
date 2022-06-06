import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
  return(
      <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg p-2">
        <Link to="/" className="navbar-brand font-weight-light">FullStack [MERN] - CRUD Operations</Link>
 
      </nav>
      </>
  )
}

export default Navbar;