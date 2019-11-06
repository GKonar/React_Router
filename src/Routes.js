import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dog from './Dog';
import Dogs from './Dogs';

 class Routes extends Component {
  render() {
    return (
    <Switch>
      <Route exact path="/dogs" render={() => <Dogs dogs={this.props.dogs}/> }/>
      <Route 
        exact path="/dogs/:name" 
        render={(routeProps) => <Dog {...routeProps} 
        dogs={this.props.dogs}/>}/>
      <Redirect to="/dogs" />
    </Switch>
    )
  }
}

export default Routes;