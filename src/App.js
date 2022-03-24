import React from 'react';
import Main from './components/main';
import Home from './components/home';
import Login from './components/login';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Register from './components/register';

function App() {
  return (
    
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
        </Route>
      <Route path="/register">
        <Register />
        </Route>
        </Switch>
      
  </Router>
     
  );
}

export default App;
