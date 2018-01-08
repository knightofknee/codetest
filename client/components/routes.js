import React from 'react'
import Counter from './Counter.js'
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import history from './history';

class Routes extends React.Component {

  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route path='/' component={Counter} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
