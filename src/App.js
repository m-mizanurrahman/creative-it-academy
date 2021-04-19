import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import AddEvents from "./components/AddEvents/AddEvents";
import AddReview from "./components/AddReview/AddReview";
import Buy from "./components/Buy/Buy";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import IndividualOrder from "./components/IndividualOrder/IndividualOrder";
import Login from "./components/Login/Login";
import Manage from "./components/Manage/Manage";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipment from "./components/Shipment/Shipment";

export const UserContext = createContext();

export default function BasicExample() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p style={{textAlign: 'right'}}> {loggedInUser.name}</p>
      <Router>                   
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/addEvent">
              <AddEvents />
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute path="/Order">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/IndividualOrder">
              <IndividualOrder />
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <Manage />
            </PrivateRoute>
            <PrivateRoute path="/event/:eventKey">
              <Buy></Buy>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/shipment">
              <Shipment />
            </Route>
            <PrivateRoute path="/addAdmin">
              <AddAdmin />
            </PrivateRoute>            
          </Switch>        
      </Router>
    </UserContext.Provider>
  );
}


