import React from 'react'
import Game from './Game.js'
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import history from './history';

class Routes extends React.Component {

  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route path='/' component={Game} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
