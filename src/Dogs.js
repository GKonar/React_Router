import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Dogs extends Component {
  render() {
    const { dogs } = this.props;
    return (
      <div>
        <h1>Welcome from dogs/home page</h1>
        {
          dogs.map((dog, i) => {
            return (
              <div className="Dogs" key={i}>
                <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
              </div>
              )
          })
        }
      </div>
    )
  }
}
