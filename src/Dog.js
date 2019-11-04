import React, { Component } from 'react'

class Dog extends Component {
  constructor(props) {
    super(props);
    
    this.renderDog = this.renderDog.bind(this);
  }

  renderDog(name) {
    let dog = this.props.dogs.find( dog => dog.name === name);
    console.log(dog);
    return (
      <div>
        <h1>{dog.name}</h1>
        <h3>Age: {dog.age}</h3>
        <img src={dog.src} alt={dog.name}/>
        <ul>
          { 
            dog.facts.map((fact, i) => <li key={i}>{fact}</li>) 
          }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>{ this.renderDog(this.props.match.params.name) }</div>
    )
  }
}

export default Dog;
