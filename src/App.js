// we're going to use
// firebase 
// chatengine RESTAPI

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './components/login/login';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
