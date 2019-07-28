import React from "react";
import Slider from "./slider";
import { Link } from "react-router-dom";


const SideBar = () => {

    return (
        <div className="card">
            <div className="card-block">
                <h4 className="card-title">Categories</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="mobile.html" className="card-link"> <Link to={'/home/mobile'} className="brand-logo">Mobile </Link></a></li>
                <li className="list-group-item"><a href="watches.html" className="card-link"><Link to={'/home/watches'} className="brand-logo">Watches </Link></a></li>
                <li className="list-group-item"><a href="shoes.html" className="card-link"><Link to={'/home/shoes'} className="brand-logo">Shoes </Link></a></li>
            </ul>
        </div>
    );

}


export default SideBar;