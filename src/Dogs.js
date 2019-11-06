import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Dogs.css';
class Dogs extends Component {
  render() {
    const { dogs } = this.props;
    return (
      <div className="Dogs">
        <h1 className="display-1 text-center" >Dog list</h1>
        <div className="container">
          <div className="row">
            {
              dogs.map((dog, i) => {
                return (
                  <div className="Dogs-dog col-lg-4 text-center" key={i}>
                    <Link to={`/dogs/${dog.name}`}>
                      <img src={dog.src} alt={dog.name} />
                      <h3> {dog.name} </h3>
                    </Link>
                  </div>
                  )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Dogs;