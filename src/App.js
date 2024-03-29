import React , { Component } from 'react';

import Navbar from './Navbar';
import Routes from './Routes';

import './App.css';

import hazel from './img/hazel.jpeg';
// import scooby from './img/scooby.jpeg';
import tubby from './img/tubby.jpeg';
import whiskey from './img/whiskey.jpeg';


class App extends Component {
    static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },
      // {
      //   name: "Scooby",
      //   age: 4,
      //   src: scooby,
      //   facts: [
      //     "Scooby is not the brightest dog",
      //     "Scooby does not like walks or exercise.",
      //     "Scooby loves eating food."
      //   ]
      // }
    ]
  }
  render() {
    return (
      <div className="App">
      <Navbar dogs={this.props.dogs} />
      <Routes dogs={this.props.dogs} />
      </div>
    );
  }
}

export default App;
