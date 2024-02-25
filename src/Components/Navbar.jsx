import React from "react";
import { Link } from "react-router-dom"
function Navbar(){
    return <>
     <div>
      <Link to="about">Contries</Link> &nbsp;
      <Link to="contact">Contact</Link> &nbsp;
      <Link to="info">Info</Link> &nbsp;
    </div>
    </>
}

export default Navbar