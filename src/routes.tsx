import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Home from './home';

const Routes = () => {
  return (<Switch>
    <Route path='/about' component={About} />
    <Route path='/' exact component={Home} />
  </Switch>)
};

export default Routes;
