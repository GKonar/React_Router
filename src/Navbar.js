import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'; 

import './Navbar.css';

class Navbar extends Component {
  render() {
    const { dogs } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to='/dogs'>
          Dog App
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"> 
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <NavLink className="nav-link" exact to='/dogs'>Home</NavLink>
          {
            dogs.map((dog, i) => {
              return (
                <li key={i} className="nav-item">
                  <NavLink className="nav-link" exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                </li>
              )
            })
          }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;