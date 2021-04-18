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
      <p> {loggedInUser.name}</p>
      <Router>
        <div>
          {/* <ul class="navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addEvent">Admin</Link>
            </li>
            <li>
              <Link to="/addReview">Add a Review</Link>
            </li>
            <li>
              <Link to="/Order">Order</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul> */}
          
          

          <hr />
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
        </div>
      </Router>
    </UserContext.Provider>
  );
}


