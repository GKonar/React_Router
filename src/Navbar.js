import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

import './Navbar.css';

class Navbar extends Component {
  render() {
    const { dogs } = this.props

    return (
      <div className="Navbar">
        <NavLink to='/dogs'>DOGS</NavLink>
        {
          dogs.map((dog, i) => {
            return <NavLink key={i} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
          })
        }
      </div>
    )
  }
}

export default Navbar;