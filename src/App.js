import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Volunteer from './components/Volunteer/Volunteer';
import Events from './components/events/Events';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventCard from './components/events/EventCard';
import Admin from './components/Admin/Admin';

export const userContex = createContext();

function App() {

  const [logedInUser,setLogedInUser] = useState({hello : 'hello'});

  return (
    <userContex.Provider value={[logedInUser,setLogedInUser]}>

        <div className="container">
          <Router>
              <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <PrivateRoute path="/volunteer/:event">
                    <Volunteer></Volunteer>
                  </PrivateRoute>
                  <PrivateRoute path="/events">
                      <Events></Events>
                  </PrivateRoute>
                  <Route path="/admin">
                      <Admin></Admin>
                  </Route>
              </Switch>
          </Router>
        </div>
  
    </userContex.Provider>
  );
}

export default App;
