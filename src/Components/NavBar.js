import React from 'react'
import { NavLink } from 'react-router-dom';
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>

      <nav className="navbar fixed-top navbar-expand-lg bg-light Navv" >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">NewsLite</NavLink>
          
          <button className="navbar-toggler btn_c"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item NavList" > <NavLink className="nav-link" aria-current="page" to="/">General</NavLink> </li>
              <li className="nav-item NavList" > <NavLink className="nav-link" to="/business">Business</NavLink></li>
              <li className="nav-item NavList"> <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item NavList">  <NavLink className="nav-link " to="/health">Health</NavLink> </li>
              <li className="nav-item NavList"> <NavLink className="nav-link " to="/science">Science</NavLink></li>
              <li className="nav-item NavList"> <NavLink className="nav-link " to="/sport">Sport</NavLink></li>
              <li className="nav-item NavList"><NavLink className="nav-link " to="/technology">Technology</NavLink></li>

            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2 FindBar" type="search" placeholder="Search News" aria-label="Search" />
              <button className="btn btn-outline-success FindBar" type="submit">Search</button>
            </form> */}
          </div>

        </div>
      </nav>
    </div>
  )
}


export default NavBar;