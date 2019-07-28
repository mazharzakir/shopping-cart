import React, { Component } from "react";

import SideBar from "./sideBar";
import Slider from "./slider";
import NavBar from "./navBar";
import Mobile from "./mobile";
import Home from "./home";
import Shoes from "./shoes";
import Watches from "./watches";

import { Route, Switch} from "react-router"
import About from "../components/about";
import Contact from "../components/contact";

class ProductRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: "Iphone", price: 50, image: "images2.jpg", type: "mobile" },
        { name: "Samsung", price: 60, image: "", type: "mobile" },
        { name: "Bonanaza", price: 100, image: "", type: "shoes" },
        { name: "Bonanza2", price: 200, image: "", type: "shoes" },
        { name: "Rolex", price: 900, image: "", type: "watch" },
        { name: "Timez", price: 50, image: "", type: "watch" }
      ]
    };
  }
  render() {
    return (
      <section>
        {/* <NavBar />
        <div className="container"> */}
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9">
              <Slider />
              <Switch>
                  <Route path="/home/products" component={Home} />
                  <Route path="/home/mobile" component={Mobile} />
                  <Route path="/home/shoes" component={Shoes} />
                  <Route path="/home/watches" component={Watches} /> 
               </Switch>
               {/* <Route path="/About" component={About} /> 
               <Route path="/Contact" component={Contact} />  */}


            </div>
          </div>
        {/* </div> */}
      </section>
    );
  }
}

export default ProductRoutes;
