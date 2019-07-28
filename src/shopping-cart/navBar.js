import React from "react";
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { addProduct } from '../actions/cartActions';




const NavBar = (props) => {

  let product = {}

  const changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    product[name] = value
  }

  const addProduct = () => {
    props.addProduct(product)
  }

  let count = props.counter
  console.log(props)
  return (
    <div>
      <Nav className="justify-content-end navbar nvbar fixed-top "
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <h1 className="nav-headng ex4 " >Shopping Cart<Link to="/addToCart">
          <span className="p1 fa-stack fa-2x has-badge" data-count={count}>
            <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse  bucet"></i>
          </span>


        </Link></h1>
        <Nav.Item>
          <Nav.Link className="navlink" >
            <Link to="/home/products">HOME</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink" >
            <Link to="/About">ABOUT</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink" >
            <Link to="/Contact">CONTACT</Link>
          </Nav.Link>
        </Nav.Item>
        <Button variant="primary" style={{ backgroundColor: 'white', color: '#f57224', border: '0', fontWeight: 'bold' }} data-toggle="modal" data-target="#demoModal" >ADD PRODUCTS</Button>
      </Nav>
      {/* MODAL START HERE */}
      <div className="modal fade modal " id="demoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title modal-heading "> Product Details</h3>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="inputsm">Product Name</label>
                  <input className="form-control input-sm" name='name' id="inputsm" type="text" onChange={changeHandler} />
                  <label for="inputsm">Product Price</label>
                  <input className="form-control input-sm" name='price' id="inputsm" type="number" onChange={changeHandler} />
                  <label for="inputsm">Product category</label>
                  <input className="form-control input-sm" name='category' id="inputsm" type="text" onChange={changeHandler} />
                  <label for="inputsm">Image Url</label><br />
                  <input className="form-control input-sm" name='image' id="inputsm" type="text" onChange={changeHandler} />


                </div>

                <div className="modal-footer">
                  <a href="#" onClick={addProduct} style={{ backgroundColor: 'white', color: '#f57224' }} data-dismiss="modal">
                    Add product
                   </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter,

  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
