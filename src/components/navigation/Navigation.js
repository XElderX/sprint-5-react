import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => (
  <nav className="navbar navbar-dark bg-dark">
  
  <div className="navbar">
<span className="nav-item"
    >
  <NavLink className={({ isActive}) => (isActive ? "nav-link x active" : "x nav-link ")} to="/greeter">Greeter Component </NavLink>
</span>
<span className="nav-item">
  <NavLink className={({ isActive}) => (isActive ? "nav-link x active" : "x nav-link ")} to="/shoppinApp">Shopping Application</NavLink>
</span>
</div>
</nav>
);


export default Navigation;