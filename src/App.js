// we're going to use
// firebase 
// chatengine RESTAPI

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// context
import { AuthProvider } from './context/AuthContext';

import Login from './components/login/login';
import Chats from './components/chats/chats';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/chats' component={Chats} />
            <Route path='/' component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
