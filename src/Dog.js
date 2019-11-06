import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Dog.css'
class Dog extends Component {
  constructor(props) {
    super(props);
    
    this.renderDog = this.renderDog.bind(this);
  }

  renderDog(name) {
    let dog = this.props.dogs.find( dog => dog.name === name);
    
    return (
      <div className="col-11 col-lg-5 ">
        <div className="card Dog-card">
          <img className="card-img-top" src={dog.src} alt={dog.name}/>
          <div className="card-body">
            <h2 className="card-title">{dog.name}</h2>
            <h4 className="card-subtitle text-muted">{dog.age} yeras old</h4>
          </div>
          <ul className="list-group list-group-flash">
            { 
              dog.facts.map((fact, i) => <li className="list-group-item" key={i}>{fact}</li>) 
            }
          </ul>
          <div className="card-body">
            <Link className="btn btn-info" to='/dogs'>
              Go back
            </Link>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="Dog row justify-content-center mt-5">{ this.renderDog(this.props.match.params.name) }</div>
      </div>
    )
  }
}

export default Dog;
