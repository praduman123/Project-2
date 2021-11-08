import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
import logo from "../src/images/logo.png"

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
           
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    Sale 24</NavLink>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" 
    id="navbarSupportedCon tent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink activeClassName="menu_active"
           exact
           className="nav-link active" aria-current="page" to="/">
          Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" 
          className="nav-link" to="/service" >
          Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" 
          className="nav-link" to="/about">
          About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" 
          className="nav-link" to="/contact">
          Contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
}

export default Navbar
