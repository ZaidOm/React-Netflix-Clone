import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
      <Route exact path='/signin'>
        <SignIn />
      </Route>
      <Route exact path='/browse'>
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
