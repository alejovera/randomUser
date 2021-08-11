import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import UserDetails from './components/UserDetails'
import './App.css';
import Home from './pages/Home';

// import { useUsuario } from './context/userContext';


function App() {

  // const { usersData } = useUsuario()
  // console.log({usersData});


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
