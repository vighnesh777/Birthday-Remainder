import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#">Birthday Calendar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><img alt="Burger Icon"src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png"/></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active1" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link active1" to="/today">Birthdays Today</Link>
      <Link className="nav-item nav-link " to="/add">Add Birthday</Link>
    </div>
  </div>
</nav>
    )
}
export default NavBar;