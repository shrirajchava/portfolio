import React from "react";
import {FaAlignJustify } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
function NavBar (){
    const [state, setState] = React.useState(true);
    return(
<nav className="navbar">
    <div className="container">
        <div className="navbar_container">
            <ul className="navbar_left">
                <div className="navbar_left-logo">
                    <img src="./image/logo-img.png" alt=""  />
                </div>
            </ul>
            {state ? (
                <ul className="navbar__right">
                 <li><NavLink to="Header">Home</NavLink></li>
                 <li><NavLink to="Services">Services</NavLink></li>
                 <li><NavLink to="About">About</NavLink></li>
                 <li><NavLink to="Portfolio">Portfolio</NavLink></li>
                 <li><NavLink to="skills">skills</NavLink></li>
                 
                 <li><NavLink to="contact">contact</NavLink></li>
                </ul>
            ):(
                ""
            )}
        </div>
    </div>
    <div className="toggle" onClick={()=>setState(!state)}>
<FaAlignJustify />
    </div>
</nav>

    )
}
export default NavBar;