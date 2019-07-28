import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import About from "../components/about";
import Contact from "../components/contact";
import ProductRoutes from "./product-routers";
import Cart from "../shopping-cart/addToCart";
import NavBar from "./navBar"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <br />
      <div className="container">
        <Switch>
        <Route exact path="/" render={() => (
    <Redirect to="/home/products"/>
)}/>  
          <Route path="/home" component={ProductRoutes} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/addToCart" component={Cart} />

        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
