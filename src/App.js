import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect,
} from 'react-router-dom';
import UserDetails from './components/UserDetails'
import './App.css';
import Home from './pages/Home';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/:mail">
            <UserDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
